<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../store";

const props = defineProps(["state", "answer"]);
const { t } = useI18n();
</script>

<template>
  <select
    class="select select-bordered w-full min-w-32 bg-white"
    v-model="store.state[props.state]"
    v-bind:class="{
      'select-success': store.state[props.state] == parseInt(props.answer),
      'select-error':
        store.state[props.state] != undefined &&
        store.state[props.state] !== parseInt(props.answer),
    }"
  >
    <option :value="undefined" disabled>-</option>
    <option :value="1">{{ t("common.trueLabel") }}</option>
    <option :value="0">{{ t("common.falseLabel") }}</option>
  </select>
</template>
