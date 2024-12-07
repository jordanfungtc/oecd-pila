<script setup lang="ts">
import { store } from "../store";
import Frame from "../util/Frame.vue";
import Intro from "./s2/Intro.vue";
import PromptIntro from "./s2/PromptIntro.vue";
import PromptSelect from "./s2/PromptSelect.vue";
import PromptGenerate from "./s2/PromptGenerate.vue";
import PromptTechniques from "./s2/PromptTechniques.vue";
import LimitationsConv from "./s2/LimitationsConv.vue";
import LimitationsCheck from "./s2/LimitationsCheck.vue";
import LimitationsIntro from "./s2/LimitationsIntro.vue";
import Brainstorm from "./s2/Brainstorm.vue";

store.title = "Generative AI Module";
</script>

<template>
  <Frame :steps="10">
    <template #0><Intro /></template>
    <template #1><PromptIntro /></template>
    <template #2><PromptSelect /></template>
    <template #3><PromptGenerate i="0" /></template>
    <template #4><PromptGenerate i="1" /></template>
    <template #5><PromptTechniques /></template>
    <template #6><LimitationsConv /></template>
    <template #7><LimitationsCheck /></template>
    <template #8><LimitationsIntro /></template>
    <template #9><Brainstorm /></template>
  </Frame>
</template>
