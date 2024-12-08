<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import { ref, onMounted, watch } from "vue";
import { BIconArrowClockwise } from "bootstrap-icons-vue";
import { S1, S2, S3, S4 } from "./states";
import { store } from "../store";
import DbAnswer from "../util/DbAnswer.vue";
import DbVertical from "../util/DbVertical.vue";
import DbHorizontal from "../util/DbHorizontal.vue";
import section1Icon from "/s1/s1-icon.png";
import section2Icon from "/s2/s2-icon.png";
import section3Icon from "/s3/s3-icon.png";
import section4Icon from "/s4/s4-icon.png";

store.title = "Generative AI Module Dashboard";

const users = ref();
const contents = ref();
const selectedUser = ref(0);
const states = ref();
const metadatas = ref();

const getHandler = async () => {
  states.value = [];
  metadatas.value = [];
  for (let content of contents.value) {
    states.value.push(
      await Agent.state(content, users.value[selectedUser.value].auth.id)
    );
    metadatas.value.push(
      await Agent.metadata(content, users.value[selectedUser.value].auth.id)
    );
  }
};

onMounted(async () => {
  let urlParams = new URLSearchParams(window.location.search);
  users.value = await Promise.all(
    urlParams.getAll("user").map((id) => Agent.environment(id))
  );
  contents.value = urlParams.getAll("content");
  getHandler();
});

watch(selectedUser, () => {
  getHandler();
});

const appMatch = {
  Input: {
    Academic: S1.APP_ACADEMIC_IN,
    Medical: S1.APP_MEDICAL_IN,
    Video: S1.APP_VIDEO_IN,
    Sentiment: S1.APP_SENTIMENT_IN,
    Fraud: S1.APP_FRAUD_IN,
  },
  Output: {
    Academic: S1.APP_ACADEMIC_OUT,
    Medical: S1.APP_MEDICAL_OUT,
    Video: S1.APP_VIDEO_OUT,
    Sentiment: S1.APP_SENTIMENT_OUT,
    Fraud: S1.APP_FRAUD_OUT,
  },
};

const appBrainstorm = {
  Sector: S1.APP_BRAINSTORM_SECTOR,
  Problem: S1.APP_BRAINSTORM_PROBLEM,
  Input: S1.APP_BRAINSTORM_INPUT,
  Output: S1.APP_BRAINSTORM_OUTPUT,
};

const llmSingle = {
  "": {
    "Selected Prompt": S2.LLM_PROMPT,
    "Generated Simple": S2.LLM_SIMPLE_GENERATED,
    "Generated Refined": S2.LLM_REFINED_GENERATED,
    Technique: S2.LLM_PROMPT_TECHNIQUE,
  },
};

const llmConv = {
  "": {
    Generated: S2.LLM_CONV_GENERATED,
    "Fact Check IPOA": S2.LLM_FACT_IPOA,
    "Fact Check NASA": S2.LLM_FACT_NASA,
    "Fact Check EUREO": S2.LLM_FACT_EUREO,
  },
};

const llmBrainstorm = {
  Task: S2.LLM_BRAINSTORM_TASK,
  Prompt: S2.LLM_BRAINSTORM_PROMPT,
};

const embs = {
  Dog: {
    Bark: S3.EMB_DOG_BARK,
    Move: S3.EMB_DOG_MOVE,
    Mammal: S3.EMB_DOG_MAMMAL,
    Wheel: S3.EMB_DOG_WHEEL,
    Tail: S3.EMB_DOG_TAIL,
  },
  Car: {
    Bark: S3.EMB_CAR_BARK,
    Move: S3.EMB_CAR_MOVE,
    Mammal: S3.EMB_CAR_MAMMAL,
    Wheel: S3.EMB_CAR_WHEEL,
    Tail: S3.EMB_CAR_TAIL,
  },
};

const analogy = {
  "": {
    Male: S3.EMB_KING_MALE,
    Female: S3.EMB_KING_FEMALE,
    Royal: S3.EMB_KING_ROYAL,
  },
};

const analogyBrainstorm = {
  "": {
    Base: S3.ANALOGY_BASE,
    Subtract: S3.ANALOGY_SUB,
    Add: S3.ANALOGY_ADD,
    Ouputs: S3.ANALOGY_OUT,
  },
};

const rag = {
  Prompt: S3.RAG_PROMPT,
  Generated: S3.RAG_GENERATED,
  Task: S3.RAG_BRAINSTORM_TASK,
  Database: S3.RAG_BRAINSTORM_DATABASE,
};

const biasEmb = {
  "": {
    Type: S4.BIAS_TYPE,
    "Attribute Word": S4.BIAS_ATTRIBUTE,
    "Target 1 Similarity": S4.BIAS_TARGET1_SIM,
    "Target 2 Similarity": S4.BIAS_TARGET2_SIM,
  },
};

const biasLlm = {
  Explanation: S4.BIAS_LLM,
};

