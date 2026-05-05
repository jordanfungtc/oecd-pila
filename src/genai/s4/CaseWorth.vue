<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";

const { t } = useI18n();
const sliders = {
  ethical: {
    labelKey: "s4.caseWorth.sliders.ethical.label",
    rangeKeys: [
      "s4.caseWorth.sliders.ethical.range.low",
      "s4.caseWorth.sliders.ethical.range.medium",
      "s4.caseWorth.sliders.ethical.range.high",
      "s4.caseWorth.sliders.ethical.range.unacceptable",
    ],
    state: S4.CASE_ETHICAL,
    tooltipKey: "s4.caseWorth.sliders.ethical.tooltip",
  },
  technical: {
    labelKey: "s4.caseWorth.sliders.technical.label",
    rangeKeys: [
      "s4.caseWorth.sliders.technical.range.easy",
      "s4.caseWorth.sliders.technical.range.difficult",
      "s4.caseWorth.sliders.technical.range.veryDifficult",
      "s4.caseWorth.sliders.technical.range.impossible",
    ],
    state: S4.CASE_TECHNICAL,
    tooltipKey: "s4.caseWorth.sliders.technical.tooltip",
  },
  cost: {
    labelKey: "s4.caseWorth.sliders.cost.label",
    rangeKeys: [
      "s4.caseWorth.sliders.cost.range.lowCost",
      "s4.caseWorth.sliders.cost.range.mediumCost",
      "s4.caseWorth.sliders.cost.range.highCost",
      "s4.caseWorth.sliders.cost.range.unaffordable",
    ],
    state: S4.CASE_COST,
    tooltipKey: "s4.caseWorth.sliders.cost.tooltip",
  },
};
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s4.caseWorth.title") }}</h2>

      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.taskLabel") }}</strong>
        {{ t("s4.caseWorth.taskInstruction") }}
      </p>
      <p>{{ t("s4.caseWorth.note") }}</p>
    </div>

    <div class="w-2/3 mt-12 flex flex-col gap-8">
      <!-- Sliders -->
      <div class="flex" v-for="(slider, i) in sliders" :key="i">
        <div class="w-1/5">
          <h4 class="my-0">
            {{ t(slider.labelKey) }}
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
              <span v-for="(rangeKey, j) in slider.rangeKeys" :key="j">
                {{ t(rangeKey) }}
              </span>
            </div>
          </div>
          <div class="tooltip" :data-tip="t(slider.tooltipKey)">
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
          :placeholder="t('s4.caseWorth.explanationPlaceholder')"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>
