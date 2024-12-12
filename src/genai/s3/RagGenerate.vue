<script setup lang="ts">
import { ref } from "vue";
import {
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
  BIconArrowRightSquare,
} from "bootstrap-icons-vue";
import { S3 } from "../states";
import { store } from "../../store";
import { database, examples } from "./ragExamples";

const generating = ref(false);

const generateHandler = async () => {
  if (!store.state[S3.RAG_PROMPT.state]) {
    return window.alert("Please select a query example.");
  }
  generating.value = true;
  store.state[S3.RAG_GENERATED.state] = 0;
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 1), 500);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 2), 1000);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 3), 1500);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 4), 2000);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 5), 2500);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 6), 3000);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 7), 3500);
  setTimeout(() => {
    store.state[S3.RAG_GENERATED.state] = 8;
    generating.value = false;
  }, 5500);
};
</script>

<template>
  <h2>RAG for Customer Service Chatbot: Usage</h2>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <!-- Query Section -->
      <div class="flex gap-2 items-center mb-4">
        <BIcon2Circle class="w-5 h-5" />
        <h4 class="my-0">Query</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          data-tip="Select a query and start the RAG process using the database"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>
      <div class="mt-0 mb-2 grid grid-cols-3 gap-2">
        <div
          v-for="(example, key) in examples"
          :key="key"
          class="form-control px-2 border rounded-xl mb-2"
          :class="{
            'border-neutral': store.state[S3.RAG_PROMPT.state] === key,
          }"
        >
          <label class="label cursor-pointer">
            <span class="label-text">{{ example.label }}</span>
            <input
              type="radio"
              name="radio-10"
              class="radio"
              :checked="store.state[S3.RAG_PROMPT.state] === key"
              @change="store.state[S3.RAG_PROMPT.state] = key"
            />
          </label>
        </div>
      </div>
      <div class="flex flex-row gap-4 items-center">
        <textarea
          type="text"
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          :value="store.state[S3.RAG_PROMPT.state] ? examples[store.state[S3.RAG_PROMPT.state] as keyof typeof examples].query : ''"
          placeholder="Select a query example"
          readonly
        ></textarea>
        <div class="indicator">
          <span
            v-if="
              store.state[S3.RAG_PROMPT.state] &&
              store.state[S3.RAG_GENERATED.state] != 8
            "
            class="indicator-item badge badge-sm badge-error"
          ></span>
          <button class="btn" @click="generateHandler" :disabled="generating">
            <span v-if="generating" class="loading"></span>
            <span v-else><BIconArrowRightSquare class="w-5 h-5" /></span>
          </button>
        </div>
      </div>

      <!-- Retrieve Section -->
      <div class="flex gap-2 items-center my-4">
        <BIcon3Circle class="w-5 h-5" />
        <h4 class="my-0">Retrieve</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          data-tip="Similarity scores between the query and every entry in the database"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>
      <div
        v-for="i in Math.min(
          database.length,
          store.state[S3.RAG_GENERATED.state] || 0
        )"
        :key="i"
        class="text-sm"
      >
        <div class="flex items-center gap-4 w-full">
          <div class="line-clamp-1 w-full">
            {{ database[i - 1] }}
          </div>
          <div class="font-bold">
            {{
              examples[
                store.state[S3.RAG_PROMPT.state] as keyof typeof examples
              ].simScores[i - 1].toFixed(3)
            }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- Augmented Prompt Section -->
      <div class="flex gap-2 items-center mb-4">
        <BIcon4Circle class="w-5 h-5" />
        <h4 class="my-0">Augment</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          :data-tip="`Augmented prompt with the entry that has the highest similarity score`"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>
      <div
        class="chat chat-end"
        v-if="store.state[S3.RAG_GENERATED.state] >= 7"
      >
        <div
          class="chat-bubble bg-gray-100 text-neutral text-sm py-0"
          v-html="examples[store.state[S3.RAG_PROMPT.state] as keyof typeof examples].augPrompt"
        ></div>
      </div>

      <!-- Generate Section -->
      <div class="flex gap-2 items-center my-4">
        <BIcon5Circle class="w-5 h-5" />
        <h4 class="my-0">Generate</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          data-tip="Response from the LLM generated using the augmented prompt"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>
      <div
        class="chat chat-start"
        v-if="store.state[S3.RAG_GENERATED.state] === 8"
      >
        <div
          class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
          v-html="examples[store.state[S3.RAG_PROMPT.state] as keyof typeof examples].response"
        ></div>
      </div>
    </div>
  </div>
</template>
