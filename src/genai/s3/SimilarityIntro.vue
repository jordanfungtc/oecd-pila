<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S3 } from "../states";

const { t, tm } = useI18n();

const options = computed(() => tm("s3.similarityIntro.options") as string[]);

const questions = [
  {
    textKey: "s3.similarityIntro.questions.q1.text",
    state: S3.SIM_Q1,
    successKey: "s3.similarityIntro.questions.q1.success",
    errorKey: "s3.similarityIntro.questions.q1.error",
  },
  {
    textKey: "s3.similarityIntro.questions.q2.text",
    state: S3.SIM_Q2,
    successKey: "s3.similarityIntro.questions.q2.success",
    errorKey: "s3.similarityIntro.questions.q2.error",
  },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>{{ t("s3.similarityIntro.title") }}</h2>
      <p>
        {{ t("s3.similarityIntro.paragraph1") }}
      </p>
      <p>
        {{ t("s3.similarityIntro.paragraph2") }}
      </p>
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s3.similarityIntro.taskInstruction") }}
      </p>
    </div>
    <div class="w-3/5">
      <div class="flex flex-col gap-4 mt-8">
        <div
          class="py-3 px-6 border rounded-xl items-center"
          v-for="(question, i) in questions"
          :key="i"
        >
          <!-- Question Text -->
          <h4 class="mt-2 mb-4">{{ i + 1 + ". " + t(question.textKey) }}</h4>
          <!-- Answer Selection -->
          <div class="flex gap-2">
            <div
              class="form-control px-2 border rounded-xl w-full"
              v-for="(option, key) in options"
              :class="{
                'border-neutral': store.state[question.state.state] === key,
              }"
            >
              <label class="label cursor-pointer">
              <span class="label-text">{{ option }}</span>
                <input
                  type="radio"
                  class="radio"
                  :checked="store.state[question.state.state] === key"
                  @change="() => (store.state[question.state.state] = key)"
                />
              </label>
            </div>
          </div>
          <!-- Feedback Message -->
          <div
            v-if="store.state[question.state.state] !== undefined"
            class="mt-4"
          >
            <div
              v-if="store.state[question.state.state] === question.state.answer"
              class="alert text-sm"
            >
              <span>✅</span>
              <span>
                {{ t("s3.similarityIntro.feedback.successPrefix") }}
                {{ t(question.successKey) }}
              </span>
            </div>
            <div v-else class="alert text-sm">
              <span>❌</span>
              <span>
                {{ t("s3.similarityIntro.feedback.errorPrefix") }}
                {{ t(question.errorKey) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
