<script setup lang="ts">
import {
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
} from "bootstrap-icons-vue";
</script>

<template>
  <h2>RAG for Customer Service Chatbot</h2>
  <p>
    RAG is often used in customer service chatbots to provide accurate and
    relevant responses to customer queries while maintaining a conversational
    tone. Here are the steps involved in the RAG process:
  </p>
  <table class="my-0">
    <tbody>
      <tr>
        <td><BIcon1Circle class="w-5 h-5" /></td>
        <td><strong>Database</strong></td>
        <td>
          The company gathers information about their products, services and
          policies to create a database.
        </td>
      </tr>
      <tr>
        <td><BIcon2Circle class="w-5 h-5" /></td>
        <td><strong>Query</strong></td>
        <td>
          A customer asks a question related to the company, such as "Can I pay
          with a credit card?"
        </td>
      </tr>
      <tr>
        <td><BIcon3Circle class="w-5 h-5" /></td>
        <td><strong>Retrieve</strong></td>
        <td>
          The system searches through the database to find information relevant
          to the customer's question. This is done using techniques like
          embeddings and similarity scores between the query and database
          entries. In this example, the system identifies a document detailing
          the payment methods accepted by the company.
        </td>
      </tr>
      <tr>
        <td><BIcon4Circle class="w-5 h-5" /></td>
        <td><strong>Augment</strong></td>
        <td>
          The retrieved information about payment methods is combined with the
          customer's original question.
        </td>
      </tr>
      <tr>
        <td><BIcon5Circle class="w-5 h-5" /></td>
        <td><strong>Generate</strong></td>
        <td>
          Using the augmented prompt, the LLM generates an accurate and
          contextually relevant response for the customer. In this example, the
          system produces a response confirming that credit card payments are
          accepted.
        </td>
      </tr>
    </tbody>
  </table>
</template>
