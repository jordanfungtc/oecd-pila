<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
const stories = [
  { key: "teacher", emoji: "👨‍🏫" },
  { key: "police", emoji: "👮‍♀️" },
  { key: "university", emoji: "🎓" },
  { key: "medical", emoji: "🏥" },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.caseSelect.title") }}</h2>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.task") }}:</strong>
        {{ t("s4.caseSelect.taskInstruction") }}
      </p>

      <!-- Story Selection -->
      <div
        v-for="story in stories"
        :key="story.key"
        class="form-control px-2 border rounded-xl mb-2"
        :class="{
          'border-neutral': store.state[S4.CASE_STORY.state] === story.key,
        }"
      >
        <label class="label cursor-pointer">
          <span class="label-text">{{
            `${story.emoji} ${t(`s4.caseSelect.stories.${story.key}.label`)}`
          }}</span>
          <input
            type="radio"
            name="radio-10"
            class="radio"
            :checked="store.state[S4.CASE_STORY.state] === story.key"
            @change="store.state[S4.CASE_STORY.state] = story.key"
          />
        </label>
      </div>
    </div>

    <!-- Story -->
    <div
      class="w-2/3 p-4 border rounded-xl mt-8"
      v-if="store.state[S4.CASE_STORY.state]"
    >
      <!-- Story Title -->
      <h3 class="mt-0">
        {{
          t(`s4.caseSelect.stories.${store.state[S4.CASE_STORY.state]}.label`)
        }}
      </h3>

      <!-- Story Text -->
      <div
        v-if="store.state[S4.CASE_STORY.state]"
        v-html="
          t(`s4.caseSelect.stories.${store.state[S4.CASE_STORY.state]}.text`)
        "
      ></div>
    </div>
  </div>
</template>
