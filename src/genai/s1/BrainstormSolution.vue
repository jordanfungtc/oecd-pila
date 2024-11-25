<script setup lang="ts">
import { store } from "../../store";
import { S1 } from "../states";
</script>

<template>
  <h2>Solution</h2>
  <p>
    <strong>Task: </strong>
    Think of the input data your AI system would require, and the resulting
    output.
  </p>
  <h4>Input</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S1.APP_BRAINSTORM_INPUT.state]"
    placeholder="Input"
  />
  <!-- Output -->
  <h4>Output</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S1.APP_BRAINSTORM_OUTPUT.state]"
    placeholder="Output"
  />
</template>
