<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import { ref, onMounted, watch } from "vue";
import { BIconArrowClockwise } from "bootstrap-icons-vue";
import { useI18n } from "vue-i18n";
import { store } from "../store";
import { S1, S2, S3, S4 } from "./states";
import DbVertical from "../util/DbVertical.vue";
import DbHorizontal from "../util/DbHorizontal.vue";
import section1Icon from "/s1/s1-icon.png";
import section2Icon from "/s2/s2-icon.png";
import section3Icon from "/s3/s3-icon.png";
import section4Icon from "/s4/s4-icon.png";

store.titleKey = "main.genaiDashboard";

const users = ref();
const contents = ref();
const selectedUser = ref(0);
const states = ref();
const metadatas = ref();
const { t } = useI18n();

const getHandler = async () => {
  states.value = [];
  metadatas.value = [];
  for (let content of contents.value) {
    states.value.push(
      await Agent.state(content, users.value[selectedUser.value].auth.id),
    );
    metadatas.value.push(
      await Agent.metadata(content, users.value[selectedUser.value].auth.id),
    );
  }
};

onMounted(async () => {
  let urlParams = new URLSearchParams(window.location.search);
  users.value = await Promise.all(
    urlParams.getAll("user").map((id) => Agent.environment(id)),
  );
  contents.value = urlParams.getAll("content");
  getHandler();
});

watch(selectedUser, () => {
  getHandler();
});

/* SECTION 1 */

const appMatch = {
  "dashboard.s1.input": {
    "dashboard.s1.academic": S1.APP_ACADEMIC_IN,
    "dashboard.s1.medical": S1.APP_MEDICAL_IN,
    "dashboard.s1.video": S1.APP_VIDEO_IN,
    "dashboard.s1.sentiment": S1.APP_SENTIMENT_IN,
    "dashboard.s1.fraud": S1.APP_FRAUD_IN,
  },
  "dashboard.s1.output": {
    "dashboard.s1.academic": S1.APP_ACADEMIC_OUT,
    "dashboard.s1.medical": S1.APP_MEDICAL_OUT,
    "dashboard.s1.video": S1.APP_VIDEO_OUT,
    "dashboard.s1.sentiment": S1.APP_SENTIMENT_OUT,
    "dashboard.s1.fraud": S1.APP_FRAUD_OUT,
  },
};

const appBrainstorm = {
  "dashboard.s1.sector": S1.APP_BRAINSTORM_SECTOR,
  "dashboard.s1.problem": S1.APP_BRAINSTORM_PROBLEM,
  "dashboard.s1.input": S1.APP_BRAINSTORM_INPUT,
  "dashboard.s1.output": S1.APP_BRAINSTORM_OUTPUT,
};

/* SECTION 2 */

const llmSingle = {
  "": {
    "dashboard.s2.selectedPrompt": S2.LLM_PROMPT,
    "dashboard.s2.generatedSimple": S2.LLM_SIMPLE_GENERATED,
    "dashboard.s2.generatedRefined": S2.LLM_REFINED_GENERATED,
    "dashboard.s2.technique": S2.LLM_PROMPT_TECHNIQUE,
  },
};

const llmConv = {
  "": {
    "dashboard.s2.generated": S2.LLM_CONV_GENERATED,
    "dashboard.s2.factCheckIpoa": S2.LLM_FACT_IPOA,
    "dashboard.s2.factCheckNasa": S2.LLM_FACT_NASA,
    "dashboard.s2.factCheckEureo": S2.LLM_FACT_EUREO,
  },
};

const llmBrainstorm = {
  "dashboard.s2.task": S2.LLM_BRAINSTORM_TASK,
  "dashboard.s2.prompt": S2.LLM_BRAINSTORM_PROMPT,
};

/* SECTION 3 */

const embs = {
  "dashboard.s3.dog": {
    "dashboard.s3.bark": S3.EMB_DOG_BARK,
    "dashboard.s3.move": S3.EMB_DOG_MOVE,
    "dashboard.s3.mammal": S3.EMB_DOG_MAMMAL,
    "dashboard.s3.wheel": S3.EMB_DOG_WHEEL,
    "dashboard.s3.tail": S3.EMB_DOG_TAIL,
  },
  "dashboard.s3.car": {
    "dashboard.s3.bark": S3.EMB_CAR_BARK,
    "dashboard.s3.move": S3.EMB_CAR_MOVE,
    "dashboard.s3.mammal": S3.EMB_CAR_MAMMAL,
    "dashboard.s3.wheel": S3.EMB_CAR_WHEEL,
    "dashboard.s3.tail": S3.EMB_CAR_TAIL,
  },
};

