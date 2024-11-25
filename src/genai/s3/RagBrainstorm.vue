<script setup lang="ts">
import { S3 } from "../states";
import { store } from "../../store";
</script>

<template>
  <h2>RAG in Everyday Life</h2>
  <p>
    Now that you have learned about performing RAG with LLMs, let's brainstorm
    some everyday applications of RAG.
  </p>
  <p>
    <strong>Task: </strong>
    Identify a task that could be automated or improved with the help of RAG.
  </p>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_TASK.state]"
    placeholder="Task"
  />
  <p>
    <strong>Task: </strong>
    The database for this RAG system would be sourced from:
  </p>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_DATABASE.state]"
    placeholder="Database, e.g., websites, documents, books, etc."
  ></textarea>
</template>
