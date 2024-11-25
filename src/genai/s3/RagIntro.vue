<script setup lang="ts">
import {
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
  BIconPlayBtn,
} from "bootstrap-icons-vue";
</script>

<template>
  <h2>Retrieval-Augmented Generation</h2>
  <p>
    As discussed earlier, LLMs only possess generic knowledge from their
    training data. What if we need to ask questions in a specific personal or
    organizational context? LLMs most likely won’t have this specific
    information. To address this issue, we can use retrieval-augmented
    generation (RAG) to provide context-specific information to the LLM.
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
    <a
      href="https://www.youtube.com/watch?v=qppV3n3YlF8"
      target="_blank"
      class="no-underline flex gap-2 items-center text-primary mt-8"
    >
      <BIconPlayBtn /> IBM Technology: RAG Explained
    </a>
  </p>
</template>
