<script setup lang="ts">
import { store } from "../../store";
import { S3 } from "../states";

const options = ["'cat' and 'dog'", "'cat' and 'car'"];

const questions = [
  {
    text: "Which of the following pairs of words do you think are more similar in meaning?",
    state: S3.SIM_Q1,
    success: "Words that share more features are more similar.",
    error: "Think about the features that the words share.",
  },
  {
    text: "Which of the following pairs of words do you think have a lower cosine similarity score?",
    state: S3.SIM_Q2,
    success: "Less similar words have a lower similarity score.",
    error: "Refer to the definition of cosine similarity score.",
  },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>Similarity Score</h2>
      <p>
        As humans, we can intuitively understand how similar two words are. But
        how do computers figure out the similarity between words?
      </p>
      <p>
        Computers can use a method called the cosine similarity score. This
        score ranges from -1 to 1. A score close to 1 means the words are very
        similar, while a score near -1 means they are very different.
      </p>
      <p>
        <strong>Task:</strong>
        Answer the questions on the right by selecting the correct checkboxes.
      </p>
    </div>
    <div class="w-3/5">
      <div class="flex flex-col gap-4 mt-8">
        <div
          class="py-3 px-6 border rounded-xl items-center"
          v-for="(question, i) in questions"
          :key="i"
        >
          <!-- Question Text -->
          <h4 class="mt-2 mb-4">{{ i + 1 + ". " + question.text }}</h4>
          <!-- Answer Selection -->
          <div class="flex gap-2">
            <div
              class="form-control px-2 border rounded-xl w-full"
              v-for="(option, key) in options"
              :class="{
                'border-neutral': store.state[question.state.state] === key,
              }"
            >
              <label class="label cursor-pointer">
                <span class="label-text">{{ option }}</span>
                <input
                  type="radio"
                  class="radio"
                  :checked="store.state[question.state.state] === key"
                  @change="() => (store.state[question.state.state] = key)"
                />
              </label>
            </div>
          </div>
          <!-- Feedback Message -->
          <div
            v-if="store.state[question.state.state] !== undefined"
            class="mt-4"
          >
            <div
              v-if="store.state[question.state.state] === question.state.answer"
              class="alert text-sm"
            >
              <span>✅</span>
              <span> Well done! {{ question.success }}</span>
            </div>
            <div v-else class="alert text-sm">
              <span>❌</span>
              <span> Not quite. {{ question.error }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
