<script setup lang="ts">
import { S2 } from "../states";
import SelectTf from "../../util/SelectTf.vue";

const facts = [
  {
    stat: "90% increase in the frequency of severe weather events over the last decade, as reported by the Intergovernmental Panel on Oceans and the Atmosphere (IPOA).",
    state: S2.LLM_FACT_IPOA,
  },
  {
    stat: "Polar ice caps are melting at a rate of 13% per decade, as highlighted by NASA.",
    state: S2.LLM_FACT_NASA,
  },
  {
    stat: "Transitioning to renewable energy sources could reduce global greenhouse gas emissions by 150% by 2070, according to the European Renewable Energy Office (EUREO).",
    state: S2.LLM_FACT_EUREO,
  },
];
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>Fact Checking</h2>
      <p>
        LLMs create responses by predicting the next word based on their
        training data – they are not truly intelligent. As such, LLMs can
        sometimes produce responses that seem accurate at first glance but are
        not entirely reliable.
      </p>
      <p>
        In fact, in the conversation you just had with the LLM, some of the
        statistics included in the generated essay were inaccurate. Can you
        identify which ones?
      </p>
    </div>
    <div class="w-2/3 mt-8">
      <p>
        <strong>Task: </strong>
        Using an Internet search engine, verify the accuracy of the following
        statistics included in the response.
      </p>
      <div class="border rounded-xl">
        <table class="table my-0">
          <thead>
            <tr>
              <th>Statistics</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fact, index) in facts" :key="index">
              <td>
                <i>"{{ fact.stat }}"</i>
              </td>
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
