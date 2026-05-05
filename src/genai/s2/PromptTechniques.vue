<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s2.promptTechniques.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s2.promptTechniques.taskInstruction") }}
  </p>

  <!-- Techniques Selection -->
  <div
    v-for="(_, index) in S2.LLM_PROMPT_TECHNIQUE.answer + 1"
    :key="index"
    class="form-control px-2 border rounded-xl mb-2"
    :class="{
      'border-neutral': store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index,
    }"
  >
    <label class="label cursor-pointer">
      <span class="label-text">{{
        t(`s2.promptTechniques.options.${index}`)
      }}</span>
      <input
        type="radio"
        name="radio-10"
        class="radio"
        :checked="store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index"
        @change="store.state[S2.LLM_PROMPT_TECHNIQUE.state] = index"
      />
    </label>
  </div>

  <!-- Feedback -->
  <div
    v-if="store.state[S2.LLM_PROMPT_TECHNIQUE.state] !== undefined"
    class="mt-4"
  >
    <div
      v-if="
        store.state[S2.LLM_PROMPT_TECHNIQUE.state] ===
        S2.LLM_PROMPT_TECHNIQUE.answer
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
