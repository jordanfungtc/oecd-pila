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
  sports: "⚽ Sports",
  agriculture: "🌾 Agriculture",
  manufacturing: "🏭 Manufacturing",
  arts: "🎨 Arts & Culture",
  government: "🏛️ Government",
  environment: "🌱 Environment",
  legal: "⚖️ Legal",
  entertainment: "🎬 Entertainment",
  telecom: "📱 Telecom",
  hospitality: "🏨 Hospitality",
};
</script>

<template>
  <h2>Designing an AI System: Problem</h2>
  <p>
    <strong>Task: </strong>
    Select one of the sectors using the checkboxes below. Then, identify a
    specific problem within the chosen sector that you would like to solve using
    AI. Write a brief description of the problem in the field below.
  </p>
  <div class="grid grid-cols-5 gap-2">
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
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal mt-8"
    v-model="store.state[S1.APP_BRAINSTORM_PROBLEM.state]"
    placeholder="Describe the problem you want to solve using AI..."
    rows="3"
  ></textarea>
</template>
