<script setup lang="ts">
import { store } from "../store";

const props = defineProps(["state", "answer"]);
</script>

<template>
  <select
    class="select select-bordered w-full min-w-24 bg-white"
    v-model="store.state[props.state]"
    v-bind:class="{
      'select-success': store.state[props.state] == parseInt(props.answer),
      'select-error':
        store.state[props.state] != undefined &&
        store.state[props.state] !== parseInt(props.answer),
    }"
  >
    <option :value="undefined" disabled>-</option>
    <option :value="1">1</option>
    <option :value="0">0</option>
  </select>
</template>
