<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t, tm } = useI18n();
const promptTechniques = computed(
  () => tm("s2.promptTechniques.options") as string[],
);
</script>

<template>
  <h2>{{ t("s2.promptTechniques.title") }}</h2>
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s2.promptTechniques.taskInstruction") }}
  </p>
  <div
    v-for="(technique, index) in promptTechniques"
    :key="index"
    class="form-control px-2 border rounded-xl mb-2"
    :class="{
      'border-neutral': store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index,
    }"
  >
    <label class="label cursor-pointer">
      <span class="label-text">{{ technique }}</span>
      <input
        type="radio"
        name="radio-10"
        class="radio"
        :checked="store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index"
        @change="store.state[S2.LLM_PROMPT_TECHNIQUE.state] = index"
      />
    </label>
  </div>
  <div
    v-if="store.state[S2.LLM_PROMPT_TECHNIQUE.state] !== undefined"
    class="mt-4"
  >
    <div
      v-if="
        store.state[S2.LLM_PROMPT_TECHNIQUE.state] ===
        promptTechniques.length - 1
      "
      class="alert text-sm"
    >
      <span>✅</span>
      <span>{{ t("s2.promptTechniques.successMessage") }}</span>
    </div>
    <div v-else class="alert text-sm">
      <span>❌</span>
      <span>{{ t("s2.promptTechniques.retryMessage") }}</span>
    </div>
  </div>
</template>
