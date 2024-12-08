<script setup lang="ts">
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";
</script>

<template>
  <h2>Word Analogy</h2>
  <p>
    So far, you’ve learned how word embeddings represent the meaning of words as
    numbers and how similarity scores help measure how closely related two words
    are. But these tools do more than just assign similarity scores to compare
    words – they also help models understand relationships between them through
    word analogy.
  </p>
  <p>
    Think about the words “king” and “queen.” You know that a king is a male
    ruler, and a queen is a female ruler. Now, consider another pair: “man” and
    “woman.” The relationship is similar: one is male, and the other is female.
    In other words: king:queen::man:woman (or, “king is to queen as man is to
    woman”). AI models, like LLMs, use word analogy to figure out patterns like
    this. Even if the model hasn’t seen a specific pair of words before, it can
    recognise similar relationships based on patterns it has learnt. For
    example, if it knows the relationship between king and queen, it can apply
    the same logic to predict the relationship between man and woman.
  </p>
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
