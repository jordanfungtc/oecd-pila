<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { S3 } from "../states";
import { store } from "../../store";
import { getWordAnalogy } from "../../util/embeddings";

const loading = ref(false);
const { t } = useI18n();

const analogyHandler = async () => {
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
  <h2>{{ t("s3.analogyBrainstorm.title") }}</h2>
  <p>{{ t("s3.analogyBrainstorm.paragraph1") }}</p>
  <p>
    <strong>{{ t("common.taskLabel") }}</strong>
    {{ t("s3.analogyBrainstorm.taskInstruction") }}
  </p>
  <div>
    <span class="badge badge-ghost mr-2 p-4">
      {{ t("s3.analogyBrainstorm.examples.example1") }}
    </span>
    <span class="badge badge-ghost mr-2 p-4">
      {{ t("s3.analogyBrainstorm.examples.example2") }}
    </span>
    <span class="badge badge-ghost mr-2 p-4">
      {{ t("s3.analogyBrainstorm.examples.example3") }}
    </span>
    <span class="badge badge-ghost mr-2 p-4">
      {{ t("s3.analogyBrainstorm.examples.example4") }}
    </span>
  </div>
  <div class="flex flex-row gap-2 items-center my-4">
    <input
      type="text"
      class="input input-bordered w-full"
      :placeholder="t('s3.analogyBrainstorm.placeholders.base')"
      v-model="store.state[S3.ANALOGY_BASE.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />
    <b>–</b>
    <input
      type="text"
      class="input input-bordered w-full"
      :placeholder="t('s3.analogyBrainstorm.placeholders.subtract')"
      v-model="store.state[S3.ANALOGY_SUB.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />
    <b>+</b>
    <input
      type="text"
      class="input input-bordered w-full"
      :placeholder="t('s3.analogyBrainstorm.placeholders.add')"
      v-model="store.state[S3.ANALOGY_ADD.state]"
      @change="store.state[S3.ANALOGY_OUT.state] = []"
    />
    <b>=</b>
    <button class="btn" @click="analogyHandler" :disabled="loading">
      <span class="loading loading-spinner" v-if="loading"></span>
      <div v-else>{{ t("s3.analogyBrainstorm.findLabel") }}</div>
    </button>
  </div>
  <div
    v-if="
      Array.isArray(store.state[S3.ANALOGY_OUT.state]) &&
      store.state[S3.ANALOGY_OUT.state].length > 0
    "
  >
    <p>{{ t("s3.analogyBrainstorm.resultsLabel") }}</p>
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
