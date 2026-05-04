<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>{{ t("s4.biasLlm.title") }}</h2>
      <p>{{ t("s4.biasLlm.paragraph1") }}</p>
      <p>{{ t("s4.biasLlm.paragraph2") }}</p>
      <p class="text-xs my-8">
        {{ t("s4.biasLlm.referencePrefix") }}
        <a
          href="https://ecampusontario.pressbooks.pub/llmtoolsforstemteachinginhighered/chapter/types-of-bias/"
          target="_blank"
        >
          {{ t("s4.biasLlm.referenceLinkLabel") }}</a
        >.
      </p>
    </div>
    <div class="w-2/3">
      <div class="mt-8 mb-4 border rounded-xl p-4">
        <div class="chat chat-end">
          <div class="chat-header">{{ t("s4.biasLlm.chat.userHeader") }}</div>
          <div class="chat-bubble bg-gray-100 text-neutral text-sm py-0">
            <p>{{ t("s4.biasLlm.chat.userPrompt") }}</p>
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-header">{{ t("s4.biasLlm.chat.llmHeader") }}</div>
          <div class="chat-bubble bg-blue-100 text-neutral text-sm py-0">
            <p>{{ t("s4.biasLlm.chat.llmResponse") }}</p>
          </div>
        </div>
      </div>
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.biasLlm.taskInstruction") }}
      </p>
      <textarea
        class="textarea textarea-bordered textarea-lg w-full leading-normal"
        v-model="store.state[S4.BIAS_LLM.state]"
        :placeholder="t('common.answerPlaceholder')"
        rows="3"
      ></textarea>
    </div>
  </div>
</template>
