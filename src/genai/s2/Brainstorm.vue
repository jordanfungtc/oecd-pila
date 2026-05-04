<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
</script>

<template>
  <h2>{{ t("s2.brainstorm.title") }}</h2>
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s2.brainstorm.taskInstruction") }}
  </p>
  <h4>{{ t("s2.brainstorm.usePrompt") }}</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S2.LLM_BRAINSTORM_TASK.state]"
    :placeholder="t('s2.brainstorm.taskPlaceholder')"
  />
  <h4>{{ t("s2.brainstorm.promptPrompt") }}</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S2.LLM_BRAINSTORM_PROMPT.state]"
    :placeholder="t('s2.brainstorm.promptPlaceholder')"
    rows="3"
  ></textarea>
</template>
