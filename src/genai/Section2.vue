<script setup lang="ts">
import { store } from "../store";
import Frame from "../util/Frame.vue";
import Intro from "./s2/Intro.vue";
import PromptSelect from "./s2/PromptSelect.vue";
import PromptGenerate from "./s2/PromptGenerate.vue";
import PromptTechniques from "./s2/PromptTechniques.vue";
import ConversationalAi from "./s2/ConversationalAi.vue";
import FactChecking from "./s2/FactChecking.vue";
import Limitations from "./s2/Limitations.vue";
import Brainstorm from "./s2/Brainstorm.vue";

store.title = "Generative AI Module";
</script>

<template>
  <Frame :steps="9">
    <template #0><Intro /></template>
    <template #1><PromptSelect /></template>
    <template #2><PromptGenerate i="0" /></template>
    <template #3><PromptGenerate i="1" /></template>
    <template #4><PromptTechniques /></template>
    <template #5><ConversationalAi /></template>
    <template #6><FactChecking /></template>
    <template #7><Limitations /></template>
    <template #8><Brainstorm /></template>
  </Frame>
</template>
