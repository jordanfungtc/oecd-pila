<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";

const { t, tm } = useI18n();
const feats = computed(() => tm("s3.embIntro.feats") as string[]);

const embs = {
  dog: {
    label: "🐶",
    wordKey: "s3.embTask.words.dog",
    states: [
      S3.EMB_DOG_BARK,
      S3.EMB_DOG_MOVE,
      S3.EMB_DOG_MAMMAL,
      S3.EMB_DOG_WHEEL,
      S3.EMB_DOG_TAIL,
    ],
  },
  car: {
    label: "🚗",
    wordKey: "s3.embTask.words.car",
    states: [
      S3.EMB_CAR_BARK,
      S3.EMB_CAR_MOVE,
      S3.EMB_CAR_MAMMAL,
      S3.EMB_CAR_WHEEL,
      S3.EMB_CAR_TAIL,
    ],
  },
};
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.embTask.title") }}</h2>

  <!-- Paragraphs -->
  <p>{{ t("s3.embTask.paragraph1") }}</p>
  <p>
    <strong>{{ t("common.taskLabel") }}</strong>
    {{ t("s3.embTask.taskInstruction") }}
  </p>

  <!-- Embeddings Table -->
  <table class="table table-sm my-0">
    <tbody>
      <!-- Features -->
      <tr>
        <th></th>
        <th v-for="(feat, i) in feats" :key="i">
          <h3 class="my-0 text-center">{{ feat }}</h3>
        </th>
      </tr>

      <!-- Cat Embedding -->
      <tr>
        <td>
          <h3 class="my-0 text-center flex gap-4 items-center">
            <div class="text-3xl">😺</div>
            {{ t("s3.embTask.words.cat") }}
          </h3>
        </td>
        <td><div class="text-center">0</div></td>
        <td><div class="text-center">1</div></td>
        <td><div class="text-center">1</div></td>
        <td><div class="text-center">0</div></td>
        <td><div class="text-center">1</div></td>
      </tr>

      <!-- Embedding Selection -->
      <tr v-for="(emb, word) in embs" :key="word">
        <td>
          <h3 class="my-0 text-center flex gap-4 items-center">
            <div class="text-3xl">{{ emb.label }}</div>
            {{ t(emb.wordKey) }}
          </h3>
        </td>
        <td v-for="(feat, i) in emb.states" :key="i">
          <SelectEmb :state="feat.state" :answer="feat.answer" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
