<script setup lang="ts">
import { useI18n } from "vue-i18n";
import dataCutoffIcon from "/s2/data-cutoff.png";
import hallucinationIcon from "/s2/hallucination.png";
import intelPropIcon from "/s2/intel-prop.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>{{ t("s2.limitationsIntro.title") }}</h2>
      <p>{{ t("s2.limitationsIntro.paragraph1") }}</p>
      <p>{{ t("s2.limitationsIntro.paragraph2") }}</p>
    </div>
    <div class="w-2/3 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="dataCutoffIcon" class="w-20 h-20 my-4" />
        <div>
          <h4 class="mt-0">
            {{ t("s2.limitationsIntro.cards.dataCutoff.title") }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s2.limitationsIntro.cards.dataCutoff.description") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="hallucinationIcon" class="w-20 h-20 my-4" />
        <div>
          <h4 class="mt-0">
            {{ t("s2.limitationsIntro.cards.hallucinations.title") }}
          </h4>
          <p class="text-sm my-0">
            {{ t("s2.limitationsIntro.cards.hallucinations.description") }}
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="intelPropIcon" class="w-20 h-20 my-4" />
        <div>
          <h4 class="mt-0">
            {{ t("s2.limitationsIntro.cards.intellectualProperty.title") }}
          </h4>
          <p class="text-sm my-0">
            {{
              t("s2.limitationsIntro.cards.intellectualProperty.description")
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
