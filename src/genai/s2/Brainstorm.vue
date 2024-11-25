<script setup lang="ts">
import { store } from "../../store";
import { S2 } from "../states";
</script>

<template>
  <h2>LLMs in Everyday Life</h2>
  <p>
    Now that you are familiar with the capabilities and limitations of LLMs,
    let's brainstorm some everyday applications of LLMs.
  </p>
  <p>
    <strong>Task: </strong>
    Identify a task that could be automated or improved with the help of LLMs.
  </p>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S2.LLM_BRAINSTORM_TASK.state]"
    placeholder="Task"
  />
  <p>
    <strong>Task: </strong>
    Write the prompt you would use as the input to an LLM to assist you in this
    task.
  </p>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S2.LLM_BRAINSTORM_PROMPT.state]"
    placeholder="Prompt"
    rows="3"
  ></textarea>
</template>
