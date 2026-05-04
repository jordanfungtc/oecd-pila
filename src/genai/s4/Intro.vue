<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { BIconPlayBtn } from "bootstrap-icons-vue";
import sectionIcon from "/s4/s4-icon.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>{{ t("s4.intro.title") }}</h2>
      <p>{{ t("s4.intro.paragraph1") }}</p>
      <p>{{ t("s4.intro.paragraph2") }}</p>
      <p>{{ t("s4.intro.paragraph3") }}</p>
      <a
        href="https://www.youtube.com/watch?v=VqFqWIqOB1g"
        target="_blank"
        class="flex gap-2 items-center text-primary mt-8 no-underline"
      >
        <BIconPlayBtn /> {{ t("s4.intro.videoLabel") }}
      </a>
    </div>
  </div>
</template>
