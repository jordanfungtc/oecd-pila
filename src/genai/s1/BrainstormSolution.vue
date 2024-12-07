<script setup lang="ts">
import { store } from "../../store";
import { S1 } from "../states";
</script>

<template>
  <h2>Designing an AI System: Solution</h2>
  <p>
    <strong>Task: </strong>
    Now that you have identified a problem, it is time to design an AI system
    that can solve it. What would be the inputs to the AI system and what would
    be the expected outputs? Write your answers in the input and output fields
    below.
  </p>
  <h4>Input</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S1.APP_BRAINSTORM_INPUT.state]"
    placeholder="Write the inputs here..."
  />
  <!-- Output -->
  <h4>Output</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S1.APP_BRAINSTORM_OUTPUT.state]"
    placeholder="Write the outputs here..."
  />
</template>
