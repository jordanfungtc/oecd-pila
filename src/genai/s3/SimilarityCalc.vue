<script setup lang="ts">
import { VueLatex } from "vatex";
import { useI18n } from "vue-i18n";
import { BIconCalculator } from "bootstrap-icons-vue";
import {
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
  BIconEyeFill,
} from "bootstrap-icons-vue";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <!-- Title -->
      <h2>{{ t("s3.similarityCalc.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s3.similarityCalc.paragraph1") }}</p>
      <p>{{ t("s3.similarityCalc.paragraph2") }}</p>

      <!-- Optional Task Instruction -->
      <p>
        <strong>{{ t("s3.similarityCalc.optionalTaskLabel") }}</strong>
        {{ t("s3.similarityCalc.optionalTaskInstruction") }}
      </p>

      <!-- Reveal Answer Button -->
      <button class="btn" onclick="optional_modal.showModal()">
        <BIconEyeFill class="w-5 h-5" />
        {{ t("s3.similarityCalc.revealAnswerLabel") }}
      </button>
    </div>

    <div class="w-3/5">
      <div class="flex flex-col gap-4 mt-8">
        <!-- Dot Product -->
        <div class="pt-3 px-6 border rounded-xl items-center">
          <h4 class="mt-0 flex gap-2 items-center">
            <BIcon1Circle class="w-5 h-5" />{{
              t("s3.similarityCalc.steps.dotProduct.title")
            }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s3.similarityCalc.steps.dotProduct.description") }}
          </p>
          <VueLatex
            class="w-full"
            expression="\text{Cat}\cdot\text{Dog}=0\times1+1\times1+1\times1+0\times0+1\times1=3"
            display-mode
            :fontsize="15"
          />
        </div>

        <!-- Magnitudes -->
        <div class="pt-3 px-6 border rounded-xl items-center">
          <h4 class="mt-0 flex gap-2 items-center">
            <BIcon2Circle class="w-5 h-5" />{{
              t("s3.similarityCalc.steps.magnitudes.title")
            }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s3.similarityCalc.steps.magnitudes.description") }}
          </p>
          <div class="w-full">
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

        <!-- Similarity -->
        <div class="pt-3 px-6 border rounded-xl items-center">
          <h4 class="mt-0 flex gap-2 items-center">
            <BIcon3Circle class="w-5 h-5" />{{
              t("s3.similarityCalc.steps.similarity.title")
            }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s3.similarityCalc.steps.similarity.description") }}
          </p>
          <VueLatex
            class="w-full"
            expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Dog}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Dog}\Vert}=\frac{3}{1.732\times2}=0.866"
            display-mode
            :fontsize="15"
          />
        </div>
      </div>
    </div>
  </div>

  <!-- Optional Task Modal -->
  <dialog id="optional_modal" class="modal">
    <div class="modal-box">
      <!-- Close Button -->
      <form method="dialog">
        <button class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
      </form>

      <!-- Answer Title -->
      <h2 class="mt-0">{{ t("common.answer") }}</h2>

      <!-- Task Instruction -->
      <p>{{ t("s3.similarityCalc.optionalTaskInstruction") }}</p>

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

      <!-- Optional Task Conclusion -->
      <p>{{ t("s3.similarityCalc.optionalTaskConclusion") }}</p>

      <!-- Calculator Link -->
      <a
        href="https://www.omnicalculator.com/math/cosine-similarity"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconCalculator /> {{ t("s3.similarityCalc.calculatorLinkLabel") }}
      </a>
    </div>
  </dialog>
</template>
