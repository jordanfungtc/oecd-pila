<script setup lang="ts">
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";

const feats = [
  "Can bark",
  "Can move",
  "Is a mammal",
  "Has wheels",
  "Has a tail",
];

const embs = {
  dog: {
    label: "🐶",
    states: [
      S3.EMB_DOG_BARK,
      S3.EMB_DOG_MOVE,
      S3.EMB_DOG_MAMMAL,
      S3.EMB_DOG_WHEEL,
      S3.EMB_DOG_TAIL,
    ],
  },
  car: {
    label: "🚗",
    states: [
      S3.EMB_CAR_BARK,
      S3.EMB_CAR_MOVE,
      S3.EMB_CAR_MAMMAL,
      S3.EMB_CAR_WHEEL,
      S3.EMB_CAR_TAIL,
    ],
  },
};
</script>

<template>
  <h2>Creating Word Embeddings</h2>
  <p>
    Word embeddings help computers understand the meaning of words by looking at
    their features. For example, “cat” and “dog” might have similar embeddings
    because they share features such as “is a mammal” and “has a tail.” On the
    other hand, the word “car” would have very different embeddings.
  </p>
  <p>
    <strong>Task:</strong>
    Using the same set of features, create the embeddings for the words "dog"
    and "car" using the dropdowns below.
  </p>

  <table class="table table-sm my-0">
    <tbody>
      <tr>
        <th></th>
        <th v-for="(feat, i) in Object.keys(feats)" :key="i">
          <h3 class="my-0 text-center">
            {{ feats[feat as keyof typeof feats] }}
          </h3>
        </th>
      </tr>
      <tr>
        <td>
          <h3 class="my-0 text-center flex gap-4 items-center">
            <div class="text-3xl">😺</div>
            cat
          </h3>
        </td>
        <td><div class="text-center">0</div></td>
        <td><div class="text-center">1</div></td>
        <td><div class="text-center">1</div></td>
        <td><div class="text-center">0</div></td>
        <td><div class="text-center">1</div></td>
      </tr>
      <tr v-for="(emb, word) in embs" :key="word">
        <td>
          <h3 class="my-0 text-center flex gap-4 items-center">
            <div class="text-3xl">{{ emb.label }}</div>
            {{ word }}
          </h3>
        </td>
        <td v-for="(feat, i) in emb.states" :key="i">
          <SelectEmb :state="feat.state" :answer="feat.answer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
