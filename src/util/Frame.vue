<script setup lang="ts">
import { BIconChevronLeft, BIconChevronRight } from "bootstrap-icons-vue";
import { store } from "../store";
import { ref } from "vue";

store.title = "Generative AI Module";
const props = defineProps(["steps", "ending"]);
// steps = total no. of steps, ending = true for ending congrats step
const step = ref(0);
</script>

<template>
  <div class="flex gap-12 w-full items-center justify-center">
    <!-- Back Button -->
    <button
      class="btn btn-circle btn-neutral w-16 h-16"
      @click="step--"
      :disabled="step === 0"
    >
      <BIconChevronLeft class="w-8 h-8" />
    </button>

    <div
      class="max-w-5xl w-full min-h-[38rem] px-16 py-8 rounded-3xl"
      style="box-shadow: 0px 0px 10px 5px #eee"
    >
      <!-- Steps -->
      <ul class="steps my-0 px-0 w-full">
        <li
          class="step"
          v-for="i in props.steps"
          :key="i - 1"
          :class="{ 'step-neutral': step >= i - 1 }"
          @click="step = i - 1"
          :data-content="i === props.steps && ending ? '🎉' : i"
        ></li>
      </ul>

      <!-- Main Content -->
      <slot :name="step"></slot>
    </div>

    <!-- Next/Submit Button -->
    <button
      class="btn btn-circle w-16 h-16 btn-neutral"
      @click="step++"
      :disabled="step === props.steps - 1"
    >
      <BIconChevronRight class="w-8 h-8" />
    </button>
  </div>
</template>
