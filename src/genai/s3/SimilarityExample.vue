<script setup lang="ts">
import { VueLatex } from "vatex";
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
</template>
