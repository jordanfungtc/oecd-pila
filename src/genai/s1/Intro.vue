<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s1/s1-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>What is AI?</h2>
      <p>
        Artificial Intelligence (AI) is a fascinating field of computer science
        that aims to create machines capable of performing tasks that typically
        require human intelligence. With machine learning (ML), we can build
        mathematical models using large amounts of data, which can then be used
        to make predictions or decisions based on new data.
      </p>
      <h4>In this section</h4>
      <ul>
        <li>
          Learn about the applications of AI and the inputs and outputs they
          require
        </li>
        <li>
          Identify a sector where AI could be beneficial and brainstorm a
          problem to solve
        </li>
        <li>
          Design an AI solution to the problem and consider potential challenges
        </li>
      </ul>
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
