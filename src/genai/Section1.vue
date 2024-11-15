<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import { ref } from "vue";
import {
  BIconTrash,
  BIconChevronLeft,
  BIconChevronRight,
  BIconPlayBtn,
  BIconDatabase,
} from "bootstrap-icons-vue";
import { store } from "../store";
import { S1 } from "./states";

store.title = "Generative AI Module";

import sectionIcon from "/s1/s1-icon.png";
import academic from "/s1/academic.png";
import academicIcon from "/s1/academic-icon.png";
import medical from "/s1/medical.png";
import medicalIcon from "/s1/medical-icon.png";
import video from "/s1/video.png";
import videoIcon from "/s1/video-icon.png";
import sentiment from "/s1/sentiment.png";
import sentimentIcon from "/s1/sentiment-icon.png";
import fraud from "/s1/fraud.png";
import fraudIcon from "/s1/fraud-icon.png";

const step = ref(0);

const resetHandler = () => {
  step.value = 0;
  Object.keys(S1).forEach((key) => {
    delete store.state[S1[key as keyof typeof S1].state];
  });
};

const submitHandler = () => {
  // @ts-ignore
  Agent.close({ success: true });
};

/* Applications */
const apps = [
  {
    label: "Academic Performance",
    desc: "AI can analyze a student's study habits, past performance, and demographic information to predict their final grade. This helps teachers identify students who may need additional support and enhance their academic performance.",
    image: academic,
    icon: academicIcon,
    sourceTitle: "UCI ML Repository: Student Performance Dataset",
    sourceUrl: "https://archive.ics.uci.edu/dataset/320/student+performance",
    in: S1.APP_ACADEMIC_IN,
    out: S1.APP_ACADEMIC_OUT,
  },
  {
    label: "Medical Diagnosis",
    desc: "AI can analyze medical scan images to detect signs of diseases, such as cancer, fractures, or other abnormalities. This can assist doctors in making more accurate diagnoses and delivering timely treatments to patients.",
    image: medical,
    icon: medicalIcon,
    sourceTitle: "Kaggle: RSNA-MICCAI Brain Tumor Radiogenomic Classification",
    sourceUrl:
      "https://www.kaggle.com/competitions/rsna-miccai-brain-tumor-radiogenomic-classification",
    in: S1.APP_MEDICAL_IN,
    out: S1.APP_MEDICAL_OUT,
  },
  {
    label: "Video Recommendation",
    desc: "By analyzing a user's past interactions with videos, AI can recommend new content that the user is likely to enjoy. This is used on platforms like YouTube and Netflix to personalize the user experience and boost engagement.",
    image: video,
    icon: videoIcon,
    sourceTitle: "Kaggle: MovieLens 20M Dataset",
    sourceUrl:
      "https://www.kaggle.com/datasets/grouplens/movielens-20m-dataset",
    in: S1.APP_VIDEO_IN,
    out: S1.APP_VIDEO_OUT,
  },
  {
    label: "Customer Sentiment",
    desc: "AI can analyze customer reviews to determine whether the sentiment is positive or negative, helping businesses understand customer feedback and make improvements to their products or services.",
    image: sentiment,
    icon: sentimentIcon,
    sourceTitle: "Kaggle: Amazon Fine Food Reviews",
    sourceUrl: "https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews",
    in: S1.APP_SENTIMENT_IN,
    out: S1.APP_SENTIMENT_OUT,
  },
  {
    label: "Fraud Detection",
    desc: "Financial institutions use AI to analyze patterns in credit card transactions and detect fraudulent activity. By flagging suspicious transactions in real-time, AI helps prevent financial losses for both consumers and businesses.",
    image: fraud,
    icon: fraudIcon,
    sourceTitle: "Kaggle: IEEE-CIS Fraud Detection",
    sourceUrl: "https://www.kaggle.com/c/ieee-fraud-detection",
    in: S1.APP_FRAUD_IN,
    out: S1.APP_FRAUD_OUT,
  },
];

/* Input Options */
const inputs = {
  sentiment: "Product customer reviews",
  academic: "Study habits and past performance",
  decoy1: "Historical weather data",
  medical: "Medical scan images",
  fraud: "Credit card transactions",
  video: "Past likes on videos",
  decoy2: "Financial news content",
};

