<script setup lang="ts">
import kingQueen from "/s3/king-queen.png";
</script>

<template>
  <h2>What is a Word Analogy?</h2>
  <p>
    You've learned that word embeddings represent the meanings of words as
    numbers and that similarity scores help measure how closely related two
    words are. But these tools do more than just compare words – they can also
    help computers understand relationships between words through word
    analogies.
  </p>
  <p>
    Consider the words "king" and "queen." A king is a male ruler, and a queen
    is a female ruler. Now, think about another pair: "man" and "woman." The
    relationship is similar: one is male, and the other is female. In other
    words, "king" is to "queen" as "man" is to "woman," or
    king:queen::man:woman. This is known as a word analogy.
  </p>
  <div class="flex justify-center">
    <img :src="kingQueen" class="w-1/2 my-4" />
  </div>
</template>
