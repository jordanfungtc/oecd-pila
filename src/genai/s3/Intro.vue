<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s3/s3-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>Large Langauge Models (II)</h2>
      <p>
        As we saw in the previous section, Large Language Models (LLMs) are a
        type of Generative AI models designed to understand and generate human
        language. However, computers can't understand words the way we see them.
        Instead, they convert words into numbers using a process called
        embeddings.
      </p>
      <p>
        We can think of embeddings as a way to change words into numbers that
        carry information about the words' meanings and relationships to other
        words. These numerical representations are not only used by LLMs to
        generate text but also has many other fascinating uses which we will
        explore in this section.
      </p>
      <a
        href="https://www.youtube.com/watch?v=wgfSDrqYMJ4"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconPlayBtn /> IBM Technology: What are Word Embeddings?
      </a>
    </div>
  </div>
</template>
