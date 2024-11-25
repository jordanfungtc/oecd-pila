<script setup lang="ts">
import DbAnswer from "./DbAnswer.vue";
const props = defineProps(["states", "questions"]);
</script>

<template>
  <table class="table table-sm w-full my-0">
    <tbody>
      <tr v-for="(question, key) in props.questions" :key="key">
        <th>{{ key }}</th>
        <td class="w-full">
          <DbAnswer :states="props.states" :question="question" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
