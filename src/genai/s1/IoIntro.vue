<script setup lang="ts">
import { useI18n } from "vue-i18n";
import musicIcon from "/s1/music.png";
import assistantIcon from "/s1/assistant.png";
import spamIcon from "/s1/spam.png";
import navigationIcon from "/s1/navigation.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>{{ t("s1.ioIntro.title") }}</h2>
      <p>{{ t("s1.ioIntro.paragraph1") }}</p>
      <p>{{ t("s1.ioIntro.paragraph2") }}</p>
      <p>{{ t("s1.ioIntro.paragraph3") }}</p>
    </div>

    <div class="w-1/2 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="musicIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">{{ t("s1.ioIntro.examples.music.title") }}</h4>
          <p class="text-sm my-0">
            {{ t("s1.ioIntro.examples.music.inputs") }}<br />
            {{ t("s1.ioIntro.examples.music.outputs") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="assistantIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">{{ t("s1.ioIntro.examples.assistant.title") }}</h4>
          <p class="text-sm my-0">
            {{ t("s1.ioIntro.examples.assistant.inputs") }}<br />
            {{ t("s1.ioIntro.examples.assistant.outputs") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="spamIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">{{ t("s1.ioIntro.examples.spam.title") }}</h4>
          <p class="text-sm my-0">
            {{ t("s1.ioIntro.examples.spam.inputs") }}<br />
            {{ t("s1.ioIntro.examples.spam.outputs") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="navigationIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">{{ t("s1.ioIntro.examples.navigation.title") }}</h4>
          <p class="text-sm my-0">
            {{ t("s1.ioIntro.examples.navigation.inputs") }}<br />
            {{ t("s1.ioIntro.examples.navigation.outputs") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
