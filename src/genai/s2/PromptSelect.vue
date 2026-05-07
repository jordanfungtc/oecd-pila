<script setup lang="ts">
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();

const prompts = [
  { key: "photosynthesis", emoji: "🌿" },
  { key: "french", emoji: "🇫🇷" },
  { key: "productivity", emoji: "🚀" },
];
</script>

<template>
  <div class="flex gap-12 items-center">
    <div class="w-1/2">
      <!-- Title -->
      <h2>{{ t("s2.promptSelect.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s2.promptSelect.paragraph1") }}</p>
      <p>{{ t("s2.promptSelect.paragraph2") }}</p>

      <!-- Guide Link -->
      <a
        href="https://www.promptingguide.ai/"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary"
      >
        <BIconFileEarmarkTextFill /> {{ t("s2.promptSelect.guideLabel") }}
      </a>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.task") }} </strong>
        {{ t("s2.promptSelect.taskInstruction") }}
      </p>
    </div>

    <div class="w-1/2 mt-8">
      <!-- Prompt Selection -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(prompt, i) in prompts"
          :key="i"
          class="form-control px-2 border rounded-xl"
          :class="{
            'border-neutral': store.state[S2.LLM_PROMPT.state] === prompt.key,
          }"
        >
          <label class="label cursor-pointer">
            <span class="label-text text-lg p-2 flex gap-4">
              <b>{{ t(`s2.promptSelect.example${i + 1}`) }}</b>
              {{ prompt.emoji }}
              {{ t(`s2.singleExamples.${prompt.key}.label`) }}
            </span>
            <input
              type="radio"
              class="radio"
              :checked="store.state[S2.LLM_PROMPT.state] === prompt.key"
              @change="store.state[S2.LLM_PROMPT.state] = prompt.key"
            />
          </label>
        </div>
      </div>

      <!-- Feedback -->
      <div
        v-if="store.state[S2.LLM_PROMPT.state] !== undefined"
        class="mt-4 alert text-sm"
      >
        <span>✅</span>
        <span> {{ t("s2.promptSelect.successMessage") }}</span>
      </div>
    </div>
  </div>
</template>
