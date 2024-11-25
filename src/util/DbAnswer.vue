<script setup lang="ts">
const props = defineProps(["states", "question"]);
</script>

<template>
  <div v-for="(state, state_i) in props.states" :key="state_i">
    <div v-if="state[props.question.state] != undefined" class="flex gap-2">
      <!-- Array Answer -->
      <div v-if="Array.isArray(state[props.question.state])">
        <div v-for="(item, i) in state[props.question.state]" :key="i">
          {{ item }}
        </div>
      </div>
      <!-- Correct Answer -->
      <div v-else-if="props.question.answer !== null">
        <div
          v-if="state[props.question.state] === props.question.answer"
          class="text-green-500"
        >
          ✓
        </div>
        <div v-else class="text-red-500">
          ✗ ({{ state[props.question.state] }})
        </div>
      </div>
      <!-- Open Answer -->
      <div v-else>
        {{ state[props.question.state] }}
      </div>
    </div>
  </div>
</template>
