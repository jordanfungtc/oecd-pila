<script setup lang="ts">
import { store } from "../store";
import Frame from "../util/Frame.vue";
import Intro from "./s3/Intro.vue";
import EmbIntro from "./s3/EmbIntro.vue";
import EmbTask from "./s3/EmbTask.vue";
import Similarity from "./s3/Similarity.vue";
import AnalogyTask from "./s3/AnalogyTask.vue";
import AnalogyBrainstorm from "./s3/AnalogyBrainstorm.vue";
import RagIntro from "./s3/RagIntro.vue";
import RagDatabase from "./s3/RagDatabase.vue";
import RagGenerate from "./s3/RagGenerate.vue";
import RagBrainstorm from "./s3/RagBrainstorm.vue";

store.title = "Generative AI Module";
</script>

<template>
  <Frame :steps="10">
    <template #0><Intro /></template>
    <template #1><EmbIntro /></template>
    <template #2><EmbTask /></template>
    <template #3><Similarity /></template>
    <template #4><AnalogyTask /></template>
    <template #5><AnalogyBrainstorm /></template>
    <template #6><RagIntro /></template>
    <template #7><RagDatabase /></template>
    <template #8><RagGenerate /></template>
    <template #9><RagBrainstorm /></template>
  </Frame>
</template>
