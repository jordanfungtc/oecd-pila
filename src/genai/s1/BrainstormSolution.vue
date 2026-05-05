<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S1 } from "../states";

const { t } = useI18n();
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s1.brainstormSolution.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s1.brainstormSolution.taskInstruction") }}
  </p>

  <!-- Input Instruction -->
  <h4>{{ t("s1.brainstormSolution.inputInstruction") }}</h4>

  <!-- Input Textarea -->
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_INPUT.state]"
    :placeholder="t('s1.brainstormSolution.inputPlaceholder')"
    rows="2"
  ></textarea>

  <!-- Output Instruction -->
  <h4>{{ t("s1.brainstormSolution.outputInstruction") }}</h4>

  <!-- Output Textarea -->
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_OUTPUT.state]"
    :placeholder="t('s1.brainstormSolution.outputPlaceholder')"
    rows="2"
  ></textarea>
</template>
