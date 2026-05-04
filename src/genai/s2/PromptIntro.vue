<script setup lang="ts">
import { useI18n } from "vue-i18n";
import qaIcon from "/s2/qa.png";
import contentIcon from "/s2/content.png";
import programmingIcon from "/s2/programming.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>{{ t("s2.promptIntro.title") }}</h2>
      <p>{{ t("s2.promptIntro.paragraph1") }}</p>
      <p>{{ t("s2.promptIntro.paragraph2") }}</p>
    </div>
    <div class="w-3/5 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="qaIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">{{ t("s2.promptIntro.examples.qa.title") }}</h4>
          <ul class="text-sm my-0">
            <li>{{ t("s2.promptIntro.examples.qa.items.0") }}</li>
            <li>{{ t("s2.promptIntro.examples.qa.items.1") }}</li>
            <li>{{ t("s2.promptIntro.examples.qa.items.2") }}</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="contentIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">{{ t("s2.promptIntro.examples.content.title") }}</h4>
          <ul class="text-sm my-0">
            <li>{{ t("s2.promptIntro.examples.content.items.0") }}</li>
            <li>{{ t("s2.promptIntro.examples.content.items.1") }}</li>
            <li>{{ t("s2.promptIntro.examples.content.items.2") }}</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="programmingIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">
            {{ t("s2.promptIntro.examples.programming.title") }}
          </h4>
          <ul class="text-sm my-0">
            <li>{{ t("s2.promptIntro.examples.programming.items.0") }}</li>
            <li>{{ t("s2.promptIntro.examples.programming.items.1") }}</li>
            <li>{{ t("s2.promptIntro.examples.programming.items.2") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
