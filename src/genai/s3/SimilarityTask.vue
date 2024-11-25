<script setup lang="ts">
import { VueLatex } from "vatex";
import { BIconCalculator } from "bootstrap-icons-vue";
import { S3 } from "../states";
import { store } from "../../store";
</script>

<template>
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

  <div class="flex gap-2 justify-center items-center">
    <!-- Task Similarity -->
    <VueLatex
      expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Car}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Car}\Vert}=\frac{1}{1.732\times1.414}="
      display-mode
    />

    <!-- Answer Input -->
    <input
      type="number"
      class="input input-bordered w-32 my-0"
      placeholder="Answer"
      v-model="store.state[S3.SIM_CAT_CAR.state]"
      v-bind:class="{
        'input-success':
          store.state[S3.SIM_CAT_CAR.state] === S3.SIM_CAT_CAR.answer,
        'input-error':
          store.state[S3.SIM_CAT_CAR.state] != undefined &&
          store.state[S3.SIM_CAT_CAR.state] !== S3.SIM_CAT_CAR.answer,
      }"
    />
    <a
      href="https://www.omnicalculator.com/math/cosine-similarity"
      target="_blank"
      class="no-underline flex gap-2 items-center text-primary"
    >
      <BIconCalculator class="w-5 h-5" />
    </a>
  </div>

  <!-- Feedback Message -->
  <div
    class="alert mt-6 text-sm"
    v-if="store.state[S3.SIM_CAT_CAR.state] === S3.SIM_CAT_CAR.answer"
  >
    <span>✅</span>
    Well done! As expected, the similarity score between the words 'cat' and
    'car' (0.408) is lower than that between 'cat' and 'dog' (0.866), as cars
    are less similar to cats than dogs are.
  </div>
  <div
    class="alert mt-6 text-sm"
    v-else-if="store.state[S3.SIM_CAT_CAR.state] != undefined"
  >
    <span>❌</span>
    Not quite. Remember to round to 3 decimal places in your answer.
  </div>
</template>
