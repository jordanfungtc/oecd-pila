<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
const stories = {
  teacher: {
    emoji: "👨‍🏫",
    labelKey: "s4.caseSelect.stories.teacher.label",
    textKey: "s4.caseSelect.stories.teacher.text",
  },
  police: {
    emoji: "👮‍♀️",
    labelKey: "s4.caseSelect.stories.police.label",
    textKey: "s4.caseSelect.stories.police.text",
  },
  university: {
    emoji: "🎓",
    labelKey: "s4.caseSelect.stories.university.label",
    textKey: "s4.caseSelect.stories.university.text",
  },
  medical: {
    emoji: "🏥",
    labelKey: "s4.caseSelect.stories.medical.label",
    textKey: "s4.caseSelect.stories.medical.text",
  },
};
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.caseSelect.title") }}</h2>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.caseSelect.taskInstruction") }}
      </p>

      <!-- Story Selection -->
      <div
        v-for="(story, key) in stories"
        :key="key"
        class="form-control px-2 border rounded-xl mb-2"
        :class="{
          'border-neutral': store.state[S4.CASE_STORY.state] === key,
        }"
      >
        <label class="label cursor-pointer">
          <span class="label-text">{{ `${story.emoji} ${t(story.labelKey)}` }}</span>
          <input
            type="radio"
            name="radio-10"
            class="radio"
            :checked="store.state[S4.CASE_STORY.state] === key"
            @change="store.state[S4.CASE_STORY.state] = key"
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
          `${stories[store.state[S4.CASE_STORY.state] as keyof typeof stories].emoji} ${t(stories[store.state[S4.CASE_STORY.state] as keyof typeof stories].labelKey)}`
        }}
      </h3>

      <!-- Story Text -->
      <div
        v-if="store.state[S4.CASE_STORY.state]"
        v-html="
          t(
            stories[store.state[S4.CASE_STORY.state] as keyof typeof stories]
              .textKey,
          )
        "
      ></div>
    </div>
  </div>
</template>
