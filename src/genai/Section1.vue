<script setup lang="ts">
import { store } from "../store";
import Frame from "../util/Frame.vue";
import Intro from "./s1/Intro.vue";
import Matching from "./s1/Matching.vue";
import BrainstormSector from "./s1/BrainstormSector.vue";
import BrainstormProblem from "./s1/BrainstormProblem.vue";
import BrainstormSolution from "./s1/BrainstormSolution.vue";
import BrainstormChallenge from "./s1/BrainstormChallenge.vue";

store.title = "Generative AI Module";
</script>

<template>
  <Frame :steps="10">
    <template #0><Intro /></template>
    <template #1><Matching i="0" /></template>
    <template #2><Matching i="1" /></template>
    <template #3><Matching i="2" /></template>
    <template #4><Matching i="3" /></template>
    <template #5><Matching i="4" /></template>
    <template #6><BrainstormSector /></template>
    <template #7><BrainstormProblem /></template>
    <template #8><BrainstormSolution /></template>
    <template #9><BrainstormChallenge /></template>
  </Frame>
</template>
