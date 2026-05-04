<script setup lang="ts">
import { useI18n } from "vue-i18n";
import kingQueen from "/s3/king-queen.png";

const { t } = useI18n();
</script>

<template>
  <h2>{{ t("s3.analogyIntro.title") }}</h2>
  <p>{{ t("s3.analogyIntro.paragraph1") }}</p>
  <p>{{ t("s3.analogyIntro.paragraph2") }}</p>
  <div class="flex justify-center">
    <img :src="kingQueen" class="w-auto h-32 my-4" />
  </div>
</template>
