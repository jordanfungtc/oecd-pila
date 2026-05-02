<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const selectedLocale = computed({
  get: () => locale.value,
  set: (value: string) => {
    locale.value = value;
    localStorage.setItem("app-locale", value);
  },
});
</script>

<template>
  <div class="fixed bottom-3 left-3 z-[9999]">
    <select v-model="selectedLocale" class="select select-bordered">
      <option value="en">en</option>
      <option value="th">th</option>
    </select>
  </div>
</template>
