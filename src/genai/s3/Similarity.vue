<script setup lang="ts">
import { VueLatex } from "vatex";
import { BIconCalculator } from "bootstrap-icons-vue";
import { S3 } from "../states";
import { store } from "../../store";
</script>

<template>
  <h2>Similarity Score</h2>
  <p>
    As humans, natural language allows us to intuitively understand how similar
    two words are. But how does language models make sense of the similarity
    between two words? They can use something called a “similarity score.” This
    score ranges from -1 to 1, with higher scores indicating greater similarity
    in meaning between words.
  </p>
  <p>
    Let’s take a closer look at the math and calculate the similarity score
    between “😼 cat” (0,1,1,0,1) and “🐶 dog” (1,1,1,0,1).
  </p>

  <!-- Dot Product -->
  <div class="flex gap-4 items-center">
    <VueLatex
      class="flex-grow"
      expression="\text{Cat}\cdot\text{Dog}=0\times1+1\times1+1\times1+0\times0+1\times1=3"
      display-mode
    />
    <div
      class="tooltip"
      data-tip="Dot product: multiply each corresponding pair of numbers and adding them all together"
    >
      <button class="btn btn-xs btn-circle">?</button>
    </div>
  </div>

  <!-- Magnitudes -->
  <div class="flex gap-4 items-center my-0">
    <div class="flex-grow">
      <VueLatex
        expression="\Vert\text{Cat}\Vert=\sqrt{0^2+1^2+1^2+0^2+1^2}=1.732"
        display-mode
      />
      <VueLatex
        expression="\Vert\text{Dog}\Vert=\sqrt{1^2+1^2+1^2+0^2+1^2}=2"
        display-mode
      />
    </div>
    <div
      class="tooltip"
      data-tip="Magnitude: square each number, adding them all together, and taking the square root of the sum"
    >
      <button class="btn btn-xs btn-circle">?</button>
    </div>
  </div>

  <!-- Similarity -->
  <div class="flex gap-4 items-center">
    <VueLatex
      class="flex-grow"
      expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Dog}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Dog}\Vert}=\frac{3}{1.732\times2}=0.866"
      display-mode
    />
    <div
      class="tooltip"
      data-tip="Cosine similarity: divide the dot product by the product of the magnitudes"
    >
      <button class="btn btn-xs btn-circle">?</button>
    </div>
  </div>

  <h2>Similarity Score</h2>
  <p>
    <strong>Task:</strong>
    Calculate the similarity score between the word embeddings of "😼 cat"
    (0,1,1,0,1) and "🚗 car" (0,1,0,1,0). Which of the pairs of words are more
    related: cat and car, or cat and dog?
  </p>

  <!-- Dot Product -->
  <VueLatex
    expression="\text{Cat}\cdot\text{Car}=0\times0+1\times1+1\times0+0\times1+1\times0=1"
    display-mode
  />

  <!-- Magnitudes -->
  <div>
    <VueLatex
      expression="\Vert\text{Cat}\Vert=\sqrt{0^2+1^2+1^2+0^2+1^2}=1.732"
      display-mode
    />
    <VueLatex
      expression="\Vert\text{Car}\Vert=\sqrt{0^2+1^2+0^2+1^2+0^2}=1.414"
      display-mode
    />
  </div>

  <!-- Task Similarity -->
  <VueLatex
    expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Car}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Car}\Vert}=\frac{1}{1.732\times1.414}=0.408"
    display-mode
  />

  <a
    href="https://www.omnicalculator.com/math/cosine-similarity"
    target="_blank"
    class="no-underline flex gap-2 items-center text-primary"
  >
    <BIconCalculator class="w-5 h-5" />
  </a>

  <p>
    As expected, the similarity score between the words 'cat' and 'car' (0.408)
    is lower than that between 'cat' and 'dog' (0.866), as cars are less similar
    to cats than dogs are.
  </p>
</template>
