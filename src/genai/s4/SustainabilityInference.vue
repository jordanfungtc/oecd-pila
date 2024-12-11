<script setup lang="ts">
import { ref } from "vue";
import powerIcon from "/s4/power.png";
import homeIcon from "/s4/home.png";
import googleIcon from "/s4/google.png";
import phoneIcon from "/s4/phone.png";

const usage = ref(1);
const home = 2.7;
const query = 0.0029;
const google = query / 0.0003;
const phone = query / 0.01298;
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>Sustainability of AI</h2>
      <p>
        Now that you have an understanding of the energy consumption during the
        training phase, did you know that each time you prompt an LLM to provide
        a response, it also consumes energy?
      </p>
      <p>
        <strong>Task: </strong>
        Use the slider on the right to examine how much energy an LLM consumes
        when it runs.
      </p>
    </div>
    <div class="w-2/3">
      <h3 class="mt-12">Inference Phase</h3>
      <p>Ongoing cost to use the LLM model (OpenAI ChatGPT)</p>

      <!-- Slider -->
      <div class="text-center">
        <strong>Number of LLM queries</strong>
      </div>
      <input type="range" min="1" max="200000" class="range" v-model="usage" />
      <div class="flex w-full justify-between px-2 text-sm mb-8">
        <span>1</span>
        <span>50 K</span>
        <span>100 K</span>
        <span>150 K</span>
        <span>200 K</span>
      </div>

      <!-- Statistics -->
      <div class="grid grid-cols-2 gap-2">
        <div class="flex gap-4 items-center">
          <img :src="powerIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Power consumption</p>
            <h3 class="my-0">
              {{ parseFloat((usage * query).toPrecision(2)) }} MWh
            </h3>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <img :src="homeIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Annual electricity use of</p>
            <h3 class="my-0">
              {{ parseFloat(((usage * query) / home).toPrecision(2)) }}
              homes
            </h3>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <img :src="googleIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Searching on Google</p>
            <h3 class="my-0">
              {{ parseFloat((usage * google).toPrecision(2)) }} times
            </h3>
          </div>
        </div>
        <div class="flex gap-4 items-center">
          <img :src="phoneIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">Charging a mobile phone</p>
            <h3 class="my-0">
              {{ parseFloat((usage * phone).toPrecision(2)) }} times
            </h3>
          </div>
        </div>
      </div>

      <!-- Sources -->
      <p class="text-xs my-8">
        De Vries, A. (2023). The growing energy footprint of artificial
        intelligence.
        <a
          href="https://www.sciencedirect.com/science/article/pii/S2542435123003653"
          target="_blank"
          >(ScienceDirect)</a
        >. Assumes ChatGPT 2.9Wh and Google search 0.3Wh per query, iPhone 15
        battery 12.98Wh.
      </p>
    </div>
  </div>
</template>
