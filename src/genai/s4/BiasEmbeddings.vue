<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  BIconArrowRightSquare,
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
} from "bootstrap-icons-vue";
import { S4 } from "../states";
import { store } from "../../store";
import { getBias } from "../../util/embeddings";
import genderBiasIcon from "/s4/gender-bias.png";
import racialBiasIcon from "/s4/racial-bias.png";
import religiousBiasIcon from "/s4/religious-bias.png";

const { t } = useI18n();

const biases = {
  gender: {
    labelKey: "s4.biasEmbeddings.biasTypes.gender",
    icon: genderBiasIcon,
    target1: "man",
    target2: "woman",
    attributes: [
      "s4.biasEmbeddings.attributeExamples.gender.nurse",
      "s4.biasEmbeddings.attributeExamples.gender.caring",
      "s4.biasEmbeddings.attributeExamples.gender.mechanic",
      "s4.biasEmbeddings.attributeExamples.gender.assertive",
      "s4.biasEmbeddings.attributeExamples.gender.architect",
      "s4.biasEmbeddings.attributeExamples.gender.sensitive",
      "s4.biasEmbeddings.attributeExamples.gender.receptionist",
      "s4.biasEmbeddings.attributeExamples.gender.logical",
    ],
  },
  racial: {
    labelKey: "s4.biasEmbeddings.biasTypes.racial",
    icon: racialBiasIcon,
    target1: "black",
    target2: "white",
    attributes: [
      "s4.biasEmbeddings.attributeExamples.racial.janitor",
      "s4.biasEmbeddings.attributeExamples.racial.lazy",
      "s4.biasEmbeddings.attributeExamples.racial.police",
      "s4.biasEmbeddings.attributeExamples.racial.hardworking",
      "s4.biasEmbeddings.attributeExamples.racial.violent",
      "s4.biasEmbeddings.attributeExamples.racial.criminal",
      "s4.biasEmbeddings.attributeExamples.racial.peaceful",
      "s4.biasEmbeddings.attributeExamples.racial.complacent",
    ],
  },
  religious: {
    labelKey: "s4.biasEmbeddings.biasTypes.religious",
    icon: religiousBiasIcon,
    target1: "muslim",
    target2: "christian",
    attributes: [
      "s4.biasEmbeddings.attributeExamples.religious.terrorist",
      "s4.biasEmbeddings.attributeExamples.religious.charitable",
      "s4.biasEmbeddings.attributeExamples.religious.dangerous",
      "s4.biasEmbeddings.attributeExamples.religious.compassionate",
      "s4.biasEmbeddings.attributeExamples.religious.conservative",
      "s4.biasEmbeddings.attributeExamples.religious.cult",
      "s4.biasEmbeddings.attributeExamples.religious.peaceful",
    ],
  },
};

const loading = ref(false);
const selectedBias = computed(() =>
  store.state[S4.BIAS_TYPE.state]
    ? biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases]
    : null,
);

