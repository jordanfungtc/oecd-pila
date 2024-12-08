<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s1/s1-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>Introduction to Artificial Intelligence</h2>
      <p>
        Have you ever wondered how your favourite music streaming service
        suggests songs you might like, how your smartphone recognizes your voice
        commands, how your email filters out spam, or how a navigation app finds
        the best route? These tasks are all accomplished with the help of
        Artificial Intelligence (AI).
      </p>
      <p>
        AI is a branch of computer science that enables machines to perform
        tasks that typically require human intelligence. One important part of
        AI is called machine learning (ML). With ML, computers learn from lots
        of data and find patterns to make predictions or decisions without the
        need for humans to explicitly program them. AI and ML are used in a wide
        range of applications and have radically transformed many industries.
      </p>
      <a
        href="https://www.youtube.com/watch?v=reUZRyXxUs4"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconPlayBtn /> TED Talk: How AI Could Empower Any Business by Andrew
        Ng
      </a>
    </div>
  </div>
</template>
