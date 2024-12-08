<script setup lang="ts">
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";

const feats = [
  "Can bark",
  "Can move",
  "Is a mammal",
  "Has wheels",
  "Has a tail",
];

const embs = {
  dog: {
    label: "🐶 dog",
    states: [
      S3.EMB_DOG_BARK,
      S3.EMB_DOG_MOVE,
      S3.EMB_DOG_MAMMAL,
      S3.EMB_DOG_WHEEL,
      S3.EMB_DOG_TAIL,
    ],
  },
  car: {
    label: "🚗 car",
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
  <h2>Creating Word Embeddings</h2>
  <p>
    <strong>Task:</strong>
    Can you think of how language models might assign embeddings to the words
    "🐶 dog" and "🚗 car"?
  </p>
  <div class="flex justify-center">
    <table class="table table-sm">
      <tbody>
        <tr>
          <th></th>
          <th v-for="(feat, i) in Object.keys(feats)" :key="i">
            <h3 class="my-0 text-center">
              {{ feats[feat as keyof typeof feats] }}
            </h3>
          </th>
        </tr>
        <tr>
          <td><h3 class="my-0 text-center">😼 cat</h3></td>
          <td><div class="text-center">0</div></td>
          <td><div class="text-center">1</div></td>
          <td><div class="text-center">1</div></td>
          <td><div class="text-center">0</div></td>
          <td><div class="text-center">1</div></td>
        </tr>
        <tr v-for="(emb, word) in embs" :key="word">
          <td>
            <h3 class="my-0 text-center">{{ emb.label }}</h3>
          </td>
          <td v-for="(feat, i) in emb.states" :key="i">
            <SelectEmb :state="feat.state" :answer="feat.answer" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
