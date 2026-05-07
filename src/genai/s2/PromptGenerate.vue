<script setup lang="ts">
import { ref } from "vue";
import { BIconArrowRightSquare } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
const loading = ref(false);
const props = defineProps(["i"]); // "0" - simple, "1" - refined
const generated =
  props.i === "0" ? S2.LLM_SIMPLE_GENERATED : S2.LLM_REFINED_GENERATED;

const generateHandler = () => {
  // Check that prompt is selected
  if (!store.state[S2.LLM_PROMPT.state]) {
    return window.alert(t("s2.promptGenerate.selectPrompt"));
  }

  // Generate response with loading delay
  loading.value = true;
  store.state[generated.state] = false;
  setTimeout(() => {
    loading.value = false;
    store.state[generated.state] = true;
  }, 3000);
};
</script>

<template>
  <!-- Title -->
  <h2>
    {{
      props.i === "0"
        ? t("s2.promptGenerate.promptExampleA")
        : t("s2.promptGenerate.promptExampleB")
    }}
  </h2>

  <div class="flex gap-4 items-center">
    <!-- Prompt -->
    <textarea
      class="textarea textarea-lg textarea-bordered w-full leading-normal"
      :value="
        store.state[S2.LLM_PROMPT.state]
          ? t(
              `s2.singleExamples.${store.state[S2.LLM_PROMPT.state]}.prompt.${props.i}`,
            )
          : ''
      "
      :placeholder="t('s2.promptGenerate.selectPrompt')"
      rows="2"
      readonly
    ></textarea>

    <!-- Generate Button -->
    <div class="indicator">
      <span
        v-if="!store.state[generated.state]"
        class="indicator-item badge badge-sm badge-error"
      ></span>
      <button class="btn" @click="generateHandler" :disabled="loading">
        <div v-if="loading" class="loading"></div>
        <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
      </button>
    </div>
  </div>

  <div class="h-[16rem] overflow-y-auto my-4 border rounded-xl p-4">
    <!-- Response Title -->
    <h4 class="mt-0">{{ t("s2.promptGenerate.responseTitle") }}</h4>

    <!-- Response Text -->
    <div
      v-if="store.state[generated.state]"
      v-html="
        t(
          `s2.singleExamples.${store.state[S2.LLM_PROMPT.state]}.response.${props.i}`,
        )
      "
      class="mt-[-10px]"
    ></div>

    <!-- Task Instruction -->
    <p v-else>
      <strong>{{ t("common.task") }} </strong>
      {{
        props.i === "0"
          ? t("s2.promptGenerate.taskInstructionA")
          : t("s2.promptGenerate.taskInstructionB")
      }}
    </p>
  </div>
</template>
