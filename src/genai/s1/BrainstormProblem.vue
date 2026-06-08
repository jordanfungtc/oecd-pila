<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S1 } from "../states";

const { t } = useI18n();

const sectors = [
  { key: "healthcare", emoji: "🏥" },
  { key: "finance", emoji: "💰" },
  { key: "education", emoji: "📚" },
  { key: "transportation", emoji: "🚗" },
  { key: "retail", emoji: "🛒" },
  { key: "sports", emoji: "⚽" },
  { key: "agriculture", emoji: "🌾" },
  { key: "manufacturing", emoji: "🏭" },
  { key: "arts", emoji: "🎨" },
  { key: "government", emoji: "🏛️" },
  { key: "environment", emoji: "🌱" },
  { key: "legal", emoji: "⚖️" },
  { key: "entertainment", emoji: "🎬" },
  { key: "telecom", emoji: "📱" },
  { key: "hospitality", emoji: "🏨" },
] as const;
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s1.brainstormProblem.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.task") }}:</strong>
    {{ t("s1.brainstormProblem.taskInstruction") }}
  </p>

  <!-- Sector Selection -->
  <div class="grid grid-cols-5 gap-2">
    <div
      v-for="sector in sectors"
      :key="sector.key"
      class="form-control px-2 border rounded-xl"
      :class="{
        'border-neutral':
          store.state[S1.APP_BRAINSTORM_SECTOR.state] === sector.key,
      }"
    >
      <label class="label cursor-pointer">
        <span class="label-text">
          {{ sector.emoji }}
          {{ t(`s1.brainstormProblem.sectors.${sector.key}`) }}
        </span>
        <input
          type="radio"
          name="radio-10"
          class="radio"
          :checked="store.state[S1.APP_BRAINSTORM_SECTOR.state] === sector.key"
          @change="store.state[S1.APP_BRAINSTORM_SECTOR.state] = sector.key"
        />
      </label>
    </div>
  </div>

  <!-- Problem Input -->
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal mt-8"
    v-model="store.state[S1.APP_BRAINSTORM_PROBLEM.state]"
    :placeholder="t('common.answer')"
    rows="3"
  ></textarea>
</template>
