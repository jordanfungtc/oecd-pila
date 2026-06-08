<script setup lang="ts">
import { nextTick, ref } from "vue";
import { BIconArrowRightSquare } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
const loading = ref(false);
const convLength = S2.LLM_CONV_GENERATED.answer;

const convHandler = () => {
  // Initialize state if not started
  if (!store.state[S2.LLM_CONV_GENERATED.state]) {
    store.state[S2.LLM_CONV_GENERATED.state] = 0;
  }

  // Check that conversation is not ended
  if (store.state[S2.LLM_CONV_GENERATED.state] < convLength) {
    // Generate response with loading delay
    loading.value = true;
    setTimeout(() => {
      store.state[S2.LLM_CONV_GENERATED.state]++;
      loading.value = false;

      // Scroll to new user prompt location
      nextTick(() => {
        const idx = store.state[S2.LLM_CONV_GENERATED.state] - 1;
        const container = document.getElementById("conv-container");
        const bubble = document.getElementById(`conv-user-${idx}`);
        if (container && bubble) {
          container.scrollTo({
            top: bubble.offsetTop - container.offsetTop,
            behavior: "smooth",
          });
        }
      });
    }, 3000);
  }
};
</script>

<template>
  <div class="flex gap-8">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s2.limitationsConv.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s2.limitationsConv.paragraph1") }}</p>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.task") }}:</strong>
        {{ t("s2.limitationsConv.taskInstruction") }}
      </p>
    </div>

    <div class="w-2/3">
      <div
        id="conv-container"
        class="h-[21rem] overflow-y-auto mt-8 mb-4 border rounded-xl p-4"
      >
        <!-- History Title -->
        <h4 class="mt-0">{{ t("s2.limitationsConv.historyTitle") }}</h4>

        <div v-for="i in store.state[S2.LLM_CONV_GENERATED.state]" :key="i - 1">
          <!-- User Bubble (unformatted) -->
          <div :id="`conv-user-${i - 1}`" class="chat chat-end">
            <div class="chat-header">
              {{ t("common.prompt") }}
            </div>
            <div class="chat-bubble bg-gray-100 text-neutral text-sm py-0">
              <p>{{ t(`s2.convExample.${i - 1}.user`) }}</p>
            </div>
          </div>

          <!-- LLM Bubble (HTML formatted) -->
          <div class="chat chat-start">
            <div class="chat-header">
              {{ t("common.response") }}
            </div>
            <div
              class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
              v-html="t(`s2.convExample.${i - 1}.assistant`)"
            ></div>
          </div>
        </div>
      </div>

      <div class="flex gap-4 items-center">
        <!-- User Prompt -->
        <textarea
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          :value="
            !store.state[S2.LLM_CONV_GENERATED.state]
              ? t(`s2.convExample.0.user`)
              : store.state[S2.LLM_CONV_GENERATED.state] < convLength
                ? t(
                    `s2.convExample.${
                      store.state[S2.LLM_CONV_GENERATED.state]
                    }.user`,
                  )
                : ''
          "
          :placeholder="t('s2.limitationsConv.conversationEnded')"
          rows="2"
          readonly
        ></textarea>

        <!-- Generate Button -->
        <div class="indicator">
          <span
            v-if="
              !store.state[S2.LLM_CONV_GENERATED.state] ||
              store.state[S2.LLM_CONV_GENERATED.state] < convLength
            "
            class="indicator-item badge badge-sm badge-error"
          ></span>
          <button
            class="btn"
            @click="() => convHandler()"
            :disabled="
              loading || store.state[S2.LLM_CONV_GENERATED.state] == convLength
            "
          >
            <div v-if="loading" class="loading"></div>
            <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
