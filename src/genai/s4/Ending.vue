<script setup lang="ts">
import { useI18n } from "vue-i18n";
import congratsIcon from "/s4/congrats.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col items-center justify-center h-full">
    <img :src="congratsIcon" class="w-40 h-40 mt-20 mb-10" />
    <h1>{{ t("s4.ending.title") }}</h1>
    {{ t("s4.ending.message") }}
  </div>
</template>
