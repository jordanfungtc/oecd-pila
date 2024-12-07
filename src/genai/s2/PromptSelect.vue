<script setup lang="ts">
import { singleExamples } from "./gptExamples";
import { store } from "../../store";
import { S2 } from "../states";
</script>

<template>
  <h2>Prompt Example</h2>
  <p>
    <strong>Task: </strong>
    To explore the capabilities of LLMs and illustrate the process of prompt
    engineering, choose one of the following prompt examples and move on to the
    next step.
  </p>
  <div class="grid grid-cols-3 gap-4">
    <div
      v-for="(example, key) in singleExamples"
      :key="key"
      class="form-control px-2 border rounded-xl mb-2"
      :class="{
        'border-neutral': store.state[S2.LLM_PROMPT.state] === key,
      }"
    >
      <label class="label cursor-pointer">
        <span class="label-text">{{ example.label }}</span>
        <input
          type="radio"
          name="radio-10"
          class="radio"
          :checked="store.state[S2.LLM_PROMPT.state] === key"
          @change="store.state[S2.LLM_PROMPT.state] = key"
        />
      </label>
    </div>
  </div>
</template>
