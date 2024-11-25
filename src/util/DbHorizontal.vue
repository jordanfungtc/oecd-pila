<script setup lang="ts">
import DbAnswer from "./DbAnswer.vue";
const props = defineProps(["states", "questions"]);
</script>

<template>
  <table class="table table-sm w-full my-0">
    <tbody>
      <tr>
        <th></th>
        <th
          v-for="(_, key) in props.questions[Object.keys(props.questions)[0]]"
          :key="key"
        >
          {{ key }}
        </th>
      </tr>
      <tr v-for="(row, key) in props.questions" :key="key">
        <th>{{ key }}</th>
        <td v-for="(question, q_i) in row" :key="q_i">
          <DbAnswer :states="props.states" :question="question" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
