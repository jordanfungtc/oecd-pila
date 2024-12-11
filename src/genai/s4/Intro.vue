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
        As we saw in the previous sections, AI technologies like Large Language
        Models (LLMs) offer significant benefits in a wide range of
        applications. However, they also raise important ethical and
        sustainability challenges that need to be addressed.
      </p>
      <p>
        For example, they can perpetuate biases present in the data they are
        trained on, leading to unfair outcomes for certain groups of people.
        Additionally, the energy consumption of training and running these
        models can have a significant environmental impact.
      </p>
      <p>
        Identifying and addressing these challenges is crucial to ensuring that
        AI systems are fair, equitable, and inclusive for all users and that
        they are developed and used in a sustainable manner. We will explore
        these topics in more detail in this section.
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
