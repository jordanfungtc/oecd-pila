<script setup lang="ts">
import { store } from "../store";
import Frame from "../util/Frame.vue";
import Intro from "./s3/Intro.vue";
import EmbIntro from "./s3/EmbIntro.vue";
import EmbTask from "./s3/EmbTask.vue";
import SimilarityIntro from "./s3/SimilarityIntro.vue";
import SimilarityCalc from "./s3/SimilarityCalc.vue";
import AnalogyTask from "./s3/AnalogyTask.vue";
import AnalogyBrainstorm from "./s3/AnalogyBrainstorm.vue";
import RagIntro from "./s3/RagIntro.vue";
import RagDatabase from "./s3/RagDatabase.vue";
import RagGenerate from "./s3/RagGenerate.vue";
import RagBrainstorm from "./s3/RagBrainstorm.vue";

store.title = "Generative AI Module";
</script>

<template>
  <Frame :steps="11">
    <template #0><Intro /></template>
    <template #1><EmbIntro /></template>
    <template #2><EmbTask /></template>
    <template #3><SimilarityIntro /></template>
    <template #4><SimilarityCalc /></template>
    <template #5><AnalogyTask /></template>
    <template #6><AnalogyBrainstorm /></template>
    <template #7><RagIntro /></template>
    <template #8><RagDatabase /></template>
    <template #9><RagGenerate /></template>
    <template #10><RagBrainstorm /></template>
  </Frame>
</template>