const sim = {
  "": {
    "dashboard.s3.similarWords": S3.SIM_Q1,
    "dashboard.s3.lowerScore": S3.SIM_Q2,
  },
};

const analogy = {
  "dashboard.s3.king": {
    "dashboard.s3.male": S3.EMB_KING_MALE,
    "dashboard.s3.female": S3.EMB_KING_FEMALE,
    "dashboard.s3.ruler": S3.EMB_KING_RULER,
  },
};

const analogyBrainstorm = {
  "": {
    "dashboard.s3.base": S3.ANALOGY_BASE,
    "dashboard.s3.subtract": S3.ANALOGY_SUB,
    "dashboard.s3.add": S3.ANALOGY_ADD,
    "dashboard.s3.outputs": S3.ANALOGY_OUT,
  },
};

const rag = {
  "dashboard.s3.prompt": S3.RAG_PROMPT,
  "dashboard.s3.generated": S3.RAG_GENERATED,
  "dashboard.s3.task": S3.RAG_BRAINSTORM_TASK,
  "dashboard.s3.database": S3.RAG_BRAINSTORM_DATABASE,
};

/* SECTION 4 */

const biasEmb = {
  "": {
    "dashboard.s4.type": S4.BIAS_TYPE,
    "dashboard.s4.attributeWord": S4.BIAS_ATTRIBUTE,
    "dashboard.s4.target1Similarity": S4.BIAS_TARGET1_SIM,
    "dashboard.s4.target2Similarity": S4.BIAS_TARGET2_SIM,
  },
};

const biasLlm = {
  "dashboard.s4.explanation": S4.BIAS_LLM,
};

const regs = {
  "": {
    "dashboard.s4.jobRecruiting": S4.REG_RISK_JOB,
    "dashboard.s4.homeworkLlm": S4.REG_RISK_HOMEWORK,
    "dashboard.s4.fakeNews": S4.REG_RISK_FAKE,
    "dashboard.s4.judgeCases": S4.REG_RISK_JUDGE,
    "dashboard.s4.predictivePolicing": S4.REG_RISK_POLICE,
  },
};

const sustainability = {
  "dashboard.s4.longTerm": S4.SUSTAINABILITY_Q,
};

const caseStudy = {
  "dashboard.s4.case": S4.CASE_STORY,
  "dashboard.s4.pro1": S4.CASE_PRO_1,
  "dashboard.s4.pro2": S4.CASE_PRO_2,
  "dashboard.s4.pro3": S4.CASE_PRO_3,
  "dashboard.s4.con1": S4.CASE_CON_1,
  "dashboard.s4.con2": S4.CASE_CON_2,
  "dashboard.s4.con3": S4.CASE_CON_3,
  "dashboard.s4.ethical": S4.CASE_ETHICAL,
  "dashboard.s4.technical": S4.CASE_TECHNICAL,
  "dashboard.s4.cost": S4.CASE_COST,
  "dashboard.s4.explanation": S4.CASE_EXPLAIN,
};
</script>

