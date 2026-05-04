<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import { S4 } from "../states";
import SelectRisk from "../../util/SelectRisk.vue";

const { t } = useI18n();

const regs = [
  {
    descKey: "s4.regTask.regs.job.desc",
    recital: "57",
    state: S4.REG_RISK_JOB,
  },
  {
    descKey: "s4.regTask.regs.homework.desc",
    recital: "133",
    state: S4.REG_RISK_HOMEWORK,
  },
  {
    descKey: "s4.regTask.regs.fake.desc",
    recital: "29",
    state: S4.REG_RISK_FAKE,
  },
  {
    descKey: "s4.regTask.regs.judge.desc",
    recital: "61",
    state: S4.REG_RISK_JUDGE,
  },
  {
    descKey: "s4.regTask.regs.police.desc",
    recital: "42",
    state: S4.REG_RISK_POLICE,
  },
];
</script>

<template>
  <h2>{{ t("s4.regTask.title") }}</h2>
  <p>
    <strong>{{ t("common.taskLabel") }}</strong>
    {{ t("s4.regTask.taskInstruction") }}
  </p>
  <!-- Use Case Table -->
  <table class="table table-sm w-full my-[-10px]">
    <tbody>
      <tr v-for="(reg, reg_i) in regs" :key="reg_i" class="my-0">
        <td class="min-w-32">
          <a
            :href="`https://artificialintelligenceact.eu/recital/${reg.recital}`"
            target="_blank"
            class="text-primary flex gap-2 items-center no-underline"
          >
            <BIconFileEarmarkTextFill />
            {{ t("s4.regTask.recitalLabel") }} {{ reg.recital }}
          </a>
        </td>
        <td>{{ t(reg.descKey) }}</td>
        <td>
          <SelectRisk :state="reg.state.state" :answer="reg.state.answer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
