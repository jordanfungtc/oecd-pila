<script setup lang="ts">
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { singleExamples } from "./gptExamples";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12 items-center">
    <div class="w-1/2">
      <h2>{{ t("s2.promptSelect.title") }}</h2>
      <p>{{ t("s2.promptSelect.paragraph1") }}</p>
      <p>{{ t("s2.promptSelect.paragraph2") }}</p>
      <a
        href="https://www.promptingguide.ai/"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary"
      >
        <BIconFileEarmarkTextFill /> {{ t("s2.promptSelect.guideLabel") }}
      </a>
      <p>
        <strong>{{ t("common.taskLabel") }} </strong>
        {{ t("s2.promptSelect.taskInstruction") }}
      </p>
    </div>
    <div class="w-1/2 mt-8">
      <!-- Prompt Selection -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(key, i) in Object.keys(singleExamples)"
          :key="i"
          class="form-control px-2 border rounded-xl"
          :class="{
            'border-neutral': store.state[S2.LLM_PROMPT.state] === key,
          }"
        >
          <label class="label cursor-pointer">
            <span class="label-text text-lg p-2 flex gap-4">
              <b>{{ t("common.exampleN", { n: i + 1 }) }}</b>
              {{
                t(
                  singleExamples[key as keyof typeof singleExamples]
                    .labelKey as string,
                )
              }}
            </span>
            <input
              type="radio"
              class="radio"
              :checked="store.state[S2.LLM_PROMPT.state] === key"
              @change="store.state[S2.LLM_PROMPT.state] = key"
            />
          </label>
        </div>
      </div>

      <!-- Feedback Message -->
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
