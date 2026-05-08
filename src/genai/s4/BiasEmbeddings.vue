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

const { t, tm } = useI18n();

const biases = computed(() => ({
  gender: {
    icon: genderBiasIcon,
    target1: "man",
    target2: "woman",
    attributes: tm("s4.biasEmbeddings.attributeExamples.gender") as string[],
  },
  racial: {
    icon: racialBiasIcon,
    target1: "black",
    target2: "white",
    attributes: tm("s4.biasEmbeddings.attributeExamples.racial") as string[],
  },
  religious: {
    icon: religiousBiasIcon,
    target1: "muslim",
    target2: "christian",
    attributes: tm("s4.biasEmbeddings.attributeExamples.religious") as string[],
  },
}));

const loading = ref(false);

const selectedBias = computed(() =>
  store.state[S4.BIAS_TYPE.state]
    ? biases.value[store.state[S4.BIAS_TYPE.state] as keyof typeof biases.value]
    : null,
);

const biasHandler = async () => {
  // Compute similarity scores using embeddings model
  loading.value = true;
  try {
    delete store.state[S4.BIAS_TARGET1_SIM.state];
    delete store.state[S4.BIAS_TARGET2_SIM.state];
    const biasScores = await getBias(
      store.state[S4.BIAS_ATTRIBUTE.state],
      selectedBias.value?.target1 || "",
      selectedBias.value?.target2 || "",
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
      <!-- Title -->
      <h2>{{ t("s4.biasEmbeddings.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s4.biasEmbeddings.paragraph1") }}</p>
      <p>{{ t("s4.biasEmbeddings.paragraph2") }}</p>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.task") }}</strong>
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
            v-for="(_, key) in biases"
            :key="key"
            class="form-control px-2 border rounded-xl"
            :class="{
              'border-neutral': store.state[S4.BIAS_TYPE.state] === key,
            }"
          >
            <label class="label cursor-pointer">
              <span class="label-text">
                {{ t(`s4.biasEmbeddings.biasTypes.${key}`) }}
              </span>
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

      <div class="p-4 border rounded-xl">
        <h4 class="mt-0 mb-2 flex gap-2 items-center">
          <BIcon2Circle class="w-5 h-5" />
          {{ t("s4.biasEmbeddings.steps.enterAttributeWord") }}
        </h4>
        <div class="flex gap-2 items-center">
          <!-- Attribute Word Input -->
          <input
            type="text"
            v-model="store.state[S4.BIAS_ATTRIBUTE.state]"
            :placeholder="t('s4.biasEmbeddings.attributePlaceholder')"
            class="input input-bordered w-full"
          />

          <!-- Compute Button -->
          <button
            @click="() => biasHandler()"
            class="btn"
            :disabled="
              loading ||
              !store.state[S4.BIAS_TYPE.state] ||
              !store.state[S4.BIAS_ATTRIBUTE.state]
            "
          >
            <span v-if="loading" class="loading"></span>
            <span v-else><BIconArrowRightSquare class="w-5 h-5" /></span>
          </button>
        </div>

        <!-- Examples -->
        <div v-if="selectedBias" class="mt-2">
          <span
            v-for="attributeWord in selectedBias?.attributes"
            :key="attributeWord"
            class="badge badge-ghost p-2 mr-2"
          >
            {{ attributeWord }}
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
                selectedBias
                  ? t(`s4.biasEmbeddings.targetWords.${selectedBias?.target1}`)
                  : "--"
              }}</b>
              {{ store.state[S4.BIAS_TARGET1_SIM.state]?.toFixed(3) || "--" }}
            </div>

            <!-- Target 2 -->
            <div class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2">
              <b>{{
                selectedBias
                  ? t(`s4.biasEmbeddings.targetWords.${selectedBias?.target2}`)
                  : "--"
              }}</b>
              {{ store.state[S4.BIAS_TARGET2_SIM.state]?.toFixed(3) || "--" }}
            </div>

            <!-- Result -->
            <div v-if="store.state[S4.BIAS_TARGET1_SIM.state]">
              {{ t("s4.biasEmbeddings.resultLabel") }}
              <b>{{
                store.state[S4.BIAS_TARGET1_SIM.state] >
                store.state[S4.BIAS_TARGET2_SIM.state]
                  ? t(`s4.biasEmbeddings.targetWords.${selectedBias?.target1}`)
                  : t(`s4.biasEmbeddings.targetWords.${selectedBias?.target2}`)
              }}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
