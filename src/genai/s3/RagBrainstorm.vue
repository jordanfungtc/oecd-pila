<script setup lang="ts">
import { S3 } from "../states";
import { store } from "../../store";
</script>

<template>
  <h2>RAG in Everyday Life</h2>
  <p>
    <strong>Task: </strong>
    Now that you have seen how RAG works, can you think of ways you can use it
    to assist you in your everyday life? What would the database contain? Write
    your answers in the fields below.
  </p>
  <h4>I think RAG can be used for:</h4>
  <input
    class="input input-lg input-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_TASK.state]"
    placeholder="Task"
  />
  <h4>The database for this RAG system would be sourced from:</h4>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full"
    v-model="store.state[S3.RAG_BRAINSTORM_DATABASE.state]"
    placeholder="Database, e.g., websites, documents, books, etc."
  ></textarea>
</template>
