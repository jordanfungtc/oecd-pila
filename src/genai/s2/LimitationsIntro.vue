<script setup lang="ts">
import { useI18n } from "vue-i18n";
import dataCutoffIcon from "/s2/data-cutoff.png";
import hallucinationIcon from "/s2/hallucination.png";
import intelPropIcon from "/s2/intel-prop.png";

const { t } = useI18n();
const limitations = [
  { key: "dataCutoff", icon: dataCutoffIcon },
  { key: "hallucinations", icon: hallucinationIcon },
  { key: "intellectualProperty", icon: intelPropIcon },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s2.limitationsIntro.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s2.limitationsIntro.paragraph1") }}</p>
      <p>{{ t("s2.limitationsIntro.paragraph2") }}</p>
    </div>

    <div class="w-2/3 flex flex-col gap-4 mt-8">
      <!-- Limitations -->
      <div
        v-for="limitation in limitations"
        :key="limitation.key"
        class="flex gap-8 py-3 px-6 border rounded-xl items-center"
      >
        <!-- Limitation Icon -->
        <img :src="limitation.icon" class="w-20 h-20 my-4" />

        <div>
          <!-- Limitation Title -->
          <h4 class="mt-0">
            {{ t(`s2.limitationsIntro.limitations.${limitation.key}.title`) }}
          </h4>

          <!-- Limitation Description -->
          <p class="text-sm my-0">
            {{
              t(`s2.limitationsIntro.limitations.${limitation.key}.description`)
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
