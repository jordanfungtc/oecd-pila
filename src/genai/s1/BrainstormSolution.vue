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
    be the expected outputs? Write your answers in the fields below.
  </p>
  <h4>The input to the AI system should be:</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_INPUT.state]"
    placeholder="Write the inputs here..."
    rows="2"
  ></textarea>
  <!-- Output -->
  <h4>The output from the AI system should be:</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_OUTPUT.state]"
    placeholder="Write the outputs here..."
    rows="2"
  ></textarea>
</template>
