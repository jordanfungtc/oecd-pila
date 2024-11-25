<script setup lang="ts">
import { store } from "../../store";
import { S2 } from "../states";

const promptTechniques = [
  "Start simple and iteratively refine your prompt based on the response",
  "Be clear and concise in your instructions and avoid ambiguity",
  "Provide sufficient context and background information",
  "Specify the desired length, format and tone of the response",
  "All of the above",
];
</script>

<template>
  <h2>Prompt Engineering Techniques</h2>
  <p>
    <strong>Task: </strong>
    When writing prompts for LLMs, which of the following techniques should you
    consider?
  </p>
  <div
    v-for="(technique, index) in promptTechniques"
    :key="index"
    class="form-control px-2 border rounded-xl mb-2"
    :class="{
      'border-neutral': store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index,
    }"
  >
    <label class="label cursor-pointer">
      <span class="label-text">{{ technique }}</span>
      <input
        type="radio"
        name="radio-10"
        class="radio"
        :checked="store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index"
        @change="store.state[S2.LLM_PROMPT_TECHNIQUE.state] = index"
      />
    </label>
  </div>
  <div
    v-if="store.state[S2.LLM_PROMPT_TECHNIQUE.state] !== undefined"
    class="mt-4"
  >
    <div
      v-if="
        store.state[S2.LLM_PROMPT_TECHNIQUE.state] ===
        promptTechniques.length - 1
      "
      class="alert text-sm"
    >
      <span>✅</span>
      <span>
        Well done! Considering all the prompt engineering techniques can help
        you craft effective prompts for LLMs.
      </span>
    </div>
    <div v-else class="alert text-sm">
      <span>❌</span>
      <span>
        That's true, but there are other techniques that you should also
        consider. Can you identify them?
      </span>
    </div>
  </div>
</template>
