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
  <h2>What are Word Embeddings?</h2>
  <p>
    When you think of the word "cat," how would you describe it? You may think
    of it being a mammal, it can move, has a tail, and so on. These are features
    that can help describe what a cat is. One way of creating word embeddings is
    by assigning numerical values to a set of features to show how closely
    related the word are to the features, for example:
  </p>
  <ul>
    <li>
      assign 1 to show that the word "cat" is associated with the feature (e.g.,
      has a tail)
    </li>
    <li>
      assign 0 to show that the word "cat" is not associated with the feature
      (e.g., has wheels)
    </li>
  </ul>
  <p>
    Using the 5 features below, we obtain the word embeddings for "cat" to be
    (0,1,1,0,1):
  </p>
  <table class="table table-sm">
    <tbody>
      <tr>
        <th></th>
        <th
          v-for="(feat, i) in Object.keys(feats)"
          :key="i"
          class="text-center"
        >
          <h3 class="my-0">
            {{ feats[feat as keyof typeof feats] }}
          </h3>
        </th>
      </tr>
      <tr>
        <td>
          <h3 class="my-0 text-center flex gap-4 items-center">
            <div class="text-3xl">😺</div>
            cat
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
