<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import carbonIcon from "/s4/carbon.png";
import treeIcon from "/s4/tree.png";
import powerIcon from "/s4/power.png";
import homeIcon from "/s4/home.png";

const { t } = useI18n();
const modelSize = ref(0);
const home = 2.7;
const tree = 0.02462;
const training = [
  { params: 7, power: 36, carbon: 14 },
  { params: 13, power: 59, carbon: 23 },
  { params: 33, power: 233, carbon: 90 },
  { params: 65, power: 449, carbon: 173 },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.sustainability.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s4.sustainabilityTraining.paragraph1") }}</p>
      <p>{{ t("s4.sustainabilityTraining.paragraph2") }}</p>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.sustainabilityTraining.taskInstruction") }}
      </p>
    </div>

    <div class="w-2/3">
      <!-- Phase Title -->
      <h3 class="mt-12">{{ t("s4.sustainabilityTraining.phaseTitle") }}</h3>

      <!-- Phase Description -->
      <p>{{ t("s4.sustainabilityTraining.phaseDescription") }}</p>

      <!-- Slider -->
      <div class="justify-center items-center flex gap-2">
        <strong>{{ t("s4.sustainabilityTraining.sliderLabel") }}</strong>

        <div
          class="tooltip"
          :data-tip="t('s4.sustainabilityTraining.parametersTooltip')"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>
      <input
        type="range"
        min="0"
        max="3"
        class="range"
        step="1"
        v-model="modelSize"
      />
      <div class="flex w-full justify-between px-2 text-sm mb-8">
        <span>{{ t("s4.sustainabilityTraining.modelSizes.7b") }}</span>
        <span>{{ t("s4.sustainabilityTraining.modelSizes.13b") }}</span>
        <span>{{ t("s4.sustainabilityTraining.modelSizes.33b") }}</span>
        <span>{{ t("s4.sustainabilityTraining.modelSizes.65b") }}</span>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 gap-2">
        <!-- Power Consumption -->
        <div class="flex gap-4 items-center">
          <img :src="powerIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">{{ t("s4.sustainability.powerConsumption") }}</p>
            <h3 class="my-0">{{ training[modelSize].power }} MWh</h3>
          </div>
        </div>

        <!-- Annual Electricity Use of Homes -->
        <div class="flex gap-4 items-center">
          <img :src="homeIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">
              {{ t("s4.sustainability.annualElectricityUseOf") }}
            </p>
            <h3 class="my-0">
              {{ (training[modelSize].power / home).toFixed(0) }}
              {{ t("s4.sustainability.homes") }}
            </h3>
          </div>
        </div>

        <!-- Carbon Emission -->
        <div class="flex gap-4 items-center">
          <img :src="carbonIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">
              {{ t("s4.sustainabilityTraining.carbonEmission") }}
            </p>
            <h3 class="my-0">{{ training[modelSize].carbon }} tonnes</h3>
          </div>
        </div>

        <!-- Annual Carbon Absorption of Trees -->
        <div class="flex gap-4 items-center">
          <img :src="treeIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">
              {{ t("s4.sustainabilityTraining.annualCarbonAbsorptionOf") }}
            </p>
            <h3 class="my-0">
              {{ (training[modelSize].carbon / tree).toFixed(0) }}
              {{ t("s4.sustainabilityTraining.trees") }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Sources -->
      <p class="text-xs my-8">
        <a
          href="https://arxiv.org/abs/2302.13971"
          target="_blank"
          class="font-normal no-underline"
        >
          {{ t("s4.sustainabilityTraining.sourceLlama") }} {{ " " }}
        </a>
        <a
          href="https://www.ofgem.gov.uk/average-gas-and-electricity-usage"
          target="_blank"
          class="font-normal no-underline"
        >
          {{ t("s4.sustainabilityTraining.sourceHome") }} {{ " " }}
        </a>
        <a
          href="https://www.fortomorrow.eu/en/blog/co2-tree"
          target="_blank"
          class="font-normal no-underline"
        >
          {{ t("s4.sustainabilityTraining.sourceTree") }}.
        </a>
      </p>
    </div>
  </div>
</template>
