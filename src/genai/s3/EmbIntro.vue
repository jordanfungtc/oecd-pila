<script setup lang="ts">
const feats = [
  "Can bark",
  "Can move",
  "Is a mammal",
  "Has wheels",
  "Has a tail",
];
</script>

<template>
  <h2>Creating Word Embeddings</h2>
  <p>
    When we think of the word "😺 cat," we can associate it with features such
    as "mammal," "can move," and "has a tail." To create a word embedding,
    language models can assign values to these features based on how closely
    they are associated with the word "😺 cat." For instance, we can use 1 and 0
    to indicate the presence or absence of a feature.
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
          <td><h3 class="my-0 text-center">😺 cat</h3></td>
          <td><div class="text-center">0</div></td>
          <td><div class="text-center">1</div></td>
          <td><div class="text-center">1</div></td>
          <td><div class="text-center">0</div></td>
          <td><div class="text-center">1</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
