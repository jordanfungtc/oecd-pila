<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S4 } from "../states";
import chatgptLogo from "/s4/chatgpt-logo.png";
import llamaLogo from "/s4/llama-logo.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <!-- Title -->
      <h2>{{ t("s4.sustainability.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s4.sustainabilityTask.paragraph1") }}</p>

      <!-- Llama Fact -->
      <div class="alert mb-4">
        <img :src="llamaLogo" class="h-12 w-auto mt-2 mb-4" />
        <span>
          <a
            href="https://arxiv.org/abs/2407.21783"
            target="_blank"
            class="font-normal no-underline"
            >{{ t("s4.sustainabilityTask.llamaFact") }}
          </a>
        </span>
      </div>

      <!-- ChatGPT Fact -->
      <div class="alert">
        <img :src="chatgptLogo" class="h-12 w-auto mt-2 mb-4" />
        <span>
          <a
            href="https://www.reuters.com/technology/artificial-intelligence/openai-says-chatgpts-weekly-users-have-grown-200-million-2024-08-29/"
            target="_blank"
            class="font-normal no-underline"
          >
            {{ t("s4.sustainabilityTask.chatgptFact") }}
          </a>
        </span>
      </div>
    </div>

    <div class="w-1/2">
      <!-- Task Instruction -->
      <p class="mt-12">
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.sustainabilityTask.taskInstruction") }}
      </p>

      <div class="py-3 px-6 border rounded-xl items-center">
        <!-- Question Text -->
        <h4 class="mt-2 mb-4">{{ t("s4.sustainabilityTask.questionType") }}</h4>
        <p>
          {{ t("s4.sustainabilityTask.questionText") }}
        </p>

        <!-- Answer Selection -->
        <div class="flex gap-2">
          <div
            class="form-control px-2 border rounded-xl w-full"
            v-for="(option, key) in [
              t('util.selectTf.trueLabel'),
              t('util.selectTf.falseLabel'),
            ]"
            :class="{
              'border-neutral': store.state[S4.SUSTAINABILITY_Q.state] === key,
            }"
          >
            <label class="label cursor-pointer">
              <span class="label-text">{{ option }}</span>
              <input
                type="radio"
                class="radio"
                :checked="store.state[S4.SUSTAINABILITY_Q.state] === key"
                @change="() => (store.state[S4.SUSTAINABILITY_Q.state] = key)"
              />
            </label>
          </div>
        </div>

        <!-- Feedback -->
        <div
          v-if="store.state[S4.SUSTAINABILITY_Q.state] !== undefined"
          class="mt-4"
        >
          <div
            v-if="
              store.state[S4.SUSTAINABILITY_Q.state] ===
              S4.SUSTAINABILITY_Q.answer
            "
            class="alert text-sm"
          >
            <span>✅</span>
            <span>
              {{ t("s4.sustainabilityTask.successMessage") }}
            </span>
          </div>
          <div v-else class="alert text-sm">
            <span>❌</span>
            <span>{{ t("s4.sustainabilityTask.retryMessage") }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
