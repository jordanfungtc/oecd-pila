<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.biasLlm.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s4.biasLlm.paragraph1") }}</p>
      <p>{{ t("s4.biasLlm.paragraph2") }}</p>

      <!-- Reference -->
      <a
        href="https://ecampusontario.pressbooks.pub/llmtoolsforstemteachinginhighered/chapter/types-of-bias/"
        target="_blank"
        class="text-xs my-8 no-underline font-normal"
      >
        <p>{{ t("s4.biasLlm.reference") }}</p>
      </a>
    </div>

    <!-- Chat -->
    <div class="w-2/3">
      <div class="mt-8 mb-4 border rounded-xl p-4">
        <!-- User Prompt -->
        <div class="chat chat-end">
          <div class="chat-header">{{ t("s4.biasLlm.chat.userHeader") }}</div>
          <div class="chat-bubble bg-gray-100 text-neutral text-sm py-0">
            <p>{{ t("s4.biasLlm.chat.userPrompt") }}</p>
          </div>
        </div>

        <!-- LLM Response -->
        <div class="chat chat-start">
          <div class="chat-header">{{ t("s4.biasLlm.chat.llmHeader") }}</div>
          <div class="chat-bubble bg-blue-100 text-neutral text-sm py-0">
            <p>{{ t("s4.biasLlm.chat.llmResponse") }}</p>
          </div>
        </div>
      </div>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.task") }}</strong>
        {{ t("s4.biasLlm.taskInstruction") }}
      </p>

      <!-- Answer Textarea -->
      <textarea
        class="textarea textarea-bordered textarea-lg w-full leading-normal"
        v-model="store.state[S4.BIAS_LLM.state]"
        :placeholder="t('common.answer')"
        rows="3"
      ></textarea>
    </div>
  </div>
</template>
