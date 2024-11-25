<script setup lang="ts">
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";
</script>

<template>
  <h2>Word Analogy</h2>
  <p>
    Intuitively, we know that “🤴 king” is to “👸 queen” in the same way “🙋‍♂️
    man” is to “💁‍♀️ woman,” as they are pairs of words that share a relationship:
    one is male, the other is female. This is known as a word analogy. Since
    embeddings represent the meaning of words as numbers, we can perform
    arithmetic operations on them to identify word analogies.
  </p>
  <p>
    <strong>Task:</strong>
    Let's create the embeddings for "🤴 king" in the following analogy.
  </p>
  <table class="table table-sm my-0 pb-0">
    <thead>
      <th></th>
      <th><h2 class="my-0 text-center">👸 queen</h2></th>
      <th><h2 class="my-0 text-center">–</h2></th>
      <th><h2 class="my-0 text-center">💁‍♀️ woman</h2></th>
      <th><h2 class="my-0 text-center">+</h2></th>
      <th><h2 class="my-0 text-center">🙋‍♂️ man</h2></th>
      <th><h2 class="my-0 text-center">=</h2></th>
      <th><h2 class="my-0 text-center">🤴 king</h2></th>
    </thead>
    <tbody>
      <tr>
        <td><h3 class="my-0 text-center">male</h3></td>
        <td class="text-center">0</td>
        <td class="text-center">–</td>
        <td class="text-center">0</td>
        <td class="text-center">+</td>
        <td class="text-center">1</td>
        <td class="text-center">=</td>
        <td>
          <SelectEmb
            :state="S3.EMB_KING_MALE.state"
            :answer="S3.EMB_KING_MALE.answer"
          />
        </td>
      </tr>
      <tr>
        <td><h3 class="my-0 text-center">female</h3></td>
        <td class="text-center">1</td>
        <td class="text-center">–</td>
        <td class="text-center">1</td>
        <td class="text-center">+</td>
        <td class="text-center">0</td>
        <td class="text-center">=</td>
        <td>
          <SelectEmb
            :state="S3.EMB_KING_FEMALE.state"
            :answer="S3.EMB_KING_FEMALE.answer"
          />
        </td>
      </tr>
      <tr>
        <td><h3 class="my-0 text-center">royal</h3></td>
        <td class="text-center">1</td>
        <td class="text-center">–</td>
        <td class="text-center">0</td>
        <td class="text-center">+</td>
        <td class="text-center">0</td>
        <td class="text-center">=</td>
        <td>
          <SelectEmb
            :state="S3.EMB_KING_ROYAL.state"
            :answer="S3.EMB_KING_ROYAL.answer"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
