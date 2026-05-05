<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { BIcon1Circle } from "bootstrap-icons-vue";

const { t, tm } = useI18n();
const database = computed(() => tm("s3.ragExamples.database") as string[]);
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.ragDatabase.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s3.ragDatabase.taskInstruction") }}
  </p>

  <!-- Database Section -->
  <div class="flex gap-2 items-center mb-4">
    <BIcon1Circle class="w-5 h-5" />
    <h4 class="my-0">{{ t("s3.ragDatabase.sectionTitle") }}</h4>
    <div class="flex-grow"></div>
    <div class="tooltip tooltip-left" :data-tip="t('s3.ragDatabase.tooltip')">
      <button class="btn btn-xs btn-circle">?</button>
    </div>
  </div>

  <!-- Database Rows -->
  <input
    v-for="(data, index) in database"
    :key="index"
    :value="data"
    type="text"
    class="input input-sm textarea-bordered w-full leading-normal mb-1"
    rows="1"
    readonly
  />
</template>