<template>
  <div class="max-w-4xl w-full mx-auto">
    <div class="flex gap-2 items-center p-8 rounded-xl mb-8 bg-white shadow-md">
      <!-- Student Selection -->
      <h4 class="my-0">{{ t("dashboard.studentSelection") }}</h4>

      <!-- Selection Dropdown -->
      <select v-model="selectedUser" class="w-full select select-bordered">
        <option v-for="(user, index) in users" :key="index" :value="index">
          {{ user.auth.info.name }}
        </option>
      </select>

      <!-- Refresh Button -->
      <button @click="getHandler" class="btn btn-neutral">
        <BIconArrowClockwise class="w-5 h-5" />
        {{ t("dashboard.refresh") }}
      </button>
    </div>

    <!-- SECTION 1 -->
    <div class="flex gap-12 p-8 rounded-xl mb-8 bg-white shadow-md">
      <div class="w-1/5">
        <h2 class="mt-0">{{ t("dashboard.s1.label") }}</h2>
        <img :src="section1Icon" />
      </div>
      <div class="w-4/5 flex flex-col">
        <h4 class="mt-0">
          <div class="badge">1.3 - 1.7</div>
          {{ t("dashboard.s1.identifyingInputsOutputs") }}
        </h4>
        <DbHorizontal :states="states" :questions="appMatch" />
        <h4>
          <div class="badge">1.8 - 1.10</div>
          {{ t("dashboard.s1.designingAiSystem") }}
        </h4>
        <DbVertical :states="states" :questions="appBrainstorm" />
      </div>
    </div>

    <!-- SECTION 2 -->
    <div class="flex gap-12 p-8 rounded-xl mb-8 bg-white shadow-md">
      <div class="w-1/5">
        <h2 class="mt-0">{{ t("dashboard.s2.label") }}</h2>
        <img :src="section2Icon" />
      </div>
      <div class="w-4/5 flex flex-col">
        <h4 class="mt-0">
          <div class="badge">2.2 - 2.5</div>
          {{ t("dashboard.s2.promptEngineering") }}
        </h4>
        <DbHorizontal :states="states" :questions="llmSingle" />
        <h4>
          <div class="badge">2.6 - 2.7</div>
          {{ t("dashboard.s2.limitationsOfLlms") }}
        </h4>
        <DbHorizontal :states="states" :questions="llmConv" />
        <h4>
          <div class="badge">2.9</div>
          {{ t("dashboard.s2.llmsInEverydayLife") }}
        </h4>
        <DbVertical :states="states" :questions="llmBrainstorm" />
      </div>
    </div>

    <!-- SECTION 3 -->
    <div class="flex gap-12 p-8 rounded-xl mb-8 bg-white shadow-md">
      <div class="w-1/5">
        <h2 class="mt-0">{{ t("dashboard.s3.label") }}</h2>
        <img :src="section3Icon" />
      </div>
      <div class="w-4/5 flex flex-col">
        <h4 class="mt-0">
          <div class="badge">3.2 - 3.3</div>
          {{ t("dashboard.s3.creatingWordEmbeddings") }}
        </h4>
        <DbHorizontal :states="states" :questions="embs" />
        <h4>
          <div class="badge">3.4</div>
          {{ t("dashboard.s3.similarityScore") }}
        </h4>
        <DbHorizontal :states="states" :questions="sim" />
        <h4>
          <div class="badge">3.5</div>
          {{ t("dashboard.s3.wordAnalogy") }}
        </h4>
        <DbHorizontal :states="states" :questions="analogy" />
        <h4>
          <div class="badge">3.6</div>
          {{ t("dashboard.s3.wordAnalogyBrainstorm") }}
        </h4>
        <DbHorizontal :states="states" :questions="analogyBrainstorm" />
        <h4>
          <div class="badge">3.9 - 3.10</div>
          {{ t("dashboard.s3.rag") }}
        </h4>
        <DbVertical :states="states" :questions="rag" />
      </div>
    </div>

    <!-- SECTION 4 -->
    <div class="flex gap-12 p-8 rounded-xl mb-8 bg-white shadow-md">
      <div class="w-1/5">
        <h2 class="mt-0">{{ t("dashboard.s4.label") }}</h2>
        <img :src="section4Icon" />
      </div>
      <div class="w-4/5 flex flex-col">
        <h4 class="mt-0">
          <div class="badge">4.2</div>
          {{ t("dashboard.s4.biasInWordEmbeddings") }}
        </h4>
        <DbHorizontal :states="states" :questions="biasEmb" />
        <h4>
          <div class="badge">4.3</div>
          {{ t("dashboard.s4.biasInLlmResponses") }}
        </h4>
        <DbVertical :states="states" :questions="biasLlm" />
        <h4>
          <div class="badge">4.5</div>
          {{ t("dashboard.s4.identifyingAiRiskLevel") }}
        </h4>
        <DbHorizontal :states="states" :questions="regs" />
        <h4>
          <div class="badge">4.6 - 4.7</div>
          {{ t("dashboard.s4.sustainabilityOfAi") }}
        </h4>
        <DbVertical :states="states" :questions="sustainability" />
        <h4>
          <div class="badge">4.9 - 4.10</div>
          {{ t("dashboard.s4.caseStudy") }}
        </h4>
        <DbVertical :states="states" :questions="caseStudy" />
      </div>
    </div>

    <!-- Developer Utility -->
    <div class="collapse">
      <input type="checkbox" />
      <div class="collapse-title"></div>
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
