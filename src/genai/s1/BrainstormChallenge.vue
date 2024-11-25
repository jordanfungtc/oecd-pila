<script setup lang="ts">
import { store } from "../../store";
import { S1 } from "../states";
</script>

<template>
  <h2>Potential Challenge</h2>
  <p>
    <strong>Task: </strong>
    What are potential challenges you may face in implementing this AI system to
    solve the issue?
  </p>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S1.APP_BRAINSTORM_CHALLENGE.state]"
    placeholder="Challenge"
  />
  <p>
    <strong>Task: </strong>
    How would you address this challenge?
  </p>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S1.APP_BRAINSTORM_SOLUTION.state]"
    placeholder="Solution"
  />
</template>
