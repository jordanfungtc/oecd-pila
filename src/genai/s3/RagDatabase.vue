<script setup lang="ts">
import {
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
} from "bootstrap-icons-vue";
import { database } from "./ragExamples";
</script>

<template>
  <h2>Customer Service Chatbot</h2>
  <p>
    RAG is often used in customer service chatbots to provide more accurate and
    relevant responses to user queries while maintaining a conversational tone.
  </p>
  <table class="table table-sm my-0">
    <tbody>
      <tr>
        <th><BIcon1Circle class="w-5 h-5" /></th>
        <th>Database</th>
        <td>
          Prepare a set of entries which contains information relevant to the
          context.
        </td>
      </tr>
      <tr>
        <th><BIcon2Circle class="w-5 h-5" /></th>
        <th>Query</th>
        <td>
          The user inputs a query prompt to ask for information within the
          context of the database.
        </td>
      </tr>
      <tr>
        <th><BIcon3Circle class="w-5 h-5" /></th>
        <th>Retrieve</th>
        <td>
          Obtain the embeddings and compute the similarity scores between the
          query and every entry in the database.
        </td>
      </tr>
      <tr>
        <th><BIcon4Circle class="w-5 h-5" /></th>
        <th>Augment</th>
        <td>
          Add the most relevant entries with the highest similarity scores to
          the prompt.
        </td>
      </tr>
      <tr>
        <th><BIcon5Circle class="w-5 h-5" /></th>
        <th>Generate</th>
        <td>
          The LLM generates a text response for the user based on the augmented
          prompt.
        </td>
      </tr>
    </tbody>
  </table>
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
