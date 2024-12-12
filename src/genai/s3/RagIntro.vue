<script setup lang="ts">
import { BIconPlayBtn } from "bootstrap-icons-vue";
import customerIcon from "/s3/customer.png";
import tutorIcon from "/s3/tutor.png";
import legalIcon from "/s3/legal.png";
import programmingIcon from "/s2/programming.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>Retrieval-Augmented Generation</h2>
      <p>
        In the last section, we learned that LLMs can answer a wide variety of
        questions. However, when you need an LLM to answer a personal or
        context-specific question, it might not have the knowledge required
        because it only knows what’s in its general training data.
      </p>
      <p>
        This is where Retrieval-Augmented Generation (RAG) comes in. RAG allows
        the LLM to pull in additional, specific information from a separate
        database to help answer questions more accurately. Some examples of RAG
        applications are provided on the right.
      </p>
      <p>
        <a
          href="https://www.youtube.com/watch?v=qppV3n3YlF8"
          target="_blank"
          class="no-underline flex gap-2 items-center text-primary mt-8"
        >
          <BIconPlayBtn /> IBM Technology: RAG Explained
        </a>
      </p>
    </div>
    <div class="w-1/2 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="customerIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Customer Service Chatbot</h4>
          <p class="text-sm my-0">
            Database: product details, shipping and payment information, company
            policies<br />
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="tutorIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Educational Tutoring</h4>
          <p class="text-sm my-0">
            Database: textbooks, study guides, lecture notes, past exam
            papers<br />
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="legalIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Legal Research Tool</h4>
          <p class="text-sm my-0">
            Database: statutes, case law, legal opinions, court documents<br />
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="programmingIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Programming Assistant</h4>
          <p class="text-sm my-0">
            Database: technical documentation, code snippets, error messages,
            tutorials<br />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
