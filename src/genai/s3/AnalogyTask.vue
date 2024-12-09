<script setup lang="ts">
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";
</script>

<template>
  <h2>Word Analogy with Embeddings</h2>
  <p>
    Since embeddings represent the meaning of words as numbers, we can perform
    arithmetic operations on them to identify word analogies. By subtracting the
    embedding of "woman" from that of "queen", we isolate the meaning of a
    "ruler". Then, by adding the embedding of "man" to this result, we get the
    meaning of a "male ruler", or "king".
  </p>
  <p>
    <strong>Task:</strong>
    Create the embedding of "king" by completing the analogy below using the
    dropdowns.
  </p>
  <table class="table table-sm mt-0 mb-[-10px]">
    <thead>
      <th></th>
      <th>
        <h3 class="my-0 text-center flex gap-2 items-center">
          <div class="text-xl">👸</div>
          <div class="text-lg">queen</div>
        </h3>
      </th>
      <th><h2 class="my-0 text-center">–</h2></th>
      <th>
        <h3 class="my-0 text-center flex gap-2 items-center">
          <div class="text-xl">💁‍♀️</div>
          <div class="text-lg">woman</div>
        </h3>
      </th>
      <th><h2 class="my-0 text-center">+</h2></th>
      <th>
        <h3 class="my-0 text-center flex gap-2 items-center">
          <div class="text-xl">🙋‍♂️</div>
          <div class="text-lg">man</div>
        </h3>
      </th>
      <th><h2 class="my-0 text-center">=</h2></th>
      <th>
        <h3 class="my-0 text-center flex gap-2 items-center">
          <div class="text-xl">🤴</div>
          <div class="text-lg">king</div>
        </h3>
      </th>
    </thead>
    <tbody>
      <tr class="border-none">
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
      <tr class="border-none">
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
        <td><h3 class="my-0 text-center">ruler</h3></td>
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
