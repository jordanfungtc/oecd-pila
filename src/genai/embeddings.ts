/**
 * Word Embeddings Service
 * Adapted from: https://github.com/mb-14/embeddings.js
 */

import * as lzstring from "lz-string";
import * as tf from "@tensorflow/tfjs";

const unpackVectors = function (data: string, type: string | undefined) {
  var jsonData = JSON.parse(lzstring.decompressFromBase64(data));
  // @ts-ignore
  var array = tf.tensor(jsonData.vectors, jsonData.shape, type);
  return array;
};

const fetchModel = async function (url: string | URL | Request) {
  var response = await fetch(url);
  var data = await response.json();
  return data;
};

class WordEmbeddings {
  vocabulary: any;
  centroids: any;
  codes: any;

  constructor(codes: any, centroids: any, vocabulary: any) {
    // tf.setBackend("wasm");
    this.vocabulary = vocabulary;
    this.centroids = centroids;
    this.codes = codes;
  }

  // _getVector returns the vector representation of a word as a tensor
  _getVector(word: any) {
    var index = this.vocabulary.indexOf(word);
    if (index === -1) {
      throw new Error(
        `The word "${word}" is not found in vocabulary. Please try another one.`
      );
    }
    var codes = this._getSearchVector(index);
    var indices = tf.range(0, this.codes.shape[1], 1, "int32");
    var search = tf.stack([indices, codes], -1);
    var vector = tf.gatherND(this.centroids, search).flatten();
    return vector;
  }

  _getSearchVector(index: any) {
    return this.codes.gather([index]).as1D();
  }

  _transformSequence(words: string | any[], sequenceLength: number) {
    var vectors = [];
    for (var i = 0; i < words.length; i++) {
      vectors.push(this._getVector(words[i]));
    }
    var sequence = tf.stack(vectors);
    sequence = sequence.pad([
      [sequenceLength - words.length, 0],
      [0, 0],
    ]);
    return sequence;
  }

  // _getVector returns a Promise the vector representation of a word as a float array
  getVector(word: any) {
    return this._getVector(word).dataSync();
  }

  // getCosineDistance returns the cosine distance between two word vectors
  getCosineDistance(word1: any, word2: any) {
    var vec1 = this._getVector(word1);
    var vec2 = this._getVector(word2);
    var dotProduct = vec1.dot(vec2).asScalar();
    var abs1 = vec1.norm(2);
    var abs2 = vec2.norm(2);
    var cosineDistance = dotProduct.div(abs1).div(abs2);
    return cosineDistance.dataSync()[0];
  }

  // getNearestNeighbors returns the closest k words from a given word
  async getNearestNeighbors(word: any, k = 5) {
    var vector = this._getVector(word);
    return await this._getNearestNeighbors(vector, k);
  }

  async _getNearestNeighbors(vector: any, k: any) {
    var neighbors = tf.tensor1d([]);
    var abs = vector.norm(2).asScalar();
    // Precompute distances
    // @ts-ignore
    var lookupTable = this._computeDistances(vector);
    await tf.nextFrame();

    // Calculate distance for each word vector
    var subdims = this.centroids.shape[0];
    const searchIndices = tf
      .range(0, subdims, 1, "int32")
      .tile([this.vocabulary.length]);
    const searchVectors = this.codes.flatten();
    var search = tf.stack([searchIndices, searchVectors], -1);
    var dotProducts = tf
      .gatherND(lookupTable[0], search)
      .reshape([this.vocabulary.length, -1]);
    var abs1 = tf
      .gatherND(lookupTable[1], search)
      .reshape([this.vocabulary.length, -1]);
    dotProducts = dotProducts.sum([1]);
    abs1 = abs1.sum([1]);
    neighbors = dotProducts.div(abs.mul(abs1.sqrt()));
    await tf.nextFrame();

    // Get top K distances
    var { values, indices } = tf.topk(neighbors, k + 1);
    await tf.nextFrame();
    // @ts-ignore
    values = values.dataSync();
    // @ts-ignore
    indices = indices.dataSync();
    var nearestNeighbors = [];
    // @ts-ignore
    for (var i = 1; i < indices.length; i++) {
      nearestNeighbors.push({
        // @ts-ignore
        word: this.vocabulary[indices[i]],
        // @ts-ignore
        distance: parseFloat(values[i].toFixed(2)),
      });
    }
    return nearestNeighbors;
  }

  async wordAnalogy(word1: any, word2: any, word3: any, k = 5) {
    var vector1 = this._getVector(word1);
    var vector2 = this._getVector(word2);
    var vector3 = this._getVector(word3);

    vector1 = vector1.div(vector1.norm());
    vector2 = vector2.div(vector2.norm());
    vector3 = vector3.div(vector3.norm());
    var vector = vector1.add(vector2).sub(vector3);
    return await this._getNearestNeighbors(vector, k);
  }

  // _computeDistances computes the partial dot products and l2 distances of an embedding
  // from all the centres
  _computeDistances(vector: {
    reshape: (arg0: any[]) => any;
    gather: (arg0: number[]) => {
      (): any;
      new (): any;
      squeeze: { (): any; new (): any };
    };
  }) {
    var subdims = this.centroids.shape[0];
    vector = vector.reshape([subdims, -1]);
    var squareSums = this.centroids.norm(2, 2).square();
    var dotProducts = [];
    for (var i = 0; i < subdims; i++) {
      var codeword = vector.gather([i]).squeeze();
      var centers = this.centroids.gather([i]).squeeze();
      var dotProduct = codeword.dot(centers.transpose());
      dotProducts.push(dotProduct);
    }
    // @ts-ignore
    dotProducts = tf.stack(dotProducts);
    return [dotProducts, squareSums];
  }
}

function getSimScore(emb1: number[], emb2: number[]): number {
  let score = 0;
  for (let i = 0; i < emb1.length; i++) {
    score += emb1[i] * emb2[i];
  }
  return parseFloat(score.toFixed(3));
}

const EMB_URL = "/embeddings.json";

/* Bias Function */
const getBias = async (attribute: string, target1: string, target2: string) => {
  const model = await fetchModel(EMB_URL);
  var codes = unpackVectors(model.codes, "int32");
  await tf.nextFrame();
  var centroids = unpackVectors(model.centroids, "float32");
  await tf.nextFrame();

  var emb = new WordEmbeddings(codes, centroids, model.vocabulary);
  var attributeEmb = await emb._getVector(attribute.toLowerCase().trim());
  var target1Emb = await emb._getVector(target1.toLowerCase().trim());
  var target2Emb = await emb._getVector(target2.toLowerCase().trim());

  attributeEmb = attributeEmb.div(attributeEmb.norm());
  target1Emb = target1Emb.div(target1Emb.norm());
  target2Emb = target2Emb.div(target2Emb.norm());

  const score1 = getSimScore(attributeEmb.arraySync(), target1Emb.arraySync());
  const score2 = getSimScore(attributeEmb.arraySync(), target2Emb.arraySync());
  return [score1, score2];
};

/* Word Analogy Function */
const getWordAnalogy = async (main: string, add: string, sub: string) => {
  const model = await fetchModel(EMB_URL);
  var codes = unpackVectors(model.codes, "int32");
  await tf.nextFrame();
  var centroids = unpackVectors(model.centroids, "float32");
  await tf.nextFrame();

  var emb = new WordEmbeddings(codes, centroids, model.vocabulary);
  const output = await emb.wordAnalogy(
    main.toLowerCase().trim(),
    add.toLowerCase().trim(),
    sub.toLowerCase().trim(),
    5
  );
  return output;
};

export { getBias, getWordAnalogy };
