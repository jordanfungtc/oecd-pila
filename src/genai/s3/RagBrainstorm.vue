<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S3 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
</script>

<template>
  <h2>{{ t("s3.ragBrainstorm.title") }}</h2>
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s3.ragBrainstorm.taskInstruction") }}
  </p>
  <h4>{{ t("s3.ragBrainstorm.usePrompt") }}</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_TASK.state]"
    :placeholder="t('s3.ragBrainstorm.taskPlaceholder')"
  />
  <h4>{{ t("s3.ragBrainstorm.databasePrompt") }}</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_DATABASE.state]"
    :placeholder="t('s3.ragBrainstorm.databasePlaceholder')"
  ></textarea>
</template>
