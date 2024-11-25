<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s3/s3-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>Word Embeddings</h2>
      <p>
        To understand the underlying principles of how language models work, we
        need to explore how computers process and interpret human language.
        Instead of seeing words as plain text, embeddings turn them into numbers
        that correspond to certain features of the words. Embeddings can be used
        to represent the meaning of words, sentences, entire documents, or even
        images and videos.
      </p>
      <h4>In this section</h4>
      <ul>
        <li>Create the embeddings for words based on predefined features</li>
        <li>
          Calculate the similarity score between embeddings and explore word
          analogies
        </li>
        <li>
          Experience retrieval-augmented generation (RAG) and brainstorm its
          applications
        </li>
      </ul>
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
