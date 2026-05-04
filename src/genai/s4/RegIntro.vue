<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import oecdAiIcon from "/s4/oecd-ai-logo.jpg";
import aiActIcon from "/s4/ai-act-logo.png";

const { t } = useI18n();
</script>

<template>
  <h2>{{ t("s4.regIntro.title") }}</h2>
  <p>{{ t("s4.regIntro.paragraph1") }}</p>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <img :src="oecdAiIcon" class="h-16 w-auto mt-6" />
      <p>{{ t("s4.regIntro.oecd.description") }}</p>
      <a
        :href="`https://oecd.ai/en/ai-principles`"
        target="_blank"
        class="no-underline text-primary flex gap-2 items-center"
      >
        <BIconFileEarmarkTextFill />
        {{ t("s4.regIntro.oecd.linkLabel") }}
      </a>
    </div>
    <div>
      <img :src="aiActIcon" class="h-16 w-auto mt-6" />
      <p>{{ t("s4.regIntro.eu.description") }}</p>
      <a
        href="https://artificialintelligenceact.eu/ai-act-explorer/"
        target="_blank"
        class="no-underline text-primary flex gap-2 items-center"
      >
        <BIconFileEarmarkTextFill />
        {{ t("s4.regIntro.eu.linkLabel") }}
      </a>
    </div>
  </div>
</template>
