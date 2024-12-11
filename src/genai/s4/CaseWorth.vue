<script setup lang="ts">
import { S4 } from "../states";
import { store } from "../../store";

const sliders = {
  ethical: {
    label: "Ethical Risk",
    range: ["low", "medium", "high", "unacceptable"],
    state: S4.CASE_ETHICAL,
    tooltip:
      "Think about the possible ethical problems of using an AI solution for this issue, including privacy concerns, bias and fairness, safety and security, and environmental impact.",
  },
  technical: {
    label: "Technical Feasibility",
    range: ["easy", "difficult", "very difficult", "impossible"],
    state: S4.CASE_TECHNICAL,
    tooltip:
      "Think about how realistic it is to build and use the AI, including the complexity of the problem, data availability and quality, scalability, and invegration.",
  },
  cost: {
    label: "Cost Efficiency",
    range: ["low cost", "medium cost", "high cost", "unaffordable"],
    state: S4.CASE_COST,
    tooltip:
      "Think about the costs of building and running the AI, including initial development and setup costs, ongoing maintenance and support, training and operational costs, return on investment (ROI), and alternative solutions.",
  },
};
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>Case Study</h2>
      <p>
        <strong>Task: </strong>
        Based on the pros and cons you identified, decide if you think using AI
        for this purpose is worth it. Use the sliders to show your answer and
        write a brief explanation in the field below.
      </p>
      <p>
        Note that in real life, you would also need to think about other factors
        such as data protection, security, and regulations before making a
        decision.
      </p>
    </div>
    <div class="w-2/3 mt-12 flex flex-col gap-8">
      <!-- Slider -->
      <div class="flex" v-for="(slider, i) in sliders" :key="i">
        <div class="w-1/5">
          <h4 class="my-0">
            {{ slider.label }}
          </h4>
        </div>
        <div class="w-4/5 flex gap-4">
          <div class="w-full">
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              class="range range-xs"
              v-model="store.state[slider.state.state]"
            />
            <div class="flex w-full justify-between px-2 text-sm">
              <span v-for="(range, j) in slider.range" :key="j">
                {{ range }}
              </span>
            </div>
          </div>
          <div class="tooltip" :data-tip="slider.tooltip">
            <button class="btn btn-xs btn-circle">?</button>
          </div>
        </div>
      </div>
      <!-- Explanation -->
      <div>
        <h4>Explanation</h4>
        <textarea
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          v-model="store.state[S4.CASE_EXPLAIN.state]"
          placeholder="Explanation"
          rows="3"
        ></textarea>
      </div>
    </div>
  </div>
</template>
