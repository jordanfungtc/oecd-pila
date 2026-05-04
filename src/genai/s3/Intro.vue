<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import sectionIcon from "/s3/s3-icon.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>{{ t("s3.intro.title") }}</h2>
      <p>{{ t("s3.intro.paragraph1") }}</p>
      <p>{{ t("s3.intro.paragraph2") }}</p>
      <p>{{ t("s3.intro.paragraph3") }}</p>
      <a
        href="https://www.youtube.com/watch?v=wgfSDrqYMJ4"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconPlayBtn /> {{ t("s3.intro.videoLabel") }}
      </a>
    </div>
  </div>
</template>
