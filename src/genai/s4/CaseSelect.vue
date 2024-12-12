<script setup lang="ts">
import { S4 } from "../states";
import { store } from "../../store";

const stories = {
  teacher: {
    label: "👨‍🏫 AI Teacher",
    text: `<p>You are the Minister of Education in your country. You are faced with significant staffing and budgetary concerns, and have been tasked with exploring innovative solutions to reduce costs while maintaining or improving the quality of education.</p>
    <p>A proposal has been put forward to replace human teachers with Large Language Models (LLMs) to deliver lessons to students. This AI-based system promises to provide personalized lessons and feedback, adapting to individual learning styles and paces.</p>
    <p>It is projected that by using existing LLM models trained on a primarily English-speaking dataset and building datacenters for inference, costs could be reduced by 70% compared to hiring human teachers.</p>`,
  },
  police: {
    label: "👮‍♀️ Predictive Policing",
    text: `<p>You are the Chief of Police in a major metropolitan city. You are responsible for ensuring public safety and is exploring the potential to implement a new AI system designed to analyze citizen data and predict the likelihood of future criminal behavior.</p>
    <p>The AI system has been trained on historical data, including age, gender, race, and socioeconomic status of people who have committed crimes in the past. The dataset and algorithm used are proprietary and not disclosed to the public.</p>
    <p>Individuals flagged as high-risk by the AI system are subjected to increased surveillance and frequent police check-ins, despite there being no concrete evidence or reasonable suspicion of any criminal behavior.</p>`,
  },
  university: {
    label: "🎓 University Admissions",
    text: `<p>You are the Dean of Admissions at a prestigious university. You are faced with a growing number of applications each year and the need for a more efficient admissions process.</p>
    <p>To address this, the university has implemented an AI system to screen applicants and automatically shortlist candidates for interviews. The AI system evaluates applications based on various criteria, including historical data on previously admitted students to identify patterns and key indicators of successful candidates.</p>
    <p>The university claims that the AI-driven process will reduce the workload of admissions officers, provide a more objective evaluation, and ensure that the most promising candidates are identified swiftly.</p>`,
  },
  medical: {
    label: "🏥 Medical Diagnosis",
    text: `<p>You are the Chief Medical Officer at a leading hospital specializing in cancer treatment. You are facing challenges with the increasing number of patients and the workload on your radiologists and oncologists.</p>
    <p>In response to these challenges, the hospital has decided to explore the implementation of an AI system to assist in the diagnosis of cancer from medical images. The AI system is designed to analyze images such as X-rays, CT scans, and MRIs to detect signs of cancer, potentially identifying tumors that human radiologists might miss.</p>
    <p>The hospital administration claims that the AI-driven process will reduce diagnostic time, increase accuracy, and allow doctors to focus more on patient care.</p>`,
  },
};
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>Case Study</h2>
      <p>
        <strong>Task: </strong>
        As you have seen, the use of AI comes with benefits as well as risks.
        You will now choose and read one of the following case studies, then
        move on to the next step to evaluate it.
      </p>
      <!-- Story Selection -->
      <div
        v-for="(story, key) in stories"
        :key="key"
        class="form-control px-2 border rounded-xl mb-2"
        :class="{
          'border-neutral': store.state[S4.CASE_STORY.state] === key,
        }"
      >
        <label class="label cursor-pointer">
          <span class="label-text">{{ story.label }}</span>
          <input
            type="radio"
            name="radio-10"
            class="radio"
            :checked="store.state[S4.CASE_STORY.state] === key"
            @change="store.state[S4.CASE_STORY.state] = key"
          />
        </label>
      </div>
    </div>
    <div
      class="w-2/3 p-4 border rounded-xl mt-8"
      v-if="store.state[S4.CASE_STORY.state]"
    >
      <h3 class="mt-0">
        {{
          stories[store.state[S4.CASE_STORY.state] as keyof typeof stories]
            .label
        }}
      </h3>
      <!-- Story Text -->
      <div
        v-if="store.state[S4.CASE_STORY.state]"
        v-html="
            stories[store.state[S4.CASE_STORY.state] as keyof typeof stories]
              .text
          "
      ></div>
    </div>
  </div>
</template>
