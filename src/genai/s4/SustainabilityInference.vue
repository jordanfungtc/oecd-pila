<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import powerIcon from "/s4/power.png";
import homeIcon from "/s4/home.png";
import googleIcon from "/s4/google.png";
import phoneIcon from "/s4/phone.png";

const { t } = useI18n();
const usage = ref(1);
const home = 2.7;
const query = 0.0029;
const google = query / 0.0003;
const phone = query / 0.01298;
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.sustainability.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s4.sustainabilityInference.paragraph1") }}</p>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.sustainabilityInference.taskInstruction") }}
      </p>
    </div>

    <div class="w-2/3">
      <!-- Phase Title -->
      <h3 class="mt-12">{{ t("s4.sustainabilityInference.phaseTitle") }}</h3>

      <!-- Phase Description -->
      <p>{{ t("s4.sustainabilityInference.phaseDescription") }}</p>

      <!-- Slider -->
      <div class="text-center">
        <strong>{{ t("s4.sustainabilityInference.sliderLabel") }}</strong>
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
        <!-- Power Consumption -->
        <div class="flex gap-4 items-center">
          <img :src="powerIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">{{ t("s4.sustainability.powerConsumption") }}</p>
            <h3 class="my-0">
              {{ parseFloat((usage * query).toPrecision(2)) }} MWh
            </h3>
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
              {{ parseFloat(((usage * query) / home).toPrecision(2)) }}
              {{ t("s4.sustainability.homes") }}
            </h3>
          </div>
        </div>

        <!-- Searching on Google -->
        <div class="flex gap-4 items-center">
          <img :src="googleIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">
              {{ t("s4.sustainabilityInference.searchingOnGoogle") }}
            </p>
            <h3 class="my-0">
              {{ parseFloat((usage * google).toPrecision(2)) }}
              {{ t("s4.sustainabilityInference.times") }}
            </h3>
          </div>
        </div>

        <!-- Charging Mobile Phone -->
        <div class="flex gap-4 items-center">
          <img :src="phoneIcon" class="w-12 h-auto my-2" />
          <div>
            <p class="my-0">
              {{ t("s4.sustainabilityInference.chargingMobilePhone") }}
            </p>
            <h3 class="my-0">
              {{ parseFloat((usage * phone).toPrecision(2)) }}
              {{ t("s4.sustainabilityInference.times") }}
            </h3>
          </div>
        </div>
      </div>

      <!-- Sources -->
      <p class="text-xs my-8">
        <a
          href="https://www.sciencedirect.com/science/article/pii/S2542435123003653"
          target="_blank"
          class="font-normal no-underline"
          >{{ t("s4.sustainabilityInference.sourceDeVries") }}
        </a>
        {{ t("s4.sustainabilityInference.sourceAssumption") }}
      </p>
    </div>
  </div>
</template>
