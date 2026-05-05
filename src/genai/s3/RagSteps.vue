<script setup lang="ts">
import { useI18n } from "vue-i18n";
import {
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
} from "bootstrap-icons-vue";

const { t } = useI18n();

const steps = [
  {
    icon: BIcon1Circle,
    titleKey: "s3.ragSteps.steps.database.title",
    descriptionKey: "s3.ragSteps.steps.database.description",
  },
  {
    icon: BIcon2Circle,
    titleKey: "s3.ragSteps.steps.query.title",
    descriptionKey: "s3.ragSteps.steps.query.description",
  },
  {
    icon: BIcon3Circle,
    titleKey: "s3.ragSteps.steps.retrieve.title",
    descriptionKey: "s3.ragSteps.steps.retrieve.description",
  },
  {
    icon: BIcon4Circle,
    titleKey: "s3.ragSteps.steps.augment.title",
    descriptionKey: "s3.ragSteps.steps.augment.description",
  },
  {
    icon: BIcon5Circle,
    titleKey: "s3.ragSteps.steps.generate.title",
    descriptionKey: "s3.ragSteps.steps.generate.description",
  },
] as const;
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.ragSteps.title") }}</h2>

  <!-- Paragraph -->
  <p>{{ t("s3.ragSteps.paragraph1") }}</p>

  <!-- Steps Table -->
  <table class="my-0">
    <tbody>
      <tr v-for="step in steps" :key="step.titleKey">
        <td><component :is="step.icon" class="w-5 h-5" /></td>
        <td>
          <strong>{{ t(step.titleKey) }}</strong>
        </td>
        <td>{{ t(step.descriptionKey) }}</td>
      </tr>
    </tbody>
  </table>
</template>
