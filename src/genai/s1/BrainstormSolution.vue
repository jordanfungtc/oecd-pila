<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S1 } from "../states";

const { t } = useI18n();
</script>

<template>
  <h2>{{ t("s1.brainstormSolution.title") }}</h2>
  <p>
    <strong>{{ t("s1.brainstormSolution.taskLabel") }} </strong>
    {{ t("s1.brainstormSolution.taskInstruction") }}
  </p>
  <h4>{{ t("s1.brainstormSolution.inputPrompt") }}</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_INPUT.state]"
    :placeholder="t('s1.brainstormSolution.inputPlaceholder')"
    rows="2"
  ></textarea>
  <!-- Output -->
  <h4>{{ t("s1.brainstormSolution.outputPrompt") }}</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_OUTPUT.state]"
    :placeholder="t('s1.brainstormSolution.outputPlaceholder')"
    rows="2"
  ></textarea>
</template>
