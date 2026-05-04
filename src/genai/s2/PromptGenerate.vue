<script setup lang="ts">
import { ref } from "vue";
import { BIconArrowRightSquare } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { singleExamples } from "./gptExamples";
import { store } from "../../store";
import { S2 } from "../states";

const { t } = useI18n();
const loading = ref(false);

const props = defineProps(["i"]); // 0 - simple, 1 - refined

const generated =
  props.i === 0 ? S2.LLM_SIMPLE_GENERATED : S2.LLM_REFINED_GENERATED;

const generateHandler = () => {
  if (!store.state[S2.LLM_PROMPT.state]) {
    return window.alert(t("s2.promptGenerate.selectPromptAlert"));
  }
  loading.value = true;
  store.state[generated.state] = false;
  setTimeout(() => {
    loading.value = false;
    store.state[generated.state] = true;
  }, 2000);
};
</script>

<template>
  <h2>
    {{
      t("s2.promptGenerate.promptExampleTitle", {
        id: props.i === "0" ? "A" : "B",
      })
    }}
  </h2>
  <div class="flex gap-4 items-center">
    <textarea
      class="textarea textarea-lg textarea-bordered w-full leading-normal"
      :value="
        store.state[S2.LLM_PROMPT.state]
          ? t(
              singleExamples[
                store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples
              ].prompt[props.i] as string,
            )
          : ''
      "
      :placeholder="t('s2.promptGenerate.placeholder')"
      rows="2"
      readonly
    ></textarea>
    <div class="indicator">
      <span
        v-if="!store.state[S2.LLM_SIMPLE_GENERATED.state]"
        class="indicator-item badge badge-sm badge-error"
      ></span>
      <button class="btn" @click="generateHandler" :disabled="loading">
        <div v-if="loading" class="loading"></div>
        <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
      </button>
    </div>
  </div>
  <div class="h-[16rem] overflow-y-auto my-4 border rounded-xl p-4">
    <h4 class="mt-0">{{ t("s2.promptGenerate.responseTitle") }}</h4>
    <div
      v-if="store.state[generated.state]"
      v-html="
        t(
          singleExamples[
            store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples
          ].response[props.i] as string,
        )
      "
      class="mt-[-10px]"
    ></div>
    <p v-else>
      <strong>{{ t("s2.common.taskLabel") }} </strong>
      {{
        props.i === "0"
          ? t("s2.promptGenerate.taskInstructionA")
          : t("s2.promptGenerate.taskInstructionB")
      }}
    </p>
  </div>
</template>
