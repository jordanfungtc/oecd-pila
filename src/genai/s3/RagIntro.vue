<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { BIconPlayBtn } from "bootstrap-icons-vue";
import customerIcon from "/s3/customer.png";
import tutorIcon from "/s3/tutor.png";
import legalIcon from "/s3/legal.png";
import programmingIcon from "/s2/programming.png";

const { t } = useI18n();

const cards = computed(
  () =>
    [
      {
        icon: customerIcon,
        titleKey: "s3.ragIntro.cards.customer.title",
        databaseKey: "s3.ragIntro.cards.customer.database",
      },
      {
        icon: tutorIcon,
        titleKey: "s3.ragIntro.cards.tutor.title",
        databaseKey: "s3.ragIntro.cards.tutor.database",
      },
      {
        icon: legalIcon,
        titleKey: "s3.ragIntro.cards.legal.title",
        databaseKey: "s3.ragIntro.cards.legal.database",
      },
      {
        icon: programmingIcon,
        titleKey: "s3.ragIntro.cards.programming.title",
        databaseKey: "s3.ragIntro.cards.programming.database",
      },
    ] as const,
);
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>{{ t("s3.ragIntro.title") }}</h2>
      <p>{{ t("s3.ragIntro.paragraph1") }}</p>
      <p>{{ t("s3.ragIntro.paragraph2") }}</p>
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
        v-for="card in cards"
        :key="card.titleKey"
        class="flex gap-8 py-3 px-6 border rounded-xl items-center"
      >
        <img :src="card.icon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">{{ t(card.titleKey) }}</h4>
          <p class="text-sm my-0">
            {{ t("s3.ragIntro.databaseLabel") }}
            {{ t(card.databaseKey) }}<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
