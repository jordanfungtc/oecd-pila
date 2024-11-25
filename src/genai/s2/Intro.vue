<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s2/s2-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>Large Language Models</h2>
      <p>
        Large language models (LLMs) are ML models that are trained on vast
        amounts of text data to learn patterns and structures in human language.
        They take text as input (called a prompt) and generate a text response
        as output. LLMs and other Generative AI models have gained popularity in
        recent years due to their wide-ranging applications.
      </p>
      <h4>In this section</h4>
      <ul>
        <li>
          Generate responses using LLMs and learn prompt engineering techniques
        </li>
        <li>
          Experience the conversational capabilities of LLMs and identify their
          limitations
        </li>
        <li>
          Brainstorm everyday applications of LLMs and write prompts for
          specific tasks
        </li>
      </ul>
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
