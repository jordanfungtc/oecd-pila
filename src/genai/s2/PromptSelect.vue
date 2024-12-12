<script setup lang="ts">
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import { singleExamples } from "./gptExamples";
import { store } from "../../store";
import { S2 } from "../states";
</script>

<template>
  <div class="flex gap-12 items-center">
    <div class="w-1/2">
      <h2>Prompt Engineering</h2>
      <p>
        When interacting with LLMs, the way you phrase your prompts is crucial
        for obtaining the best responses. This is where prompt engineering comes
        into play.
      </p>
      <p>
        Prompt engineering involves carefully crafting your prompts to guide the
        model towards generating more accurate, relevant, and useful responses.
      </p>
      <a
        href="https://www.promptingguide.ai/"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary"
      >
        <BIconFileEarmarkTextFill /> DAIR.AI: Prompt Engineering Guide
      </a>
      <p>
        <strong>Task: </strong>
        Choose one of the prompt examples on the right and proceed to the next
        step.
      </p>
    </div>
    <div class="w-1/2 mt-8">
      <!-- Prompt Selection -->
      <div class="flex flex-col gap-4">
        <div
          v-for="(key, i) in Object.keys(singleExamples)"
          :key="i"
          class="form-control px-2 border rounded-xl"
          :class="{
            'border-neutral': store.state[S2.LLM_PROMPT.state] === key,
          }"
        >
          <label class="label cursor-pointer">
            <span class="label-text text-lg p-2 flex gap-4">
              <b>Example {{ i + 1 }}</b>
              {{ singleExamples[key as keyof typeof singleExamples].label }}
            </span>
            <input
              type="radio"
              class="radio"
              :checked="store.state[S2.LLM_PROMPT.state] === key"
              @change="store.state[S2.LLM_PROMPT.state] = key"
            />
          </label>
        </div>
      </div>

      <!-- Feedback Message -->
      <div
        v-if="store.state[S2.LLM_PROMPT.state] !== undefined"
        class="mt-4 alert text-sm"
      >
        <span>✅</span>
        <span> Great! You may now proceed to the next step.</span>
      </div>
    </div>
  </div>
</template>
