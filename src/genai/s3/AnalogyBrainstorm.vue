<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { S3 } from "../states";
import { store } from "../../store";
import { getWordAnalogy } from "../../util/embeddings";

const loading = ref(false);
const { t, tm } = useI18n();

const examples = computed(
  () => tm("s3.analogyBrainstorm.examples") as string[],
);

const analogyHandler = async () => {
  // Use embeddings model to find the analogy
  loading.value = true;
  try {
    delete store.state[S3.ANALOGY_OUT.state];
    store.state[S3.ANALOGY_OUT.state] = await getWordAnalogy(
      store.state[S3.ANALOGY_BASE.state],
      store.state[S3.ANALOGY_ADD.state],
      store.state[S3.ANALOGY_SUB.state],
    );
  } catch (error) {
    window.alert(error);
  }
  loading.value = false;
};
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.analogyBrainstorm.title") }}</h2>

  <!-- Paragraphs -->
  <p>{{ t("s3.analogyBrainstorm.paragraph1") }}</p>
  <p>
    <strong>{{ t("common.task") }}</strong>
    {{ t("s3.analogyBrainstorm.taskInstruction") }}
  </p>

  <!-- Examples -->
  <div class="flex flex-wrap gap-2">
    <span
      v-for="example in examples"
      :key="example"
      class="badge badge-ghost p-4"
    >
      {{ example }}
    </span>
  </div>

  <div class="flex flex-row gap-2 items-center my-4">
    <!-- Base Word -->
    <input
      type="text"
      class="input input-bordered w-full"
      :placeholder="t('s3.analogyBrainstorm.placeholders.base')"
      v-model="store.state[S3.ANALOGY_BASE.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />

    <!-- Subtract Word -->
    <b>–</b>
    <input
      type="text"
      class="input input-bordered w-full"
      :placeholder="t('s3.analogyBrainstorm.placeholders.subtract')"
      v-model="store.state[S3.ANALOGY_SUB.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />

    <!-- Add Word -->
    <b>+</b>
    <input
      type="text"
      class="input input-bordered w-full"
      :placeholder="t('s3.analogyBrainstorm.placeholders.add')"
      v-model="store.state[S3.ANALOGY_ADD.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />

    <!-- Find Button -->
    <b>=</b>
    <button
      class="btn"
      @click="analogyHandler"
      :disabled="
        loading ||
        !store.state[S3.ANALOGY_BASE.state] ||
        !store.state[S3.ANALOGY_SUB.state] ||
        !store.state[S3.ANALOGY_ADD.state]
      "
    >
      <span class="loading loading-spinner" v-if="loading"></span>
      <div v-else>{{ t("s3.analogyBrainstorm.findLabel") }}</div>
    </button>
  </div>

  <!-- Results -->
  <div
    v-if="
      Array.isArray(store.state[S3.ANALOGY_OUT.state]) &&
      store.state[S3.ANALOGY_OUT.state].length > 0
    "
  >
    <!-- Results Label -->
    <p>{{ t("s3.analogyBrainstorm.resultsLabel") }}</p>

    <!-- Results Words -->
    <span
      v-for="result in store.state[S3.ANALOGY_OUT.state]"
      :key="result.word"
      class="badge badge-neutral badge-lg mr-2 p-4 gap-2"
    >
      <b>{{ result.word }}</b>
      {{ result.distance.toFixed(3) }}
    </span>
  </div>
</template>
