<script setup lang="ts">
import { store } from "../../store";
import { S2 } from "../states";
</script>

<template>
  <h2>LLMs in Everyday Life</h2>
  <p>
    <strong>Task: </strong>
    Now that you have seen how LLMs work and some of their known limitations,
    can you think of ways you can use them to assist you in your everyday life?
    What prompts would you use? Write your answers in the fields below.
  </p>
  <h4>I think LLMs can be used for:</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S2.LLM_BRAINSTORM_TASK.state]"
    placeholder="Task"
  />
  <h4>The prompt I would use is:</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal"
    v-model="store.state[S2.LLM_BRAINSTORM_PROMPT.state]"
    placeholder="Prompt"
    rows="3"
  ></textarea>
</template>
