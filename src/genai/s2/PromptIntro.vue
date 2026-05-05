<script setup lang="ts">
import { useI18n } from "vue-i18n";
import qaIcon from "/s2/qa.png";
import contentIcon from "/s2/content.png";
import programmingIcon from "/s2/programming.png";

const { t } = useI18n();

const examples = [
  { key: "qa", icon: qaIcon },
  { key: "content", icon: contentIcon },
  { key: "programming", icon: programmingIcon },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <!-- Title -->
      <h2>{{ t("s2.promptIntro.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s2.promptIntro.paragraph1") }}</p>
      <p>{{ t("s2.promptIntro.paragraph2") }}</p>
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
            {{ t(`s2.promptIntro.examples.${example.key}.title`) }}
          </h4>

          <!-- Example Items -->
          <ul class="text-sm my-0">
            <li v-for="itemIdx in [0, 1, 2]" :key="itemIdx">
              {{ t(`s2.promptIntro.examples.${example.key}.items.${itemIdx}`) }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
