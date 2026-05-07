<script setup lang="ts">
import { BIconDatabase } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S1 } from "../states";
import academicImage from "/s1/academic.png";
import academicIcon from "/s1/academic-icon.png";
import medicalImage from "/s1/medical.png";
import medicalIcon from "/s1/medical-icon.png";
import videoImage from "/s1/video.png";
import videoIcon from "/s1/video-icon.png";
import sentimentImage from "/s1/sentiment.png";
import sentimentIcon from "/s1/sentiment-icon.png";
import fraudImage from "/s1/fraud.png";
import fraudIcon from "/s1/fraud-icon.png";

const props = defineProps(["i"]);
const { t } = useI18n();

const apps = [
  {
    key: "academic",
    image: academicImage,
    icon: academicIcon,
    sourceUrl: "https://archive.ics.uci.edu/dataset/320/student+performance",
    in: S1.APP_ACADEMIC_IN,
    out: S1.APP_ACADEMIC_OUT,
  },
  {
    key: "medical",
    image: medicalImage,
    icon: medicalIcon,
    sourceUrl:
      "https://www.kaggle.com/competitions/rsna-miccai-brain-tumor-radiogenomic-classification",
    in: S1.APP_MEDICAL_IN,
    out: S1.APP_MEDICAL_OUT,
  },
  {
    key: "video",
    image: videoImage,
    icon: videoIcon,
    sourceUrl:
      "https://www.kaggle.com/datasets/grouplens/movielens-20m-dataset",
    in: S1.APP_VIDEO_IN,
    out: S1.APP_VIDEO_OUT,
  },
  {
    key: "sentiment",
    image: sentimentImage,
    icon: sentimentIcon,
    sourceUrl: "https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews",
    in: S1.APP_SENTIMENT_IN,
    out: S1.APP_SENTIMENT_OUT,
  },
  {
    key: "fraud",
    image: fraudImage,
    icon: fraudIcon,
    sourceUrl: "https://www.kaggle.com/c/ieee-fraud-detection",
    in: S1.APP_FRAUD_IN,
    out: S1.APP_FRAUD_OUT,
  },
];

const inputKeys = [
  "sentiment",
  "academic",
  "decoy1",
  "medical",
  "fraud",
  "video",
  "decoy2",
] as const;

const outputKeys = [
  "fraud",
  "sentiment",
  "video",
  "decoy2",
  "medical",
  "decoy1",
  "academic",
] as const;
</script>

<template>
  <div class="flex gap-4 items-center mt-8">
    <!-- App Icon -->
    <img :src="apps[props.i].icon" alt="App Icon" class="w-12 h-12 my-0" />

    <!-- App Label -->
    <h3 class="my-0">
      {{ t(`s1.ioTask.apps.${apps[props.i].key}.label`) }}
    </h3>
  </div>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.taskLabel") }} </strong>
    {{ t("s1.ioTask.taskInstruction") }}
  </p>

  <div class="flex flex-row gap-2 w-full items-center">
    <!-- Input Selection -->
    <select
      class="select select-bordered w-full"
      v-model="store.state[apps[props.i].in.state]"
      v-bind:class="{
        'select-success':
          store.state[apps[props.i].in.state] === apps[props.i].in.answer,
        'select-error':
          store.state[apps[props.i].in.state] &&
          store.state[apps[props.i].in.state] !== apps[props.i].in.answer,
      }"
    >
      <option :value="undefined" selected disabled>
        {{ t("s1.ioTask.inputPlaceholder") }}
      </option>
      <option v-for="input in inputKeys" :key="input" :value="input">
        {{ t(`s1.ioTask.inputs.${input}`) }}
      </option>
    </select>

    <!-- Arrow -->
    <span>→</span>

    <!-- Output Selection -->
    <select
      class="select select-bordered w-full"
      v-model="store.state[apps[props.i].out.state]"
      v-bind:class="{
        'select-success':
          store.state[apps[props.i].out.state] === apps[props.i].out.answer,
        'select-error':
          store.state[apps[props.i].out.state] &&
          store.state[apps[props.i].out.state] !== apps[props.i].out.answer,
      }"
    >
      <option :value="undefined" selected disabled>
        {{ t("s1.ioTask.outputPlaceholder") }}
      </option>
      <option v-for="output in outputKeys" :key="output" :value="output">
        {{ t(`s1.ioTask.outputs.${output}`) }}
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
    <img :src="apps[props.i].image" class="w-72 mt-4 mb-0" />

    <div>
      <!-- Text -->
      <p>{{ t(`s1.ioTask.apps.${apps[props.i].key}.description`) }}</p>

      <!-- Link -->
      <a
        :href="apps[props.i].sourceUrl"
        target="_blank"
        class="no-underline flex gap-2 items-center text-primary mt-8"
      >
        <BIconDatabase />
        {{ t(`s1.ioTask.apps.${apps[props.i].key}.sourceTitle`) }}
      </a>
    </div>
  </div>
</template>
