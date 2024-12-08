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
    </div>
    <div class="w-1/2 mt-8">
      <div class="flex flex-col gap-4">
        <p>
          <strong>Task: </strong>
          To explore the capabilities of LLMs and illustrate the process of
          prompt engineering, choose one of the following prompt examples and
          move on to the next step.
        </p>
        <div
          v-for="(example, key) in singleExamples"
          :key="key"
          class="form-control px-2 border rounded-xl"
          :class="{
            'border-neutral': store.state[S2.LLM_PROMPT.state] === key,
          }"
        >
          <label class="label cursor-pointer">
            <span class="label-text text-lg">{{ example.label }}</span>
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
    </div>
  </div>
</template>
