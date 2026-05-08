<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S3 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.ragBrainstorm.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.task") }}:</strong>
    {{ t("s3.ragBrainstorm.taskInstruction") }}
  </p>

  <!-- Use Instruction -->
  <h4>{{ t("s3.ragBrainstorm.useInstruction") }}</h4>

  <!-- Task Textarea -->
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_TASK.state]"
    :placeholder="t('common.answer')"
  />

  <!-- Database Instruction -->
  <h4>{{ t("s3.ragBrainstorm.databaseInstruction") }}</h4>

  <!-- Database Textarea -->
  <textarea
    class="textarea textarea-lg textarea-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_DATABASE.state]"
    :placeholder="t('common.answer')"
  ></textarea>
</template>
