<script setup lang="ts">
import { BIcon1Circle } from "bootstrap-icons-vue";
import { database } from "./ragExamples";
</script>

<template>
  <h2>Customer Service Chatbot</h2>
  <p>
    <strong>Task: </strong>
    Inspect the RAG database of a customer service chatbot for an online
    electronics store below. Then, use it to generate a response to a customer
    query in the next step.
  </p>
  <!-- Database Section -->
  <div class="flex gap-2 items-center mb-4">
    <BIcon1Circle class="w-5 h-5" />
    <h4 class="my-0">Database</h4>
    <div class="flex-grow"></div>
    <div
      class="tooltip tooltip-left"
      data-tip="Prepare the entries in the database that will be used for the RAG process"
    >
      <button class="btn btn-xs btn-circle">?</button>
    </div>
  </div>
  <input
    v-for="(data, index) in database"
    :key="index"
    :value="data"
    type="text"
    class="input input-sm textarea-bordered w-full leading-normal mb-1"
    rows="1"
    readonly
  />
</template>
