<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t, tm } = useI18n();
const feats = computed(() => tm("s3.embIntro.feats") as string[]);
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.embIntro.title") }}</h2>

  <!-- Paragraphs -->
  <p>{{ t("s3.embIntro.paragraph1") }}</p>
  <ul>
    <li>{{ t("s3.embIntro.bullet1") }}</li>
    <li>{{ t("s3.embIntro.bullet2") }}</li>
  </ul>
  <p>{{ t("s3.embIntro.paragraph2") }}</p>

  <!-- Embeddings Table -->
  <table class="table table-sm">
    <tbody>
      <!-- Features -->
      <tr>
        <th></th>
        <th v-for="(feat, i) in feats" :key="i" class="text-center">
          <h3 class="my-0">{{ feat }}</h3>
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
    </tbody>
  </table>
</template>
