<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import { ref, onMounted, watch } from "vue";
import { BIconArrowClockwise } from "bootstrap-icons-vue";
import { S1, S2, S3, S4 } from "./states";
import { store } from "../store";
import DbAnswer from "../components/DbAnswer.vue";

store.title = "Generative AI Module Dashboard";

import section1Icon from "/s1/s1-icon.png";
import section2Icon from "/s2/s2-icon.png";
import section3Icon from "/s3/s3-icon.png";
import section4Icon from "/s4/s4-icon.png";

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
      await Agent.state(content, users.value[selectedUser.value])
    );
    metadatas.value.push(
      await Agent.metadata(content, users.value[selectedUser.value])
    );
  }
};

onMounted(async () => {
  let urlParams = new URLSearchParams(window.location.search);
  users.value = urlParams.getAll("user");
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
  Challenge: S1.APP_BRAINSTORM_CHALLENGE,
  Solution: S1.APP_BRAINSTORM_SOLUTION,
};

const llmSingle = {
  "Selected Prompt": S2.LLM_PROMPT,
  "Generated Simple": S2.LLM_SIMPLE_GENERATED,
  "Generated Refined": S2.LLM_REFINED_GENERATED,
  Technique: S2.LLM_PROMPT_TECHNIQUE,
};

const llmConv = {
  Generated: S2.LLM_CONV_GENERATED,
  "Fact Check IPOA": S2.LLM_FACT_IPOA,
  "Fact Check NASA": S2.LLM_FACT_NASA,
  "Fact Check EUREO": S2.LLM_FACT_EUREO,
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
  Male: S3.EMB_KING_MALE,
  Female: S3.EMB_KING_FEMALE,
  Royal: S3.EMB_KING_ROYAL,
};

const analogyBrainstorm = {
  Base: S3.ANALOGY_BASE,
  Subtract: S3.ANALOGY_SUB,
  Add: S3.ANALOGY_ADD,
  Ouputs: S3.ANALOGY_OUT,
};

const rag = {
  Prompt: S3.RAG_PROMPT,
  Generated: S3.RAG_GENERATED,
  Task: S3.RAG_BRAINSTORM_TASK,
  Database: S3.RAG_BRAINSTORM_DATABASE,
};

const biasEmb = {
  Type: S4.BIAS_TYPE,
  "Attribute Word": S4.BIAS_ATTRIBUTE,
  "Target 1 Similarity": S4.BIAS_TARGET1_SIM,
  "Target 2 Similarity": S4.BIAS_TARGET2_SIM,
};

const regs = {
  "Job Recruiting": S4.REG_RISK_JOB,
  "Homework LLM": S4.REG_RISK_HOMEWORK,
  "Fake News": S4.REG_RISK_FAKE,
  "Judge Cases": S4.REG_RISK_JUDGE,
  "Predictive Policing": S4.REG_RISK_POLICE,
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
          Student {{ user }}
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
        <!-- AI Application Matching -->
        <h4 class="mt-0">
          <div class="badge">1.2 - 1.6</div>
          AI Application Matching
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th></th>
              <th v-for="(_value, key) in appMatch.Input" :key="key">
                {{ key }}
              </th>
            </tr>
            <tr v-for="(row, r_i) in Object.keys(appMatch)" :key="r_i">
              <th>{{ row }}</th>
              <td
                v-for="(question, q_i) in appMatch[row as keyof typeof appMatch]"
                :key="q_i"
              >
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>
        <!-- AI Application Brainstorming -->
        <h4>
          <div class="badge">1.7 - 1.10</div>
          AI Application Brainstorming
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr v-for="(question, key) in appBrainstorm" :key="key">
              <th>{{ key }}</th>
              <td class="w-full">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 2</h2>
        <img :src="section2Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <!-- Prompt Engineering -->
        <h4 class="mt-0">
          <div class="badge">2.2 - 2.5</div>
          Prompt Engineering
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th v-for="(_value, key) in llmSingle" :key="key">{{ key }}</th>
            </tr>
            <tr>
              <td v-for="(question, key) in llmSingle" :key="key">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Conversational AI -->
        <h4>
          <div class="badge">2.6 - 2.7</div>
          Conversational AI
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th v-for="(_value, key) in llmConv" :key="key">{{ key }}</th>
            </tr>
            <tr>
              <td v-for="(question, key) in llmConv" :key="key">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- LLM Brainstorming -->
        <h4>
          <div class="badge">2.9</div>
          LLM Brainstorming
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr v-for="(question, key) in llmBrainstorm" :key="key">
              <th>{{ key }}</th>
              <td class="w-full">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 3</h2>
        <img :src="section3Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <!-- Word Embeddings -->
        <h4 class="mt-0">
          <div class="badge">3.2</div>
          Word Embeddings
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th></th>
              <th v-for="(_value, key) in embs.Dog" :key="key">
                {{ key }}
              </th>
            </tr>
            <tr v-for="(row, r_i) in Object.keys(embs)" :key="r_i">
              <th>{{ row }}</th>
              <td
                v-for="(question, q_i) in embs[row as keyof typeof embs]"
                :key="q_i"
              >
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Similarity Score -->
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

        <!-- Word Analogy -->
        <h4>
          <div class="badge">3.5</div>
          Word Analogy
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th></th>
              <th v-for="(_value, key) in analogy" :key="key">{{ key }}</th>
            </tr>
            <tr>
              <th>King</th>
              <td v-for="(question, key) in analogy" :key="key">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Word Analogy Brainstorming -->
        <h4>
          <div class="badge">3.6</div>
          Word Analogy Brainstorming
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th v-for="(_value, key) in analogyBrainstorm" :key="key">
                {{ key }}
              </th>
            </tr>
            <tr>
              <td v-for="(question, key) in analogyBrainstorm" :key="key">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Retrieval-Augmented Generation -->
        <h4>
          <div class="badge">3.9 - 3.10</div>
          Retrieval-Augmented Generation
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr v-for="(question, key) in rag" :key="key">
              <th>{{ key }}</th>
              <td class="w-full">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="flex gap-12">
      <div class="w-1/5">
        <h2>Section 4</h2>
        <img :src="section4Icon" />
      </div>
      <div class="w-4/5 flex flex-col p-4 border rounded-xl my-8">
        <!-- Bias in Word Embedding -->
        <h4 class="mt-0">
          <div class="badge">4.2</div>
          Bias in Word Embedding
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th v-for="(_value, key) in biasEmb" :key="key">{{ key }}</th>
            </tr>
            <tr>
              <td v-for="(question, key) in biasEmb" :key="key">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Bias in LLM Responses -->
        <h4>
          <div class="badge">4.3</div>
          Bias in LLM Responses
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th>Explanation</th>
              <td class="w-full">
                <DbAnswer :states="states" :question="S4.BIAS_LLM" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Regulation Risk Levels -->
        <h4>
          <div class="badge">4.5</div>
          Regulation Risk Levels
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr>
              <th v-for="(_value, key) in regs" :key="key">{{ key }}</th>
            </tr>
            <tr>
              <td v-for="(question, key) in regs" :key="key">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Sustainability of AI -->
        <h4>
          <div class="badge">4.6 - 4.7</div>
          Sustainability of AI
        </h4>
        <span>Interactive Exercise</span>

        <!-- Case Study -->
        <h4>
          <div class="badge">4.9 - 4.10</div>
          Case Study
        </h4>
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr v-for="(question, key) in caseStudy" :key="key">
              <th>{{ key }}</th>
              <td class="w-full">
                <DbAnswer :states="states" :question="question" />
              </td>
            </tr>
          </tbody>
        </table>
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
