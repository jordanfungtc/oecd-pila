<script setup lang="ts">
import { store } from "../../store";
import { S1 } from "../states";

/* Brainstorm Sectors */
const sectors = {
  healthcare: "🏥 Healthcare",
  finance: "💰 Finance",
  education: "📚 Education",
  transportation: "🚗 Transportation",
  retail: "🛒 Retail",
  logistics: "🚚 Logistics",
  sports: "⚽ Sports",
  agriculture: "🌾 Agriculture",
  manufacturing: "🏭 Manufacturing",
  arts: "🎨 Arts and Culture",
  government: "🏛️ Government",
  energy: "⚡ Energy",
  legal: "⚖️ Legal",
  entertainment: "🎬 Entertainment",
  telecom: "📱 Telecommunications",
  hospitality: "🏨 Hospitality",
};
</script>

<template>
  <div>
    <h2>AI in Everyday Life</h2>
    <p>
      Now that you have learned about the applications of AI, let's brainstorm
      an AI solution to an everyday problem.
    </p>
    <p>
      <strong>Task: </strong>
      Choose one of the following sectors where AI could be beneficial, then
      proceed to the next step.
    </p>
  </div>
  <div class="grid grid-cols-4 gap-2">
    <div
      v-for="(sector, key) in sectors"
      :key="key"
      class="form-control px-2 border rounded-xl"
      :class="{
        'border-neutral': store.state[S1.APP_BRAINSTORM_SECTOR.state] === key,
      }"
    >
      <label class="label cursor-pointer">
        <span class="label-text">{{ sector }}</span>
        <input
          type="radio"
          name="radio-10"
          class="radio"
          :checked="store.state[S1.APP_BRAINSTORM_SECTOR.state] === key"
          @change="store.state[S1.APP_BRAINSTORM_SECTOR.state] = key"
        />
      </label>
    </div>
  </div>
</template>
