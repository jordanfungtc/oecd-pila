<script setup lang="ts">
import { ref } from "vue";
import { BIconArrowRightSquare } from "bootstrap-icons-vue";
import { store } from "../../store";
import { S2 } from "../states";
import { convExample } from "./gptExamples";

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
      <h2>Conversational AI</h2>
      <p>
        You can also engage in conversations with LLMs. This is done by
        providing it with previous prompts and responses so it remembers what
        you've said. This allows LLMs to generate more relevant responses over
        time, without the need for you to repeat information.
      </p>
      <p>
        <strong>Task: </strong>
        Generate and examine the responses in a conversation where a student
        asks for help with an essay on climate change.
      </p>
    </div>
    <div class="w-2/3">
      <!-- Conversation Bubbles -->
      <div class="h-[21rem] overflow-y-auto mt-8 mb-4 border rounded-xl p-4">
        <h4 class="mt-0">Conversation History</h4>
        <div v-for="i in store.state[S2.LLM_CONV_GENERATED.state]" :key="i - 1">
          <!-- User Bubble (unformatted) -->
          <div class="chat chat-end">
            <div class="chat-header">User Prompt</div>
            <div class="chat-bubble bg-gray-100 text-neutral text-sm py-0">
              <p>{{ convExample[i - 1].user }}</p>
            </div>
          </div>

          <!-- LLM Bubble (HTML formatted) -->
          <div class="chat chat-start">
            <div class="chat-header">LLM Response</div>
            <div
              class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
              v-html="convExample[i - 1].assistant"
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
              ? convExample[0].user
              : store.state[S2.LLM_CONV_GENERATED.state] < convExample.length
              ? convExample[store.state[S2.LLM_CONV_GENERATED.state]].user
              : ''
          "
          placeholder="Conversation ended"
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
