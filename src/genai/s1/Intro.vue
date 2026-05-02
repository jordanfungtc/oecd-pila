<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import sectionIcon from "/s1/s1-icon.png";

const { t } = useI18n();
</script>

<template>
  <div class="flex gap-16">
    <img :src="sectionIcon" class="w-48 h-48 mt-12" />
    <div>
      <h2>{{ t("s1.intro.title") }}</h2>
      <p>
        {{ t("s1.intro.paragraph1") }}
      </p>
      <p>
        {{ t("s1.intro.paragraph2") }}
      </p>
      <a
        href="https://www.youtube.com/watch?v=reUZRyXxUs4"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconPlayBtn /> {{ t("s1.intro.tedTalkLabel") }}
      </a>
    </div>
  </div>
</template>