/* Output Options */
const outputs = {
  fraud: "Fraudulent activity",
  sentiment: "Positive or negative sentiment",
  video: "Recommended videos to watch",
  decoy2: "Stock price predictions",
  medical: "Diagnosed medical condition",
  decoy1: "Probability of rain",
  academic: "Student's final grade",
};

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
  <div class="flex gap-12 w-full items-center justify-center">
    <!-- Back Button -->
    <button
      class="btn btn-circle btn-neutral w-16 h-16"
      @click="step--"
      :disabled="step === 0"
    >
      <BIconChevronLeft class="w-8 h-8" />
    </button>

    <!-- Main Content -->
    <div
      class="max-w-5xl w-full min-h-[38rem] flex flex-col px-16 py-8 rounded-3xl"
      style="box-shadow: 0px 0px 10px 5px #eee"
    >
      <div class="flex flex-row gap-4 items-center">
        <!-- Steps -->
        <ul class="steps my-0 w-full">
          <li
            class="step"
            v-for="i in 10"
            :key="i - 1"
            :class="{ 'step-neutral': step >= i - 1 }"
            @click="step = i - 1"
          ></li>
        </ul>
        <!-- Reset Button -->
        <button
          class="btn btn-sm btn-error btn-outline flex gap-2 items-center"
          @click="resetHandler"
        >
          <BIconTrash class="w-4 h-4" />
          Reset
        </button>
      </div>

      <!-- Intro -->
      <div v-if="step === 0">
        <div class="flex gap-16">
          <img :src="sectionIcon" class="w-48 h-48 mt-12" />
          <div>
            <h2>What is AI?</h2>
            <p>
              Artificial Intelligence (AI) is a fascinating field of computer
              science that aims to create machines capable of performing tasks
              that typically require human intelligence. With machine learning
              (ML), we can build mathematical models using large amounts of
              data, which can then be used to make predictions or decisions
              based on new data.
            </p>
            <h4>In this section</h4>
            <ul>
              <li>
                Learn about the applications of AI and the inputs and outputs
                they require
              </li>
              <li>
                Identify a sector where AI could be beneficial and brainstorm a
                problem to solve
              </li>
              <li>
                Design an AI solution to the problem and consider potential
                challenges
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=reUZRyXxUs4"
              target="_blank"
              class="no-underline flex gap-2 items-center text-primary mt-8"
            >
              <BIconPlayBtn /> TED Talk: How AI Could Empower Any Business by
              Andrew Ng
            </a>
          </div>
        </div>
      </div>

      <!-- Applications -->
      <div v-if="step != 0 && step < 6">
        <!-- App Icon and Label -->
        <div class="flex gap-4 items-center mt-8">
          <img
            :src="apps[step - 1].icon"
            alt="App Icon"
            class="w-12 h-12 my-0"
          />
          <h3 class="my-0">{{ apps[step - 1].label }}</h3>
        </div>
        <p>
          <strong>Task: </strong>
          For this application, what are the inputs to the AI system and what
          outputs is it designed to predict?
        </p>
        <div class="flex flex-row gap-2 w-full items-center">
          <!-- Input Select -->
          <select
            class="select select-bordered w-full bg-white"
            v-model="store.state[apps[step - 1].in.state]"
            v-bind:class="{
              'select-success':
                store.state[apps[step - 1].in.state] ===
                apps[step - 1].in.answer,
              'select-error':
                store.state[apps[step - 1].in.state] &&
                store.state[apps[step - 1].in.state] !==
                  apps[step - 1].in.answer,
            }"
          >
            <option :value="undefined" selected disabled>Input</option>
            <option
              v-for="input in Object.keys(inputs)"
              :key="input"
              :value="input"
            >
              {{ inputs[input as keyof typeof inputs] }}
            </option>
          </select>

          <!-- Arrow -->
          <span>→</span>

          <!-- Output Select -->
          <select
            class="select select-bordered w-full bg-white"
            v-model="store.state[apps[step - 1].out.state]"
            v-bind:class="{
              'select-success':
                store.state[apps[step - 1].out.state] ===
                apps[step - 1].out.answer,
              'select-error':
                store.state[apps[step - 1].out.state] &&
                store.state[apps[step - 1].out.state] !==
                  apps[step - 1].out.answer,
            }"
          >
            <option :value="undefined" selected disabled>Output</option>
            <option
              v-for="output in Object.keys(outputs)"
              :key="output"
              :value="output"
            >
              {{ outputs[output as keyof typeof outputs] }}
            </option>
          </select>
        </div>

        <!-- Feedback -->
        <div
          v-if="
            store.state[apps[step - 1].in.state] === apps[step - 1].in.answer &&
            store.state[apps[step - 1].out.state] === apps[step - 1].out.answer
          "
          class="flex gap-12 items-center mt-8"
        >
          <!-- Image -->
          <img
            :src="apps[step - 1].image"
            alt="Application Example"
            class="w-72 mt-4 mb-0"
          />
          <div>
            <!-- Text -->
            <p>{{ apps[step - 1].desc }}</p>
            <!-- Link -->
            <a
              :href="apps[step - 1].sourceUrl"
              target="_blank"
              class="no-underline flex gap-2 items-center text-primary mt-8"
            >
              <BIconDatabase /> {{ apps[step - 1].sourceTitle }}
            </a>
          </div>
        </div>
      </div>

      <!-- Brainstorm Sector -->
      <div v-if="step === 6">
        <div>
          <h2>AI in Everyday Life</h2>
          <p>
            Now that you have learned about the applications of AI, let's
            brainstorm an AI solution to an everyday problem.
          </p>
          <p>
            <strong>Task: </strong>
            Choose one of the following sectors where AI could be beneficial,
            then proceed to the next step.
          </p>
        </div>
        <div class="grid grid-cols-4 gap-2">
          <div
            v-for="(sector, key) in sectors"
            :key="key"
            class="form-control px-2 border rounded-xl"
            :class="{
              'border-neutral':
                store.state[S1.APP_BRAINSTORM_SECTOR.state] === key,
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
      </div>

      <!-- Brainstorm Problem -->
      <div v-if="step === 7">
        <h2>Problem</h2>
        <div class="alert bg-white outline outline-1">
          <strong>Chosen Sector:</strong>
          {{
            store.state[S1.APP_BRAINSTORM_SECTOR.state]
              ? sectors[
                  store.state[
                    S1.APP_BRAINSTORM_SECTOR.state
                  ] as keyof typeof sectors
                ]
              : "None"
          }}
        </div>
        <p>
          <strong>Task: </strong>
          Identify a specific problem that can potentially be solved using an AI
          solution within the chosen sector that affects your daily life or the
          lives of others. Explain why this problem is significant and describe
          its impact.
        </p>
        <textarea
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          v-model="store.state[S1.APP_BRAINSTORM_PROBLEM.state]"
          placeholder="Problem"
          rows="3"
        ></textarea>
      </div>

      <!-- Brainstorm Solution -->
      <div v-if="step === 8">
        <h2>Solution</h2>
        <p>
          <strong>Task: </strong>
          Think of the input data your AI system would require, and the
          resulting output.
        </p>
        <h4>Input</h4>
        <input
          class="input input-lg input-bordered w-full"
          v-model="store.state[S1.APP_BRAINSTORM_INPUT.state]"
          placeholder="Input"
        />
        <!-- Output -->
        <h4>Output</h4>
        <input
          class="input input-lg input-bordered w-full"
          v-model="store.state[S1.APP_BRAINSTORM_OUTPUT.state]"
          placeholder="Output"
        />
      </div>

      <!-- Brainstorm Challenge -->
      <div v-if="step === 9">
        <h2>Potential Challenge</h2>
        <p>
          <strong>Task: </strong>
          What are potential challenges you may face in implementing this AI
          system to solve the issue?
        </p>
        <input
          class="input input-lg input-bordered w-full"
          v-model="store.state[S1.APP_BRAINSTORM_CHALLENGE.state]"
          placeholder="Challenge"
        />
        <p>
          <strong>Task: </strong>
          How would you address this challenge?
        </p>
        <input
          class="input input-lg input-bordered w-full"
          v-model="store.state[S1.APP_BRAINSTORM_SOLUTION.state]"
          placeholder="Solution"
        />
      </div>
    </div>

    <!-- Next/Submit Button -->
    <button
      class="btn btn-circle w-16 h-16 btn-neutral"
      @click="step != 9 ? step++ : submitHandler"
    >
      <BIconChevronRight class="w-8 h-8" />
    </button>
  </div>
</template>
