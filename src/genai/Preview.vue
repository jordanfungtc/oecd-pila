<script setup lang="ts">
import Section1 from "./Section1.vue";
import Section2 from "./Section2.vue";
import Section3 from "./Section3.vue";
import Section4 from "./Section4.vue";
import { store } from "../store";

store.title = "Generative AI Module";
</script>

<template>
  <div class="flex flex-col gap-24 w-full justify-center items-center mb-10">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
  </div>
</template>
