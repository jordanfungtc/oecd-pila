<script setup lang="ts">
import { useI18n } from "vue-i18n";
import transportIcon from "/s1/b-transport.png";
import environmentIcon from "/s1/b-environment.png";
import healthcareIcon from "/s1/b-healthcare.png";

const { t } = useI18n();

const examples = [
  { key: "transportation", icon: transportIcon },
  { key: "environment", icon: environmentIcon },
  { key: "healthcare", icon: healthcareIcon },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <!-- Title -->
      <h2>{{ t("s1.brainstormIntro.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s1.brainstormIntro.paragraph1") }}</p>
      <p>{{ t("s1.brainstormIntro.paragraph2") }}</p>
    </div>

    <div class="w-3/5 flex flex-col gap-4 mt-8">
      <!-- Examples -->
      <div
        v-for="example in examples"
        :key="example.key"
        class="flex gap-8 py-3 px-6 border rounded-xl items-center"
      >
        <!-- Example Icon -->
        <img :src="example.icon" class="w-20 h-20 my-0" />

        <div>
          <!-- Example Title -->
          <h4 class="mt-0">
            {{ t(`s1.brainstormIntro.examples.${example.key}.title`) }}
          </h4>

          <!-- Example Description -->
          <p class="text-sm my-0">
            {{ t(`s1.brainstormIntro.examples.${example.key}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
