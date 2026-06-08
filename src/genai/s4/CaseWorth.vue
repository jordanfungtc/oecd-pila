<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
const sliders = [
  { key: "ethical", state: S4.CASE_ETHICAL },
  { key: "technical", state: S4.CASE_TECHNICAL },
  { key: "cost", state: S4.CASE_COST },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.caseWorth.title") }}</h2>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.task") }}:</strong>
        {{ t("s4.caseWorth.taskInstruction") }}
      </p>
      <p>{{ t("s4.caseWorth.note") }}</p>
    </div>

    <div class="w-2/3 mt-12 flex flex-col gap-8">
      <!-- Sliders -->
      <div class="flex" v-for="(slider, i) in sliders" :key="i">
        <div class="w-1/5">
          <h4 class="my-0">
            {{ t(`s4.caseWorth.sliders.${slider.key}.label`) }}
          </h4>
        </div>
        <div class="w-4/5 flex gap-4">
          <div class="w-full">
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              class="range range-xs"
              v-model="store.state[slider.state.state]"
            />
            <div class="flex w-full justify-between px-2 text-sm">
              <span v-for="(rangeKey, j) in 4" :key="j">
                {{
                  t(`s4.caseWorth.sliders.${slider.key}.range.${rangeKey - 1}`)
                }}
              </span>
            </div>
          </div>
          <div
            class="tooltip"
            :data-tip="t(`s4.caseWorth.sliders.${slider.key}.tooltip`)"
          >
            <button class="btn btn-xs btn-circle">?</button>
          </div>
        </div>
      </div>

      <!-- Explanation -->
      <div>
        <h4>{{ t("s4.caseWorth.explanationTitle") }}</h4>
        <textarea
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          v-model="store.state[S4.CASE_EXPLAIN.state]"
          :placeholder="t('common.answer')"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>
