<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { BIconPlayBtn } from "bootstrap-icons-vue";
import customerIcon from "/s3/customer.png";
import tutorIcon from "/s3/tutor.png";
import legalIcon from "/s3/legal.png";
import programmingIcon from "/s2/programming.png";

const { t } = useI18n();

const examples = [
  {
    icon: customerIcon,
    titleKey: "s3.ragIntro.examples.customer.title",
    databaseKey: "s3.ragIntro.examples.customer.database",
  },
  {
    icon: tutorIcon,
    titleKey: "s3.ragIntro.examples.tutor.title",
    databaseKey: "s3.ragIntro.examples.tutor.database",
  },
  {
    icon: legalIcon,
    titleKey: "s3.ragIntro.examples.legal.title",
    databaseKey: "s3.ragIntro.examples.legal.database",
  },
  {
    icon: programmingIcon,
    titleKey: "s3.ragIntro.examples.programming.title",
    databaseKey: "s3.ragIntro.examples.programming.database",
  },
] as const;
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <!-- Title -->
      <h2>{{ t("s3.ragIntro.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s3.ragIntro.paragraph1") }}</p>
      <p>{{ t("s3.ragIntro.paragraph2") }}</p>

      <!-- Video Link -->
      <p>
        <a
          href="https://www.youtube.com/watch?v=qppV3n3YlF8"
          target="_blank"
          class="no-underline flex gap-2 items-center text-primary mt-8"
        >
          <BIconPlayBtn /> {{ t("s3.ragIntro.videoLabel") }}
        </a>
      </p>
    </div>

    <div class="w-1/2 flex flex-col gap-4 mt-8">
      <div
        v-for="example in examples"
        :key="example.titleKey"
        class="flex gap-8 py-3 px-6 border rounded-xl items-center"
      >
        <img :src="example.icon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">{{ t(example.titleKey) }}</h4>
          <p class="text-sm my-0">
            {{ t(example.databaseKey) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
