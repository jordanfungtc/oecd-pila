<script setup lang="ts">
import { ref } from "vue";
import { S3 } from "../states";
import { store } from "../../store";
import { getWordAnalogy } from "../../util/embeddings";

const loading = ref(false);

const analogyHandler = async () => {
  loading.value = true;
  try {
    delete store.state[S3.ANALOGY_OUT.state];
    store.state[S3.ANALOGY_OUT.state] = await getWordAnalogy(
      store.state[S3.ANALOGY_BASE.state],
      store.state[S3.ANALOGY_ADD.state],
      store.state[S3.ANALOGY_SUB.state]
    );
  } catch (error) {
    window.alert(error);
  }
  loading.value = false;
};
</script>

<template>
  <h2>Word Analogy</h2>
  <p>
    This property of word embeddings is crucial for many natural language
    processing (NLP) tasks, including for language models to understand the
    relationships between words and generate accurate outputs.
  </p>
  <p>
    <strong>Task:</strong>
    Can you think of other word analogies to explore? Choose one of the examples
    below or create your own analogy.
  </p>
  <div>
    <span class="badge badge-ghost mr-2 p-4">
      school – teacher + doctor = ?
    </span>
    <span class="badge badge-ghost mr-2 p-4"> summer – hot + cold = ? </span>
    <span class="badge badge-ghost mr-2 p-4"> eye – see + hear = ? </span>
    <span class="badge badge-ghost mr-2 p-4"> running – run + play = ? </span>
  </div>
  <div class="flex flex-row gap-2 items-center my-8">
    <input
      type="text"
      class="input input-bordered w-full"
      placeholder="Base word"
      v-model="store.state[S3.ANALOGY_BASE.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />
    <b>–</b>
    <input
      type="text"
      class="input input-bordered w-full"
      placeholder="Subtract word"
      v-model="store.state[S3.ANALOGY_SUB.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />
    <b>+</b>
    <input
      type="text"
      class="input input-bordered w-full"
      placeholder="Add word"
      v-model="store.state[S3.ANALOGY_ADD.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />
    <b>=</b>
    <button class="btn" @click="analogyHandler" :disabled="loading">
      <span class="loading loading-spinner" v-if="loading"></span>
      <div v-else>Find</div>
    </button>
  </div>
  <div
    v-if="
      Array.isArray(store.state[S3.ANALOGY_OUT.state]) &&
      store.state[S3.ANALOGY_OUT.state].length > 0
    "
  >
    <p>
      Here are the 5 closest words to the analogy, along with their similarity
      scores:
    </p>
    <span
      v-for="result in store.state[S3.ANALOGY_OUT.state]"
      :key="result.word"
      class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2"
    >
      <b>{{ result.word }}</b>
      {{ result.distance.toFixed(3) }}
    </span>
  </div>
</template>
