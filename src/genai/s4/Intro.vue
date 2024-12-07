<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s4/s4-icon.png";
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>AI Ethics and Sustainability</h2>
      <p>
        AI technologies offer significant benefits, but they also pose important
        ethical and sustainability challenges. Identifying and addressing these
        challenges is crucial to ensuring that AI systems are fair, equitable,
        and inclusive for all users.
      </p>
      <a
        href="https://www.youtube.com/watch?v=VqFqWIqOB1g"
        target="_blank"
        class="flex gap-2 items-center text-primary mt-8 no-underline"
      >
        <BIconPlayBtn /> UNESCO: Ethics of AI Challenges and Governance
      </a>
    </div>
  </div>
</template>
