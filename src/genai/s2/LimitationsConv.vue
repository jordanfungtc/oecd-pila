<script setup lang="ts">
import { ref } from "vue";
import { BIconArrowRightSquare } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";
import { convExample } from "./gptExamples";

const { t } = useI18n();
const loading = ref(false);

const convHandler = () => {
  if (!store.state[S2.LLM_CONV_GENERATED.state]) {
    store.state[S2.LLM_CONV_GENERATED.state] = 0;
  }
  if (store.state[S2.LLM_CONV_GENERATED.state] < convExample.length) {
    loading.value = true;
    setTimeout(() => {
      store.state[S2.LLM_CONV_GENERATED.state]++;
      loading.value = false;
    }, 2000);
  }
};
</script>

<template>
  <div class="flex gap-8">
    <div class="w-1/3">
      <h2>{{ t("s2.limitationsConv.title") }}</h2>
      <p>{{ t("s2.limitationsConv.paragraph1") }}</p>
      <p>
        <strong>{{ t("common.taskLabel") }} </strong>
        {{ t("s2.limitationsConv.taskInstruction") }}
      </p>
    </div>
    <div class="w-2/3">
      <!-- Conversation Bubbles -->
      <div class="h-[21rem] overflow-y-auto mt-8 mb-4 border rounded-xl p-4">
        <h4 class="mt-0">{{ t("s2.limitationsConv.historyTitle") }}</h4>
        <div v-for="i in store.state[S2.LLM_CONV_GENERATED.state]" :key="i - 1">
          <!-- User Bubble (unformatted) -->
          <div class="chat chat-end">
            <div class="chat-header">
              {{ t("s2.limitationsConv.userPromptLabel") }}
            </div>
            <div class="chat-bubble bg-gray-100 text-neutral text-sm py-0">
              <p>{{ t(convExample[i - 1].user) }}</p>
            </div>
          </div>

          <!-- LLM Bubble (HTML formatted) -->
          <div class="chat chat-start">
            <div class="chat-header">
              {{ t("s2.limitationsConv.llmResponseLabel") }}
            </div>
            <div
              class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
              v-html="t(convExample[i - 1].assistant)"
            ></div>
          </div>
        </div>
      </div>

      <!-- User Input -->
      <div class="flex gap-4 items-center">
        <textarea
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          :value="
            !store.state[S2.LLM_CONV_GENERATED.state]
              ? t(convExample[0].user)
              : store.state[S2.LLM_CONV_GENERATED.state] < convExample.length
                ? t(convExample[store.state[S2.LLM_CONV_GENERATED.state]].user)
                : ''
          "
          :placeholder="t('s2.limitationsConv.conversationEnded')"
          rows="2"
          readonly
        ></textarea>
        <div class="indicator">
          <span
            v-if="
              !store.state[S2.LLM_CONV_GENERATED.state] ||
              store.state[S2.LLM_CONV_GENERATED.state] < convExample.length
            "
            class="indicator-item badge badge-sm badge-error"
          ></span>
          <button class="btn" @click="() => convHandler()" :disabled="loading">
            <div v-if="loading" class="loading"></div>
            <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
