<script setup lang="ts">
import { BIconDatabase } from "bootstrap-icons-vue";
import { store } from "../../store";
import { S1 } from "../states";
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

const props = defineProps(["i"]);

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
</script>

<template>
  <!-- App Icon and Label -->
  <div class="flex gap-4 items-center mt-8">
    <img :src="apps[props.i].icon" alt="App Icon" class="w-12 h-12 my-0" />
    <h3 class="my-0">{{ apps[props.i].label }}</h3>
  </div>
  <p>
    <strong>Task: </strong>
    To use AI for the above application, can you guess what the inputs to the AI
    system would be and what the expected outputs are? Select the correct
    options from the dropdowns below, then read the explanation to learn more.
  </p>
  <div class="flex flex-row gap-2 w-full items-center">
    <!-- Input Select -->
    <select
      class="select select-bordered w-full bg-white"
      v-model="store.state[apps[props.i].in.state]"
      v-bind:class="{
        'select-success':
          store.state[apps[props.i].in.state] === apps[props.i].in.answer,
        'select-error':
          store.state[apps[props.i].in.state] &&
          store.state[apps[props.i].in.state] !== apps[props.i].in.answer,
      }"
    >
      <option :value="undefined" selected disabled>Input</option>
      <option v-for="input in Object.keys(inputs)" :key="input" :value="input">
        {{ inputs[input as keyof typeof inputs] }}
      </option>
    </select>
    <!-- Arrow -->
    <span>→</span>
    <!-- Output Select -->
    <select
      class="select select-bordered w-full bg-white"
      v-model="store.state[apps[props.i].out.state]"
      v-bind:class="{
        'select-success':
          store.state[apps[props.i].out.state] === apps[props.i].out.answer,
        'select-error':
          store.state[apps[props.i].out.state] &&
          store.state[apps[props.i].out.state] !== apps[props.i].out.answer,
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
      store.state[apps[props.i].in.state] === apps[props.i].in.answer &&
      store.state[apps[props.i].out.state] === apps[props.i].out.answer
    "
    class="flex gap-12 items-center mt-4"
  >
    <!-- Image -->
    <img
      :src="apps[props.i].image"
      alt="Application Example"
      class="w-72 mt-4 mb-0"
    />
    <div>
      <!-- Text -->
      <p>{{ apps[props.i].desc }}</p>
      <!-- Link -->
      <a
        :href="apps[props.i].sourceUrl"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconDatabase /> {{ apps[props.i].sourceTitle }}
      </a>
    </div>
  </div>
</template>
