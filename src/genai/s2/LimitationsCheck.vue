<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S2 } from "../states";
import SelectTf from "../../util/SelectTf.vue";

const { t } = useI18n();
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
        <strong>{{ t("common.task") }}:</strong>
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
            <tr
              v-for="(fact, index) in [
                S2.LLM_FACT_IPOA,
                S2.LLM_FACT_NASA,
                S2.LLM_FACT_EUREO,
              ]"
              :key="index"
            >
              <!-- Statistic Text -->
              <td>
                <i>"{{ t(`s2.limitationsCheck.facts.${index}`) }}"</i>
              </td>

              <!-- Accuracy Selection -->
              <td>
                <SelectTf :state="fact.state" :answer="fact.answer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
