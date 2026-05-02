<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<template>
  <div class="fixed bottom-3 left-3 z-[9999]">
    <select v-model="locale" class="select select-bordered select-sm">
      <option value="en">en</option>
      <option value="th">th</option>
    </select>
  </div>
</template>