const regs = {
  "": {
    "Job Recruiting": S4.REG_RISK_JOB,
    "Homework LLM": S4.REG_RISK_HOMEWORK,
    "Fake News": S4.REG_RISK_FAKE,
    "Judge Cases": S4.REG_RISK_JUDGE,
    "Predictive Policing": S4.REG_RISK_POLICE,
  },
};

const caseStudy = {
  Case: S4.CASE_STORY,
  "Pro 1": S4.CASE_PRO_1,
  "Pro 2": S4.CASE_PRO_2,
  "Pro 3": S4.CASE_PRO_3,
  "Con 1": S4.CASE_CON_1,
  "Con 2": S4.CASE_CON_2,
  "Con 3": S4.CASE_CON_3,
  Ethical: S4.CASE_ETHICAL,
  Technical: S4.CASE_TECHNICAL,
  Cost: S4.CASE_COST,
  Explanation: S4.CASE_EXPLAIN,
};
</script>

<template>
  <div class="max-w-4xl w-full">
    <div class="flex gap-2 items-center">
      <!-- User Selection -->
      <select v-model="selectedUser" class="w-full select select-bordered">
        <option v-for="(user, index) in users" :key="index" :value="index">
          {{ user.auth.info.name }}
        </option>
      </select>
      <!-- Refresh Button -->
      <button @click="getHandler" class="btn">
        <BIconArrowClockwise class="w-5 h-5" />
        Refresh
      </button>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 1</h2>
        <img :src="section1Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <h4 class="mt-0">
          <div class="badge">1.3 - 1.7</div>
          Input-Output Matching
        </h4>
        <DbHorizontal :states="states" :questions="appMatch" />
        <h4>
          <div class="badge">1.8 - 1.10</div>
          Designing and AI System
        </h4>
        <DbVertical :states="states" :questions="appBrainstorm" />
      </div>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 2</h2>
        <img :src="section2Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <h4 class="mt-0">
          <div class="badge">2.2 - 2.5</div>
          Prompt Engineering
        </h4>
        <DbHorizontal :states="states" :questions="llmSingle" />
        <h4>
          <div class="badge">2.6 - 2.7</div>
          Conversational AI
        </h4>
        <DbHorizontal :states="states" :questions="llmConv" />
        <h4>
          <div class="badge">2.9</div>
          LLM Brainstorming
        </h4>
        <DbVertical :states="states" :questions="llmBrainstorm" />
      </div>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 3</h2>
        <img :src="section3Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <h4 class="mt-0">
          <div class="badge">3.2</div>
          Word Embeddings
        </h4>
        <DbHorizontal :states="states" :questions="embs" />
        <h4>
          <div class="badge">3.4</div>
          Similarity Score
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th>Cat/Car</th>
              <td class="w-full">
                <DbAnswer :states="states" :question="S3.SIM_CAT_CAR" />
              </td>
            </tr>
          </tbody>
        </table>
        <h4>
          <div class="badge">3.5</div>
          Word Analogy
        </h4>
        <DbHorizontal :states="states" :questions="analogy" />
        <h4>
          <div class="badge">3.6</div>
          Word Analogy Brainstorming
        </h4>
        <DbHorizontal :states="states" :questions="analogyBrainstorm" />
        <h4>
          <div class="badge">3.9 - 3.10</div>
          Retrieval-Augmented Generation
        </h4>
        <DbVertical :states="states" :questions="rag" />
      </div>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 4</h2>
        <img :src="section4Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <h4 class="mt-0">
          <div class="badge">4.2</div>
          Bias in Word Embeddings
        </h4>
        <DbHorizontal :states="states" :questions="biasEmb" />
        <h4>
          <div class="badge">4.3</div>
          Bias in LLM Responses
        </h4>
        <DbVertical :states="states" :questions="biasLlm" />
        <h4>
          <div class="badge">4.5</div>
          Regulation Risk Levels
        </h4>
        <DbHorizontal :states="states" :questions="regs" />
        <h4>
          <div class="badge">4.6 - 4.7</div>
          Sustainability of AI
        </h4>
        <span>Interactive Exercise</span>
        <h4>
          <div class="badge">4.9 - 4.10</div>
          Case Study
        </h4>
        <DbVertical :states="states" :questions="caseStudy" />
      </div>
    </div>

    <!-- Developer Utility -->
    <div class="collapse collapse-arrow border my-20">
      <input type="checkbox" />
      <div class="collapse-title">Developer Utility</div>
      <div class="collapse-content">
        <p>Users: {{ users }}</p>
        <p>Contents: {{ contents }}</p>

        <!-- Raw States -->
        <h3>States</h3>
        <p v-for="(state, index) in states" :key="index">
          {{ state }}
        </p>

        <!-- Raw Metadatas -->
        <h3>Metadatas</h3>
        <div v-for="(metadata, index) in metadatas" :key="index">
          <p>{{ metadata }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