const biasHandler = async () => {
  if (!store.state[S4.BIAS_TYPE.state]) {
    return window.alert(t("s4.biasEmbeddings.alerts.selectBiasType"));
  }
  if (!store.state[S4.BIAS_ATTRIBUTE.state]) {
    return window.alert(t("s4.biasEmbeddings.alerts.enterAttribute"));
  }
  loading.value = true;
  try {
    delete store.state[S4.BIAS_TARGET1_SIM.state];
    delete store.state[S4.BIAS_TARGET2_SIM.state];
    const biasScores = await getBias(
      store.state[S4.BIAS_ATTRIBUTE.state],
      biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases].target1,
      biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases].target2,
    );
    store.state[S4.BIAS_TARGET1_SIM.state] = biasScores[0];
    store.state[S4.BIAS_TARGET2_SIM.state] = biasScores[1];
  } catch (error) {
    window.alert(error);
  }
  loading.value = false;
};
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>{{ t("s4.biasEmbeddings.title") }}</h2>
      <p>
        {{ t("s4.biasEmbeddings.paragraph1") }}
      </p>
      <p>
        {{ t("s4.biasEmbeddings.paragraph2") }}
      </p>
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.biasEmbeddings.taskInstruction") }}
      </p>
    </div>
    <div class="w-1/2 mt-6 flex flex-col gap-4">
      <!-- Bias Type Selection -->
      <div class="p-4 border rounded-xl">
        <h4 class="mt-0 mb-2 flex gap-2 items-center">
          <BIcon1Circle class="w-5 h-5" />
          {{ t("s4.biasEmbeddings.steps.chooseBiasType") }}
        </h4>
        <div class="my-0 grid grid-cols-3 gap-2">
          <div
            v-for="(bias, key) in biases"
            :key="key"
            class="form-control px-2 border rounded-xl"
            :class="{
              'border-neutral': store.state[S4.BIAS_TYPE.state] === key,
            }"
          >
            <label class="label cursor-pointer">
              <span class="label-text">{{ t(bias.labelKey) }}</span>
              <input
                type="radio"
                name="radio-10"
                class="radio"
                :checked="store.state[S4.BIAS_TYPE.state] === key"
                @change="
                  () => {
                    store.state[S4.BIAS_TYPE.state] = key;
                    delete store.state[S4.BIAS_ATTRIBUTE.state];
                    delete store.state[S4.BIAS_TARGET1_SIM.state];
                    delete store.state[S4.BIAS_TARGET2_SIM.state];
                  }
                "
              />
            </label>
          </div>
        </div>
      </div>

      <!-- Attribute Word -->
      <div class="p-4 border rounded-xl">
        <h4 class="mt-0 mb-2 flex gap-2 items-center">
          <BIcon2Circle class="w-5 h-5" />
          {{ t("s4.biasEmbeddings.steps.enterAttributeWord") }}
        </h4>
        <!-- Input -->
        <div class="flex gap-2 items-center">
          <input
            type="text"
            v-model="store.state[S4.BIAS_ATTRIBUTE.state]"
            :placeholder="t('s4.biasEmbeddings.attributePlaceholder')"
            class="input input-bordered w-full"
          />
          <button @click="() => biasHandler()" class="btn" :disabled="loading">
            <span v-if="loading" class="loading"></span>
            <span v-else><BIconArrowRightSquare class="w-5 h-5" /></span>
          </button>
        </div>
        <!-- Examples -->
        <div v-if="store.state[S4.BIAS_TYPE.state]" class="mt-2">
          <span
            v-for="attributeKey in biases[
              store.state[S4.BIAS_TYPE.state] as keyof typeof biases
            ].attributes"
            :key="attributeKey"
            class="badge badge-ghost p-2 mr-2"
          >
            {{ t(attributeKey) }}
          </span>
        </div>
      </div>

      <!--  Similarity Scores Result -->
      <div class="p-4 border rounded-xl">
        <h4 class="my-0 flex gap-2 items-center">
          <BIcon3Circle class="w-5 h-5" />
          {{ t("s4.biasEmbeddings.steps.similarityScores") }}
        </h4>
        <div class="flex gap-4 mt-2">
          <!-- Bias Icon -->
          <img
            v-if="selectedBias"
            :src="selectedBias.icon"
            class="w-16 h-16 my-0"
          />
          <div class="w-full">
            <!-- Target 1 -->
            <div class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2">
              <b>{{
                selectedBias ? selectedBias.target1 : "--"
              }}</b>
              {{ store.state[S4.BIAS_TARGET1_SIM.state]?.toFixed(3) || "--" }}
            </div>
            <!-- Target 2 -->
            <div class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2">
              <b>{{
                selectedBias ? selectedBias.target2 : "--"
              }}</b>
              {{ store.state[S4.BIAS_TARGET2_SIM.state]?.toFixed(3) || "--" }}
            </div>
            <!-- Result -->
            <div v-if="store.state[S4.BIAS_TARGET1_SIM.state]">
              {{ t("s4.biasEmbeddings.resultLabel") }}
              <b>{{
                store.state[S4.BIAS_TARGET1_SIM.state] >
                store.state[S4.BIAS_TARGET2_SIM.state]
                  ? selectedBias?.target1
                  : selectedBias?.target2
              }}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
