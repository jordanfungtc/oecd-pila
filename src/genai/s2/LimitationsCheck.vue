<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S2 } from "../states";
import SelectTf from "../../util/SelectTf.vue";

const { t } = useI18n();
const facts = [
  {
    statKey: "s2.limitationsCheck.facts.0",
    state: S2.LLM_FACT_IPOA,
  },
  {
    statKey: "s2.limitationsCheck.facts.1",
    state: S2.LLM_FACT_NASA,
  },
  {
    statKey: "s2.limitationsCheck.facts.2",
    state: S2.LLM_FACT_EUREO,
  },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <!-- Title -->
      <h2>{{ t("s2.limitationsCheck.title") }}</h2>

      <!-- Paragraphs -->
      <p>{{ t("s2.limitationsCheck.paragraph1") }}</p>
      <p>{{ t("s2.limitationsCheck.paragraph2") }}</p>
    </div>

    <div class="w-2/3 mt-8">
      <!-- Task Instruction -->
      <p>
        <strong>{{ t("common.taskLabel") }} </strong>
        {{ t("s2.limitationsCheck.taskInstruction") }}
      </p>

      <!-- Statistics Table -->
      <div class="border rounded-xl">
        <table class="table my-0">
          <!-- Header -->
          <thead>
            <tr>
              <th>{{ t("s2.limitationsCheck.statisticsHeader") }}</th>
              <th>{{ t("s2.limitationsCheck.accuracyHeader") }}</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(fact, index) in facts" :key="index">
              <!-- Statistic Text -->
              <td>
                <i>"{{ t(fact.statKey) }}"</i>
              </td>

              <!-- Accuracy Selection -->
              <td>
                <SelectTf
                  :state="fact.state.state"
                  :answer="fact.state.answer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
