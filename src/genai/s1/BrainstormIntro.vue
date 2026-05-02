<script setup lang="ts">
import { useI18n } from "vue-i18n";
import transportIcon from "/s1/b-transport.png";
import environmentIcon from "/s1/b-environment.png";
import healthcareIcon from "/s1/b-healthcare.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>{{ t("s1.brainstormIntro.title") }}</h2>
      <p>{{ t("s1.brainstormIntro.paragraph1") }}</p>
      <p>{{ t("s1.brainstormIntro.paragraph2") }}</p>
    </div>
    <div class="w-3/5 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="transportIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">
            {{ t("s1.brainstormIntro.sectors.transportation.title") }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s1.brainstormIntro.sectors.transportation.description") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="environmentIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">
            {{ t("s1.brainstormIntro.sectors.environment.title") }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s1.brainstormIntro.sectors.environment.description") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="healthcareIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">
            {{ t("s1.brainstormIntro.sectors.healthcare.title") }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s1.brainstormIntro.sectors.healthcare.description") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
