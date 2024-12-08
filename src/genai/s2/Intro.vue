<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s2/s2-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>Generative AI</h2>
      <p>
        In the last section, we explored how AI systems analyze data to identify
        patterns and make predictions, offer recommendations, or solve problems.
        In this section, we will focus on Generative AI, a type of AI designed
        not only to identify patterns in data but also generate new content,
        including text, images, music, and more.
      </p>
      <p>
        A common type of Generative AI are Large Language Models (LLMs). LLMs
        are machine learning models trained on large amounts of text data to
        learn the pattern, structure, and nuances of human language. They take
        text as input (known as a prompt) and generate coherent and contextually
        relevant text as output. Many popular AI chatbot systems are powered by
        LLMs, including ChatGPT, Gemini, and LLaMA.
      </p>
      <a
        href="https://www.youtube.com/watch?v=iR2O2GPbB0E"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconPlayBtn /> Google for Developer: What are Large Language Models
        (LLMs)?
      </a>
    </div>
  </div>
</template>
