<script setup lang="ts">
import { store } from "../store";
import Frame from "../util/Frame.vue";
import Intro from "./s4/Intro.vue";
import BiasEmbeddings from "./s4/BiasEmbeddings.vue";
import BiasLlm from "./s4/BiasLlm.vue";
import RegIntro from "./s4/RegIntro.vue";
import RegTask from "./s4/RegTask.vue";
import SustainabilityTraining from "./s4/SustainabilityTraining.vue";
import SustainabilityInference from "./s4/SustainabilityInference.vue";
import CaseSelect from "./s4/CaseSelect.vue";
import CaseProsCons from "./s4/CaseProsCons.vue";
import CaseWorth from "./s4/CaseWorth.vue";
import Ending from "./s4/Ending.vue";

store.title = "Generative AI Module";
</script>

<template>
  <Frame :steps="11" :ending="true">
    <template #0><Intro /></template>
    <template #1><BiasEmbeddings /></template>
    <template #2><BiasLlm /></template>
    <template #3><RegIntro /></template>
    <template #4><RegTask /></template>
    <template #5><SustainabilityTraining /></template>
    <template #6><SustainabilityInference /></template>
    <template #7><CaseSelect /></template>
    <template #8><CaseProsCons /></template>
    <template #9><CaseWorth /></template>
    <template #10><Ending /></template>
  </Frame>
</template>
