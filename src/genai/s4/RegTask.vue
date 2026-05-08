<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import { S4 } from "../states";
import SelectRisk from "../../util/SelectRisk.vue";

const { t } = useI18n();

const regs = [
  {
    key: "job",
    recital: "57",
    state: S4.REG_RISK_JOB,
  },
  {
    key: "homework",
    recital: "133",
    state: S4.REG_RISK_HOMEWORK,
  },
  {
    key: "fake",
    recital: "29",
    state: S4.REG_RISK_FAKE,
  },
  {
    key: "judge",
    recital: "61",
    state: S4.REG_RISK_JUDGE,
  },
  {
    key: "police",
    recital: "42",
    state: S4.REG_RISK_POLICE,
  },
];
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s4.regTask.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.task") }}:</strong>
    {{ t("s4.regTask.taskInstruction") }}
  </p>

  <!-- Use Case Table -->
  <table class="table table-sm w-full my-[-10px]">
    <tbody>
      <tr v-for="(reg, reg_i) in regs" :key="reg_i" class="my-0">
        <!-- Recital -->
        <td>
          <a
            :href="`https://artificialintelligenceact.eu/recital/${reg.recital}`"
            target="_blank"
            class="btn btn-sm btn-square"
          >
            <BIconFileEarmarkTextFill />
          </a>
        </td>

        <!-- Description -->
        <td>{{ t(`s4.regTask.regs.${reg.key}`) }}</td>

        <!-- Risk Selection -->
        <td>
          <SelectRisk :state="reg.state.state" :answer="reg.state.answer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
