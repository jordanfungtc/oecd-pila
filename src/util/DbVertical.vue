<script setup lang="ts">
import DbAnswer from "./DbAnswer.vue";
import { useI18n } from "vue-i18n";

const props = defineProps(["states", "questions"]);
const { t } = useI18n();
</script>

<template>
  <table class="table table-sm w-full my-0">
    <tbody>
      <tr v-for="(question, key) in props.questions" :key="key">
        <th>{{ t(key) }}</th>
        <td class="w-full">
          <DbAnswer :states="props.states" :question="question" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
