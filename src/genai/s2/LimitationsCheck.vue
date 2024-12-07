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
  <h2>Fact Checking</h2>
  <p>
    As you may have noticed in the conversation, the LLM sometimes gives you
    responses that are not entirely accurate but may seem so at first glance.
    This is because LLMs are not truly “intelligent”. They are also not a search
    engine.
  </p>
  <p>
    <strong>Task: </strong>
    Using an Internet search engine, verify the accuracy of the following
    statistics included in the response.
  </p>
  <table class="table table-sm my-0">
    <thead>
      <tr>
        <th>Statistics</th>
        <th>Accuracy</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(fact, index) in facts" :key="index">
        <td>{{ fact.stat }}</td>
        <td>
          <SelectTf :state="fact.state.state" :answer="fact.state.answer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
