<script setup lang="ts">
import { store } from "../../store";
import { S1 } from "../states";
</script>

<template>
  <h2>Problem</h2>
  <div class="alert bg-white outline outline-1">
    <strong>Chosen Sector:</strong>
    {{
      store.state[S1.APP_BRAINSTORM_SECTOR.state]
        ? store.state[S1.APP_BRAINSTORM_SECTOR.state]
        : "None"
    }}
  </div>
  <p>
    <strong>Task: </strong>
    Identify a specific problem that can potentially be solved using an AI
    solution within the chosen sector that affects your daily life or the lives
    of others. Explain why this problem is significant and describe its impact.
  </p>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S1.APP_BRAINSTORM_PROBLEM.state]"
    placeholder="Problem"
    rows="3"
  ></textarea>
</template>
