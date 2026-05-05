<script setup lang="ts">
import { useI18n } from "vue-i18n";
import musicIcon from "/s1/music.png";
import assistantIcon from "/s1/assistant.png";
import spamIcon from "/s1/spam.png";
import navigationIcon from "/s1/navigation.png";

const { t } = useI18n();

const examples = [
  { key: "music", icon: musicIcon },
  { key: "assistant", icon: assistantIcon },
  { key: "spam", icon: spamIcon },
  { key: "navigation", icon: navigationIcon },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <!-- Title -->
      <h2>{{ t("s1.ioIntro.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s1.ioIntro.paragraph1") }}</p>
      <p>{{ t("s1.ioIntro.paragraph2") }}</p>
      <p>{{ t("s1.ioIntro.paragraph3") }}</p>
    </div>

    <div class="w-1/2 flex flex-col gap-4 mt-8">
      <!-- Examples -->
      <div
        v-for="example in examples"
        :key="example.key"
        class="flex gap-8 py-3 px-6 border rounded-xl items-center"
      >
        <!-- Example Icon -->
        <img :src="example.icon" class="w-16 h-16 my-0" />

        <div>
          <!-- Example Title -->
          <h4 class="mt-0">
            {{ t(`s1.ioIntro.examples.${example.key}.title`) }}
          </h4>

          <!-- Example Inputs -->
          <p class="text-sm my-0">
            {{ t(`s1.ioIntro.examples.${example.key}.inputs`) }}
          </p>

          <!-- Example Outputs -->
          <p class="text-sm my-0">
            {{ t(`s1.ioIntro.examples.${example.key}.outputs`) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
