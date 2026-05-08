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
  { icon: BIcon1Circle, key: "database" },
  { icon: BIcon2Circle, key: "query" },
  { icon: BIcon3Circle, key: "retrieve" },
  { icon: BIcon4Circle, key: "augment" },
  { icon: BIcon5Circle, key: "generate" },
];
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.ragSteps.title") }}</h2>

  <!-- Paragraph -->
  <p>{{ t("s3.ragSteps.paragraph1") }}</p>

  <!-- Steps Table -->
  <table class="my-0">
    <tbody>
      <tr v-for="step in steps" :key="step.key">
        <td><component :is="step.icon" class="w-5 h-5" /></td>
        <td>
          <strong>{{ t(`s3.ragSteps.steps.${step.key}.title`) }}</strong>
        </td>
        <td>{{ t(`s3.ragSteps.steps.${step.key}.description`) }}</td>
      </tr>
    </tbody>
  </table>
</template>
