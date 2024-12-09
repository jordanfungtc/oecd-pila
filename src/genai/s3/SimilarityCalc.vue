<script setup lang="ts">
import { VueLatex } from "vatex";
import { BIconCalculator } from "bootstrap-icons-vue";
import { BIcon1Circle, BIcon2Circle, BIcon3Circle } from "bootstrap-icons-vue";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>Similarity Score: Calculation</h2>
      <p>
        Let’s take a closer look at the math and calculate the similarity score
        between “cat” (0,1,1,0,1) and “dog” (1,1,1,0,1).
      </p>
      <p>
        We obtain that the similarity score between the embeddings of "cat" and
        "dog" is 0.866, which shows that they are quite similar.
      </p>
      <p>
        <strong>Optional Task:</strong>
        Calculate the similarity score between the embeddings of "cat"
        (0,1,1,0,1) and "car" (0,1,0,1,0).
      </p>
      <button class="btn" onclick="bonus_modal.showModal()">
        Reveal Answer
      </button>
    </div>
    <div class="w-3/5">
      <div class="flex flex-col gap-4 mt-8">
        <div class="pt-3 px-6 border rounded-xl items-center">
          <!-- Dot Product -->
          <h4 class="mt-0 flex gap-2 items-center">
            <BIcon1Circle class="w-5 h-5" />Dot product between embeddings
          </h4>
          <p class="text-sm my-0">
            Multiply each corresponding pair of numbers and add them up
          </p>
          <VueLatex
            class="flex-grow"
            expression="\text{Cat}\cdot\text{Dog}=0\times1+1\times1+1\times1+0\times0+1\times1=3"
            display-mode
            :fontsize="15"
          />
        </div>
        <div class="pt-3 px-6 border rounded-xl items-center">
          <!-- Magnitudes -->
          <h4 class="mt-0 flex gap-2 items-center">
            <BIcon2Circle class="w-5 h-5" />Magnitudes of each embeddings
          </h4>
          <p class="text-sm my-0">
            Square each number, add them up, and take square root of the sum
          </p>
          <div class="flex-grow">
            <VueLatex
              expression="\Vert\text{Cat}\Vert=\sqrt{0^2+1^2+1^2+0^2+1^2}=1.732"
              display-mode
              :fontsize="15"
            />
            <VueLatex
              expression="\Vert\text{Dog}\Vert=\sqrt{1^2+1^2+1^2+0^2+1^2}=2"
              display-mode
              :fontsize="15"
            />
          </div>
        </div>
        <div class="pt-3 px-6 border rounded-xl items-center">
          <!-- Similarity -->
          <h4 class="mt-0 flex gap-2 items-center">
            <BIcon3Circle class="w-5 h-5" />Similarity score
          </h4>
          <p class="text-sm my-0">
            Divide the dot product by the product of the magnitudes
          </p>
          <VueLatex
            class="flex-grow"
            expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Dog}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Dog}\Vert}=\frac{3}{1.732\times2}=0.866"
            display-mode
            :fontsize="15"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Bonus Modal -->
  <dialog id="bonus_modal" class="modal">
    <div class="modal-box">
      <h2 class="mt-0">Optional Task</h2>
      <p>
        Calculate the similarity score between the embeddings of "cat"
        (0,1,1,0,1) and "car" (0,1,0,1,0).
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
      <p>
        As expected, the similarity score between the words 'cat' and 'car'
        (0.408) is lower than that between 'cat' and 'dog' (0.866), as cars are
        less similar to cats than dogs are.
      </p>
      <a
        href="https://www.omnicalculator.com/math/cosine-similarity"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconCalculator /> Omni Cosine Similarity Calculator
      </a>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
