<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import {
  BIconTrash,
  BIconChevronLeft,
  BIconChevronRight,
  BIconPlayBtn,
  BIconArrowRightSquare,
  BIconFileEarmarkTextFill,
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
} from "bootstrap-icons-vue";
import { ref } from "vue";
import { store } from "../store";
import { getBias } from "./embeddings";
import SelectRisk from "../components/SelectRisk.vue";
import { S4 } from "./states";

store.title = "Generative AI Module";

import sectionIcon from "/s4/s4-icon.png";
import genderBiasIcon from "/s4/gender-bias.png";
import racialBiasIcon from "/s4/racial-bias.png";
import religiousBiasIcon from "/s4/religious-bias.png";
import oecdAiIcon from "/s4/oecd-ai-logo.jpg";
import aiActIcon from "/s4/ai-act-logo.png";
import powerIcon from "/s4/power.png";
import homeIcon from "/s4/home.png";
import carbonIcon from "/s4/carbon.png";
import treeIcon from "/s4/tree.png";
import googleIcon from "/s4/google.png";
import phoneIcon from "/s4/phone.png";
import caseProIcon from "/s4/case-pro.png";
import caseConIcon from "/s4/case-con.png";

const step = ref(0);

const resetHandler = () => {
  step.value = 0;
  Object.keys(S4).forEach((key) => {
    delete store.state[S4[key as keyof typeof S4].state];
  });
};

const submitHandler = () => {
  // @ts-ignore
  Agent.close({ success: true });
};

const biases = {
  gender: {
    label: "Gender Bias",
    icon: genderBiasIcon,
    target1word: "man",
    target2word: "woman",
    attributes: [
      "nurse",
      "caring",
      "mechanic",
      "assertive",
      "architect",
      "sensitive",
      "receptionist",
      "logical",
    ],
  },
  racial: {
    label: "Racial Bias",
    icon: racialBiasIcon,
    target1word: "black",
    target2word: "white",
    attributes: [
      "janitor",
      "lazy",
      "police",
      "hardworking",
      "violent",
      "criminal",
      "peaceful",
      "complacent",
    ],
  },
  religious: {
    label: "Religious Bias",
    icon: religiousBiasIcon,
    target1word: "muslim",
    target2word: "christian",
    attributes: [
      "terrorist",
      "charitable",
      "dangerous",
      "compassionate",
      "conservative",
      "cult",
      "peaceful",
    ],
  },
};

const loadingBias = ref(false);

const biasHandler = async () => {
  if (!store.state[S4.BIAS_TYPE.state]) {
    return window.alert("Please select a type of bias");
  }
  if (!store.state[S4.BIAS_ATTRIBUTE.state]) {
    return window.alert("Please enter an attribute word");
  }
  loadingBias.value = true;
  try {
    delete store.state[S4.BIAS_TARGET1_SIM.state];
    delete store.state[S4.BIAS_TARGET2_SIM.state];
    const biasScores = await getBias(
      store.state[S4.BIAS_ATTRIBUTE.state],
      biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases]
        .target1word,
      biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases].target2word
    );
    store.state[S4.BIAS_TARGET1_SIM.state] = biasScores[0];
    store.state[S4.BIAS_TARGET2_SIM.state] = biasScores[1];
  } catch (error) {
    window.alert(error);
  }
  loadingBias.value = false;
};

const regs = [
  {
    desc: "A company uses AI to screen resumes of job applicants and automatically shortlist candidates for job interviews.",
    recital: "57",
    state: S4.REG_RISK_JOB,
  },
  {
    desc: "A student uses LLMs for assistance in homework assignments and disclose the use of AI in the submission.",
    recital: "133",
    state: S4.REG_RISK_HOMEWORK,
  },
  {
    desc: "An organisation uses LLMs to generate fake news articles to manipulate groups of people into taking harmful actions.",
    recital: "29",
    state: S4.REG_RISK_FAKE,
  },
  {
    desc: "A judge uses LLMs for assistance in researching and interpreting the law and for applying it to the facts of a case.",
    recital: "61",
    state: S4.REG_RISK_JUDGE,
  },
  {
    desc: "A law enforcement agency uses AI to analyse the characteristics of citizens to predict future criminal behaviour.",
    recital: "42",
    state: S4.REG_RISK_POLICE,
  },
];

/* Sustainability of AI */

// Training Phase
const modelSize = ref(0);
const home = 2.7;
const tree = 0.02462;
const training = [
  { params: 7, power: 36, carbon: 14 },
  { params: 13, power: 59, carbon: 23 },
  { params: 33, power: 233, carbon: 90 },
  { params: 65, power: 449, carbon: 173 },
];

