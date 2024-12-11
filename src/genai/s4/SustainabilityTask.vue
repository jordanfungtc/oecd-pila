<script setup lang="ts">
import { store } from "../../store";
import { S4 } from "../states";
import chatgptLogo from "/s4/chatgpt-logo.png";
import llamaLogo from "/s4/llama-logo.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>Sustainability of AI</h2>
      <p>
        As chatbots powered by LLMs are becoming increasingly popular and
        advanced, we must be aware of their environmental impact to ensure
        sustainability.
      </p>
      <div class="alert mb-4">
        <img :src="llamaLogo" class="h-12 w-auto mt-2 mb-4" />
        <span>
          The largest Meta LLaMA 3 model has 405 billion parameters
          <a
            href="https://arxiv.org/abs/2407.21783"
            target="_blank"
            class="text-sm"
            >(arXiv)</a
          >.
        </span>
      </div>
      <div class="alert">
        <img :src="chatgptLogo" class="h-12 w-auto mt-2 mb-4" />
        <span>
          ChatGPT serves more than 200 million weekly active users
          <a
            href="https://www.reuters.com/technology/artificial-intelligence/openai-says-chatgpts-weekly-users-have-grown-200-million-2024-08-29/"
            target="_blank"
            class="text-sm"
            >(Reuters, Aug 2024)</a
          >.
        </span>
      </div>
    </div>
    <div class="w-1/2">
      <p class="mt-12">
        <strong>Task:</strong>
        Answer the following question by selecting the correct checkbox.
      </p>
      <div class="py-3 px-6 border rounded-xl items-center">
        <!-- Question Text -->
        <h4 class="mt-2 mb-4">True or false</h4>
        <p>
          Over time, the total energy that is used for running the LLMs exceed
          the energy consumed during their initial training.
        </p>
        <!-- Answer Selection -->
        <div class="flex gap-2">
          <div
            class="form-control px-2 border rounded-xl w-full"
            v-for="(option, key) in ['True', 'False']"
            :class="{
              'border-neutral': store.state[S4.SUSTAINABILITY_Q.state] === key,
            }"
          >
            <label class="label cursor-pointer">
              <span class="label-text">{{ option }}</span>
              <input
                type="radio"
                class="radio"
                :checked="store.state[S4.SUSTAINABILITY_Q.state] === key"
                @change="() => (store.state[S4.SUSTAINABILITY_Q.state] = key)"
              />
            </label>
          </div>
        </div>
        <!-- Feedback Message -->
        <div
          v-if="store.state[S4.SUSTAINABILITY_Q.state] !== undefined"
          class="mt-4"
        >
          <div
            v-if="
              store.state[S4.SUSTAINABILITY_Q.state] ===
              S4.SUSTAINABILITY_Q.answer
            "
            class="alert text-sm"
          >
            <span>✅</span>
            <span>
              Well done! The cost of inference can add up over time and exceed
              that of training.
            </span>
          </div>
          <div v-else class="alert text-sm">
            <span>❌</span>
            <span> Not quite. </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
