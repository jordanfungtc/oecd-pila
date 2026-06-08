<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import sectionIcon from "/s2/s2-icon.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-16">
    <!-- Section Icon -->
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />

    <div>
      <!-- Title -->
      <h2>{{ t("s2.intro.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s2.intro.paragraph1") }}</p>
      <p>{{ t("s2.intro.paragraph2") }}</p>

      <!-- Video Link -->
      <a
        href="https://www.youtube.com/watch?v=iR2O2GPbB0E"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconPlayBtn /> {{ t("s2.intro.videoLabel") }}
      </a>
    </div>
  </div>
</template>
