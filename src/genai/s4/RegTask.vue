<script setup lang="ts">
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import { S4 } from "../states";
import SelectRisk from "../../util/SelectRisk.vue";

const regs = [
  {
    desc: "A company uses AI to screen resumes of job applicants and automatically shortlist candidates for job interviews.",
    recital: "57",
    state: S4.REG_RISK_JOB,
  },
  {
    desc: "A student uses LLMs for assistance in homework assignments and disclose the use of AI in the submission.",
    recital: "133",
    state: S4.REG_RISK_HOMEWORK,
  },
  {
    desc: "An organisation uses LLMs to generate fake news articles to manipulate groups of people into taking harmful actions.",
    recital: "29",
    state: S4.REG_RISK_FAKE,
  },
  {
    desc: "A judge uses LLMs for assistance in researching and interpreting the law and for applying it to the facts of a case.",
    recital: "61",
    state: S4.REG_RISK_JUDGE,
  },
  {
    desc: "A law enforcement agency uses AI to analyse the characteristics of citizens to predict future criminal behaviour.",
    recital: "42",
    state: S4.REG_RISK_POLICE,
  },
];
</script>

<template>
  <h2>Identify the Risk Level of AI</h2>
  <p>
    <strong>Task: </strong>
    Go through the AI use cases below and determine the level of risk they pose
    under the EU AI act.
  </p>
  <!-- Use Case Table -->
  <table class="table table-sm w-full my-0">
    <tbody>
      <tr v-for="(reg, reg_i) in regs" :key="reg_i">
        <td class="min-w-32">
          <a
            :href="`https://artificialintelligenceact.eu/recital/${reg.recital}`"
            target="_blank"
            class="text-primary flex gap-2 items-center no-underline"
          >
            <BIconFileEarmarkTextFill />
            Recital {{ reg.recital }}
          </a>
        </td>
        <td>
          {{ reg.desc }}
        </td>
        <td>
          <SelectRisk :state="reg.state.state" :answer="reg.state.answer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
