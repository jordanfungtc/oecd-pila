<script setup lang="ts">
import { ref } from "vue";
import carbonIcon from "/s4/carbon.png";
import treeIcon from "/s4/tree.png";
import powerIcon from "/s4/power.png";
import homeIcon from "/s4/home.png";

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
      <h2>Sustainability of AI</h2>
      <p>
        Apart from ethical considerations, the environmental impact of LLMs is
        also a growing concern. Training LLMs involves processing vast amounts
        of data, which requires significant electricity and computing power.
        This can be particularly problematic if the energy is sourced from
        non-renewable resources, such as fossil fuels.
      </p>
      <p>
        <strong>Task: </strong>
        Use the slider to examine how much energy it takes to train an LLM based
        on their size.
      </p>
    </div>
    <div class="w-2/3">
      <h3 class="mt-12">Training Phase</h3>
      <p>One-time cost to train the LLM model (Meta LLaMA)</p>

      <!-- Slider -->
      <div class="text-center">
        <strong>LLM Model Size (number of parameters)</strong>
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
        <span>7 bilion</span>
        <span>13 billion</span>
        <span>33 billion</span>
        <span>65 billion</span>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 gap-2">
        <div class="flex gap-4 items-center">
          <img :src="powerIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Power consumption</p>
            <h3 class="my-0">{{ training[modelSize].power }} MWh</h3>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <img :src="homeIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Annual electricity use of</p>
            <h3 class="my-0">
              {{ (training[modelSize].power / home).toFixed(0) }} homes
            </h3>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <img :src="carbonIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Carbon emission</p>
            <h3 class="my-0">{{ training[modelSize].carbon }} tonnes</h3>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <img :src="treeIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Annual carbon absoprtion of</p>
            <h3 class="my-0">
              {{ (training[modelSize].carbon / tree).toFixed(0) }} trees
            </h3>
          </div>
        </div>
      </div>

      <!-- Sources -->
      <p class="text-xs my-8">
        Touvron et al. (2023) LLaMA: Open and Efficient Foundation Language
        Models.
        <a href="https://arxiv.org/abs/2302.13971" target="_blank"> (arXiv)</a>.
        Assumes 2.7MWh per medium-sized home
        <a
          href="https://www.ofgem.gov.uk/average-gas-and-electricity-usage"
          target="_blank"
        >
          (Ofgem)</a
        >
        and 24.62kgCO2 per tree annually
        <a href="https://www.fortomorrow.eu/en/blog/co2-tree" target="_blank">
          (ForTomorrow)</a
        >.
      </p>
    </div>
  </div>
</template>
