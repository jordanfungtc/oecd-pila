<script setup lang="ts">
import { ref } from "vue";
import { BIconArrowRightSquare } from "bootstrap-icons-vue";
import { singleExamples } from "./gptExamples";
import { store } from "../../store";
import { S2 } from "../states";

const loading = ref(false);

const props = defineProps(["i"]); // 0 - simple, 1 - refined

const generated =
  props.i === 0 ? S2.LLM_SIMPLE_GENERATED : S2.LLM_REFINED_GENERATED;

const generateHandler = () => {
  if (!store.state[S2.LLM_PROMPT.state]) {
    return window.alert("Please select a prompt example.");
  }
  loading.value = true;
  store.state[generated.state] = false;
  setTimeout(() => {
    loading.value = false;
    store.state[generated.state] = true;
  }, 2000);
};
</script>

<template>
  <h2>Prompt {{ props.i === "0" ? "A" : "B" }}</h2>
  <div class="flex gap-4 items-center">
    <textarea
      class="textarea textarea-lg textarea-bordered w-full leading-normal"
      :value="store.state[S2.LLM_PROMPT.state] ? singleExamples[store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples].prompt[props.i] : ''"
      placeholder="Select a prompt example"
      rows="2"
      readonly
    ></textarea>
    <div class="indicator">
      <span
        v-if="!store.state[S2.LLM_SIMPLE_GENERATED.state]"
        class="indicator-item badge badge-sm badge-error"
      ></span>
      <button class="btn" @click="generateHandler" :disabled="loading">
        <div v-if="loading" class="loading"></div>
        <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
      </button>
    </div>
  </div>
  <div class="h-[16rem] overflow-y-auto my-4 border rounded-xl p-4">
    <h4 class="mt-0">Response</h4>
    <div
      v-if="store.state[generated.state]"
      v-html="singleExamples[store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples].response[props.i]"
      class="mt-[-10px]"
    ></div>
    <p v-else>
      {{
        props.i === "0"
          ? "Generate a response using the simple prompt above and examine the response."
          : "Generate a response using the refined prompt above and compare the responses to the simple prompt."
      }}
    </p>
  </div>
</template>