// Inference Phase
const usage = ref(1);
const query = 0.0029;
const google = query / 0.0003;
const phone = query / 0.01298;

/* Case Study */
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
            <h2>AI Ethics and Sustainability</h2>
            <p>
              AI technologies offer significant benefits, but they also pose
              important ethical and sustainability challenges. Identifying and
              addressing these challenges is crucial to ensuring that AI systems
              are fair, equitable, and inclusive for all users.
            </p>
            <h4>In this section</h4>
            <ul>
              <li>
                Investigate bias in word embeddings and large language model
                (LLM) responses
              </li>
              <li>
                Explore the regulation of AI systems under the EU Artificial
                Intelligence Act
              </li>
              <li>
                Assess the environmental impact of AI systems in the training
                and inference phases
              </li>
              <li>
                Evaluate a case study scenario in the context of AI ethics and
                sustainability
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=VqFqWIqOB1g"
              target="_blank"
              class="flex gap-2 items-center text-primary mt-8 no-underline"
            >
              <BIconPlayBtn /> UNESCO: Ethics of AI Challenges and Governance
            </a>
          </div>
        </div>
      </div>

      <!-- Biases -->
      <div v-if="step === 1">
        <div class="flex gap-12">
          <div class="w-1/2">
            <h2>Bias in Word Embeddings</h2>
            <p>
              As you now know, langauge models are trained with lots of text
              data and learn to find patterns in them. However, these data are
              created by humans who harbour many biases and prejudices.
            </p>
            <p>
              For example, if in the data the word “nurse” is associated more
              often with “she” and "architect" with “he,” the embeddings of
              certain jobs may have higher similarity scores with specific
              genders. But we know that anyone – both men and women – can do
              those jobs.
            </p>
            <p>
              <strong>Task: </strong>
              Select a type of bias and enter an attribute word that might be
              biased against one of the target words.
            </p>
          </div>
          <div class="w-1/2 mt-6 flex flex-col gap-4">
            <!-- Bias Type Selection -->
            <div class="p-4 border rounded-xl">
              <h4 class="mt-0 mb-2 flex gap-2 items-center">
                <BIcon1Circle class="w-5 h-5" />Choose a type of bias
              </h4>
              <div class="flex gap-2 items-center">
                <button
                  v-for="(bias, key) in biases"
                  :key="key"
                  class="btn"
                  @click="
                    () => {
                      store.state[S4.BIAS_TYPE.state] = key;
                      delete store.state[S4.BIAS_ATTRIBUTE.state];
                      delete store.state[S4.BIAS_TARGET1_SIM.state];
                      delete store.state[S4.BIAS_TARGET2_SIM.state];
                    }
                  "
                  :class="{
                    'btn-neutral': store.state[S4.BIAS_TYPE.state] === key,
                    'btn-outline': store.state[S4.BIAS_TYPE.state] !== key,
                  }"
                >
                  {{ bias.label }}
                </button>
              </div>
            </div>

            <!-- Attribute Word -->
            <div class="p-4 border rounded-xl">
              <h4 class="mt-0 mb-2 flex gap-2 items-center">
                <BIcon2Circle class="w-5 h-5" />Enter an attribute word
              </h4>
              <!-- Input -->
              <div class="flex gap-2 items-center">
                <input
                  type="text"
                  v-model="store.state[S4.BIAS_ATTRIBUTE.state]"
                  placeholder="Attribute word"
                  class="input input-bordered w-full"
                />
                <button
                  @click="() => biasHandler()"
                  class="btn"
                  :disabled="loadingBias"
                >
                  <span v-if="loadingBias" class="loading"></span>
                  <span v-else><BIconArrowRightSquare class="w-5 h-5" /></span>
                </button>
              </div>
              <!-- Examples -->
              <div v-if="store.state[S4.BIAS_TYPE.state]" class="mt-2">
                <span
                  v-for="attribute in biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases].attributes"
                  :key="attribute"
                  class="badge badge-ghost p-2 mr-2"
                >
                  {{ attribute }}
                </span>
              </div>
            </div>

            <!--  Similarity Scores Result -->
            <div class="p-4 border rounded-xl">
              <h4 class="my-0 flex gap-2 items-center">
                <BIcon3Circle class="w-5 h-5" /> Similarity scores
              </h4>
              <div class="flex gap-4 mt-2">
                <!-- Bias Icon -->
                <img
                  v-if="store.state[S4.BIAS_TYPE.state]"
                  :src="biases[store.state[S4.BIAS_TYPE.state] as keyof typeof biases].icon"
                  class="w-16 h-16 my-0"
                />
                <div class="w-full">
                  <!-- Target 1 -->
                  <div class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2">
                    <b>{{
                      store.state[S4.BIAS_TYPE.state]
                        ? biases[
                            store.state[
                              S4.BIAS_TYPE.state
                            ] as keyof typeof biases
                          ].target1word
                        : "--"
                    }}</b>
                    {{
                      store.state[S4.BIAS_TARGET1_SIM.state]?.toFixed(3) || "--"
                    }}
                  </div>
                  <!-- Target 2 -->
                  <div class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2">
                    <b>{{
                      store.state[S4.BIAS_TYPE.state]
                        ? biases[
                            store.state[
                              S4.BIAS_TYPE.state
                            ] as keyof typeof biases
                          ].target2word
                        : "--"
                    }}</b>
                    {{
                      store.state[S4.BIAS_TARGET2_SIM.state]?.toFixed(3) || "--"
                    }}
                  </div>
                  <!-- Result -->
                  <div v-if="store.state[S4.BIAS_TARGET1_SIM.state]">
                    More associated with:
                    <b>{{
                      store.state[S4.BIAS_TARGET1_SIM.state] >
                      store.state[S4.BIAS_TARGET2_SIM.state]
                        ? biases[
                            store.state[
                              S4.BIAS_TYPE.state
                            ] as keyof typeof biases
                          ].target1word
                        : biases[
                            store.state[
                              S4.BIAS_TYPE.state
                            ] as keyof typeof biases
                          ].target2word
                    }}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bias in LLM Responses -->
      <div v-if="step === 2">
        <div class="flex gap-12">
          <div class="w-1/3">
            <h2>Bias in LLM Responses</h2>
            <p>
              These biases can also manifest in the responses generated by LLMs,
              which may reflect and even amplify stereotypes people have.
            </p>
            <p>
              This can lead to unfair or inaccurate results, particularly
              targeting minority and disadvantaged groups in society.
            </p>
            <p class="text-xs my-8">
              Hyzyk et al. (2024) Types of Bias. In ChatGPT in STEM Teaching: An
              introduction to using LLM-based tools in Higher Ed.
              <a
                href="https://ecampusontario.pressbooks.pub/llmtoolsforstemteachinginhighered/chapter/types-of-bias/"
                target="_blank"
              >
                (Pressbooks)</a
              >.
            </p>
          </div>
          <div class="w-2/3">
            <div class="mt-8 mb-4 border rounded-xl p-4">
              <div class="chat chat-end">
                <div class="chat-header">User Prompt</div>
                <div class="chat-bubble bg-gray-100 text-neutral text-sm py-0">
                  <p>
                    The nurse yelled at the doctor because she was late. Who was
                    late?
                  </p>
                </div>
              </div>
              <div class="chat chat-start">
                <div class="chat-header">LLM Response</div>
                <div class="chat-bubble bg-blue-100 text-neutral text-sm py-0">
                  <p>
                    In the sentence, "The nurse yelled at the doctor because she
                    was late,", the word "she" refers to the nurse. So,
                    according to the sentence, the nurse was late.
                  </p>
                </div>
              </div>
            </div>
            <p>
              <strong>Task: </strong>
              Explain how the LLM response above is biased.
            </p>
            <textarea
              class="textarea textarea-bordered textarea-lg w-full leading-normal"
              v-model="store.state[S4.BIAS_LLM.state]"
              placeholder="Answer"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>

      <!-- Regulation -->
      <div v-if="step === 3">
        <h2>Regulation of AI</h2>
        <p>
          As AI technologies continue to advance, there is a growing need for
          regulation to ensure that the risks posed by AI systems are addressed
          appropriately. National governments and organisations such as the OECD
          and the European Union have published documents detailing safe,
          responsible AI use cases and identifying those with high or
          unacceptable risks.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <img :src="oecdAiIcon" class="h-16 w-auto mt-6" />
            <p>
              The OECD's values-based principles for AI aims to promote the use
              of AI that is innovative and trustworthy and that respects human
              rights and democratic values.
            </p>
            <a
              :href="`https://oecd.ai/en/ai-principles`"
              target="_blank"
              class="no-underline text-primary flex gap-2 items-center"
            >
              <BIconFileEarmarkTextFill />
              OECD AI Principles Overview
            </a>
          </div>
          <div>
            <img :src="aiActIcon" class="h-16 w-auto mt-6" />
            <p>
              The European Union Artificial Intelligence Act categorizes AI
              systems by their risk levels and imposes regulations to safeguard
              people's safety and fundamental rights.
            </p>
            <a
              href="https://artificialintelligenceact.eu/ai-act-explorer/"
              target="_blank"
              class="no-underline text-primary flex gap-2 items-center"
            >
              <BIconFileEarmarkTextFill />
              EU Artificial Intelligence Act Explorer
            </a>
          </div>
        </div>
      </div>

      <!-- Risk Levels -->
      <div v-if="step === 4">
        <h2>Identify the Risk Level of AI</h2>
        <p>
          <strong>Task: </strong>
          Go through the AI use cases below and determine the level of risk they
          pose under the EU AI act.
        </p>
        <!-- Use Case Table -->
        <table class="table table-sm w-full my-0">
          <tbody>
            <tr v-for="(reg, reg_i) in regs" :key="reg_i">
              <td class="min-w-32">
                <a
                  :href="`https://artificialintelligenceact.eu/recital/${reg.recital}`"
                  target="_blank"
                  class="text-primary flex gap-2 items-center no-underline"
                >
                  <BIconFileEarmarkTextFill />
                  Recital {{ reg.recital }}
                </a>
              </td>
              <td>
                {{ reg.desc }}
              </td>
              <td>
                <SelectRisk
                  :state="reg.state.state"
                  :answer="reg.state.answer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sustainability - Training -->
      <div v-if="step === 5">
        <div class="flex gap-12">
          <div class="w-1/3">
            <h2>Sustainability of AI</h2>
            <p>
              As AI grow in complexity and scale, they consume significant
              amounts of energy and computational resources.
            </p>
            <p>
              <strong>Task: </strong>
              Use the slider to examine the environmental impact of LLM models
              in the training phase.
            </p>
            <div class="alert">
              <span>
                <strong>Did you know?</strong>
                The largest Meta LLaMA 3 model has 405 billion parameters
                <a
                  href="https://arxiv.org/abs/2407.21783"
                  target="_blank"
                  class="text-sm"
                  >(arXiv)</a
                >.
              </span>
            </div>
          </div>
          <div class="w-2/3">
            <h3 class="mt-12">Training Phase</h3>
            <p>One-time cost to train the LLM model (Meta LLaMA)</p>

            <!-- Slider -->
            <div class="text-center">
              <strong>LLM Model Size (# parameters)</strong>
            </div>
            <input
              type="range"
              min="0"
              max="3"
              class="range"
              step="1"
              v-model="modelSize"
            />
            <div class="flex w-full justify-between px-2 text-sm mb-8">
              <span>7 bilion</span>
              <span>13 billion</span>
              <span>33 billion</span>
              <span>65 billion</span>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-2 gap-2">
              <div class="flex gap-4 items-center">
                <img :src="powerIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Power consumption</p>
                  <h3 class="my-0">{{ training[modelSize].power }} MWh</h3>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <img :src="homeIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Annual electricity use of</p>
                  <h3 class="my-0">
                    {{ (training[modelSize].power / home).toFixed(0) }} homes
                  </h3>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <img :src="carbonIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Carbon emission</p>
                  <h3 class="my-0">{{ training[modelSize].carbon }} tonnes</h3>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <img :src="treeIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Annual carbon absoprtion of</p>
                  <h3 class="my-0">
                    {{ (training[modelSize].carbon / tree).toFixed(0) }} trees
                  </h3>
                </div>
              </div>
            </div>

            <!-- Sources -->
            <p class="text-xs my-8">
              Touvron et al. (2023) LLaMA: Open and Efficient Foundation
              Language Models.
              <a href="https://arxiv.org/abs/2302.13971" target="_blank">
                (arXiv)</a
              >. Assumes 2.7MWh per medium-sized home
              <a
                href="https://www.ofgem.gov.uk/average-gas-and-electricity-usage"
                target="_blank"
              >
                (Ofgem)</a
              >
              and 24.62kgCO2 per tree annually
              <a
                href="https://www.fortomorrow.eu/en/blog/co2-tree"
                target="_blank"
              >
                (ForTomorrow)</a
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- Sustainability - Inference -->
      <div v-if="step === 6">
        <div class="flex gap-12">
          <div class="w-1/3">
            <h2>Sustainability of AI</h2>
            <p>
              <strong>Task: </strong>
              Try exploring the slider to see how LLMs impact the environment
              during the inference phase.
            </p>
            <p>
              Over time, does the total energy used for running these models
              (inference) end up being greater than the energy it took to train
              them in the first place?
            </p>
            <div class="alert">
              <span>
                <strong>Did you know?</strong>
                ChatGPT serves more than 200 million weekly active users
                <a
                  href="https://www.reuters.com/technology/artificial-intelligence/openai-says-chatgpts-weekly-users-have-grown-200-million-2024-08-29/"
                  target="_blank"
                  class="text-sm"
                  >(Reuters, Aug 2024)</a
                >.
              </span>
            </div>
          </div>
          <div class="w-2/3">
            <h3 class="mt-12">Inference Phase</h3>
            <p>Ongoing cost to use the LLM model (OpenAI ChatGPT)</p>

            <!-- Slider -->
            <div class="text-center">
              <strong>Number of LLM queries</strong>
            </div>
            <input
              type="range"
              min="1"
              max="200000"
              class="range"
              v-model="usage"
            />
            <div class="flex w-full justify-between px-2 text-sm mb-8">
              <span>1</span>
              <span>50 K</span>
              <span>100 K</span>
              <span>150 K</span>
              <span>200 K</span>
            </div>

            <!-- Statistics -->
            <div class="grid grid-cols-2 gap-2">
              <div class="flex gap-4 items-center">
                <img :src="powerIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Power consumption</p>
                  <h3 class="my-0">
                    {{ parseFloat((usage * query).toPrecision(2)) }} MWh
                  </h3>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <img :src="homeIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Annual electricity use of</p>
                  <h3 class="my-0">
                    {{ parseFloat(((usage * query) / home).toPrecision(2)) }}
                    homes
                  </h3>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <img :src="googleIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Searching on Google</p>
                  <h3 class="my-0">
                    {{ parseFloat((usage * google).toPrecision(2)) }} times
                  </h3>
                </div>
              </div>
              <div class="flex gap-4 items-center">
                <img :src="phoneIcon" class="w-12 h-auto my-2" />
                <div>
                  <p class="my-0">Charging a mobile phone</p>
                  <h3 class="my-0">
                    {{ parseFloat((usage * phone).toPrecision(2)) }} times
                  </h3>
                </div>
              </div>
            </div>

            <!-- Sources -->
            <p class="text-xs my-8">
              De Vries, A. (2023). The growing energy footprint of artificial
              intelligence.
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2542435123003653"
                target="_blank"
                >(ScienceDirect)</a
              >. Assumes ChatGPT 2.9Wh and Google search 0.3Wh per query, iPhone
              15 battery 12.98Wh.
            </p>
          </div>
        </div>
      </div>

      <!-- Case Study Story -->
      <div v-if="step === 7">
        <div class="flex gap-12">
          <div class="w-1/3">
            <h2>Case Study</h2>
            <p>
              <strong>Task: </strong>
              Choose and read one of the following case studies and move on to
              the next step to evaluate it.
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
                stories[
                  store.state[S4.CASE_STORY.state] as keyof typeof stories
                ].label
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
      </div>

      <!-- Case Study Pros/Cons -->
      <div v-if="step === 8">
        <h2>Case Study</h2>
        <p>
          <strong>Task: </strong>
          Identify the pros and cons of the use of AI in this case study.
          Consider potential benefits as well as the ethical and environmental
          risks while you list out the pros and cons.
        </p>
        <div class="grid grid-cols-2 gap-8">
          <!-- Pros -->
          <div>
            <div class="flex gap-4 items-center">
              <img :src="caseProIcon" class="w-8 h-8 my-4" />
              <h3 class="my-0">Pros</h3>
            </div>
            <div class="flex flex-col gap-4">
              <input
                v-for="(p, i) in [S4.CASE_PRO_1, S4.CASE_PRO_2, S4.CASE_PRO_3]"
                type="text"
                class="input input-bordered w-full"
                :placeholder="'Pro ' + (i + 1)"
                v-model="store.state[p.state]"
              />
            </div>
          </div>
          <!-- Cons -->
          <div>
            <div class="flex gap-4 items-center">
              <img :src="caseConIcon" class="w-8 h-8 my-4" />
              <h3 class="my-0">Cons</h3>
            </div>
            <div class="flex flex-col gap-4">
              <input
                v-for="(c, i) in [S4.CASE_CON_1, S4.CASE_CON_2, S4.CASE_CON_3]"
                type="text"
                class="input input-bordered w-full"
                :placeholder="'Con ' + (i + 1)"
                v-model="store.state[c.state]"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Case Study Worth -->
      <div v-if="step === 9">
        <div class="flex gap-12">
          <div class="w-1/3">
            <h2>Case Study</h2>
            <p>
              <strong>Task: </strong>
              Now, based on the pros and cons, do you think it is worthwhile to
              use AI for this purpose? Use the sliders to indicate your answer
              and explain your reasoning.
            </p>
            <p>
              Note that in the real world, you may need to consider many more
              variables before making this decision (data protection, security,
              legal considerations, and so on).
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
