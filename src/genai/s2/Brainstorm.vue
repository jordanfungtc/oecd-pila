<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s2.brainstorm.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s2.brainstorm.taskInstruction") }}
  </p>

  <!-- Task Instruction -->
  <h4>{{ t("s2.brainstorm.useInstruction") }}</h4>

  <!-- Task Textarea -->
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S2.LLM_BRAINSTORM_TASK.state]"
    :placeholder="t('s2.brainstorm.taskPlaceholder')"
  />

  <!-- Prompt Instruction -->
  <h4>{{ t("s2.brainstorm.promptInstruction") }}</h4>

  <!-- Prompt Textarea -->
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S2.LLM_BRAINSTORM_PROMPT.state]"
    :placeholder="t('s2.brainstorm.promptPlaceholder')"
    rows="3"
  ></textarea>
</template>
