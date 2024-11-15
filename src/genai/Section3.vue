<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import {
  BIconTrash,
  BIconChevronLeft,
  BIconChevronRight,
  BIcon1Circle,
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
  BIconArrowRightSquare,
  BIconPlayBtn,
  BIconCalculator,
} from "bootstrap-icons-vue";
import { ref } from "vue";
import { VueLatex } from "vatex";
import { store } from "../store";
import SelectEmb from "../components/SelectEmb.vue";
import { getWordAnalogy } from "./embeddings";
import { S3 } from "./states";

store.title = "Generative AI Module";

import sectionIcon from "/s3/s3-icon.png";

const step = ref(0);

const resetHandler = () => {
  step.value = 0;
  Object.keys(S3).forEach((key) => {
    delete store.state[S3[key as keyof typeof S3].state];
  });
};

const submitHandler = () => {
  // @ts-ignore
  Agent.close({ success: true });
};

const feats = [
  "Can bark",
  "Can move",
  "Is a mammal",
  "Has wheels",
  "Has a tail",
];

const embs = {
  dog: {
    label: "🐶 dog",
    states: [
      S3.EMB_DOG_BARK,
      S3.EMB_DOG_MOVE,
      S3.EMB_DOG_MAMMAL,
      S3.EMB_DOG_WHEEL,
      S3.EMB_DOG_TAIL,
    ],
  },
  car: {
    label: "🚗 car",
    states: [
      S3.EMB_CAR_BARK,
      S3.EMB_CAR_MOVE,
      S3.EMB_CAR_MAMMAL,
      S3.EMB_CAR_WHEEL,
      S3.EMB_CAR_TAIL,
    ],
  },
};

const loadingAnalogy = ref(false);

const analogyHandler = async () => {
  loadingAnalogy.value = true;
  try {
    delete store.state[S3.ANALOGY_OUT.state];
    store.state[S3.ANALOGY_OUT.state] = await getWordAnalogy(
      store.state[S3.ANALOGY_BASE.state],
      store.state[S3.ANALOGY_ADD.state],
      store.state[S3.ANALOGY_SUB.state]
    );
  } catch (error) {
    window.alert(error);
  }
  loadingAnalogy.value = false;
};

const database = [
  "Our online store sells electronic gadgets including smartphones, laptops, home appliances, and accessories.",
  "Our loyalty program allows you to earn points on every purchase, which can be redeemed at $1 per 100 points.",
  "We accept all major credit cards, PayPal, and Apple Pay. Your payment information is secure and encrypted.",
  "All orders are shipped within 1-2 business days and you will receive a tracking number via email.",
  "We offer a 30-day return policy. Please contact us and provide your order number and reason for return.",
  "Our customer service is available Monday to Friday 9am-5pm EST by phone at (555) 123-4567 or via live chat.",
];

const examples = {
  shipping: {
    label: "🚚 Shipping",
    query: "How many days will it take to ship my mobile phone order?",
    simScores: [0.309, 0.174, 0.049, 0.454, 0.329, 0.331],
    augPrompt:
      "<p><i>Context: All orders are shipped within 1-2 business days and you will receive a tracking number via email.</i></p><p><b>Query: How many days will it take to ship my mobile phone order?</b></p>",
    response:
      "<p>Your mobile phone order will be shipped within 1-2 business days.</p>",
  },
  discount: {
    label: "💸 Discount",
    query: "I have 2500 loyalty points, how much discount can I get?",
    simScores: [0.141, 0.533, 0.287, 0.247, 0.308, 0.235],
    augPrompt:
      "<p><i>Context: Our loyalty program allows you to earn points on every purchase, which can be redeemed at $1 per 100 points.</i></p><p><b>Query: I have 2500 loyalty points, how much discount can I get?</b></p>",
    response:
      "<p>You can redeem your 2500 loyalty points for a discount of $25, since the conversion rate is $1 per 100 points.</p>",
  },
  return: {
    label: "📦 Returns",
    query: "I would like to return a laptop I purchased 2 months ago.",
    simScores: [0.313, 0.223, 0.155, 0.286, 0.621, 0.282],
    augPrompt:
      "<p><i>Context: We offer a 30-day return policy. Please contact us and provide your order number and reason for return.</i></p><p><b>Query: I would like to return a laptop I purchased 2 months ago.</b></p>",
    response:
      "<p>Our return policy is for 30 days, so unfortunately, you are unable to return the laptop since it was purchased 2 months ago.</p>",
  },
};

const generating = ref(false);

const generateHandler = async () => {
  if (!store.state[S3.RAG_PROMPT.state]) {
    return window.alert("Please select a query example.");
  }
  generating.value = true;
  store.state[S3.RAG_GENERATED.state] = 0;
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 1), 500);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 2), 1000);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 3), 1500);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 4), 2000);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 5), 2500);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 6), 3000);
  setTimeout(() => (store.state[S3.RAG_GENERATED.state] = 7), 3500);
  setTimeout(() => {
    store.state[S3.RAG_GENERATED.state] = 8;
    generating.value = false;
  }, 5500);
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

      <!-- Word Embeddings Intro -->
      <div v-if="step === 0">
        <div class="flex gap-16">
          <img :src="sectionIcon" class="w-48 h-48 mt-12" />
          <div>
            <h2>Word Embeddings</h2>
            <p>
              To understand the underlying principles of how language models
              work, we need to explore how computers process and interpret human
              language. Instead of seeing words as plain text, embeddings turn
              them into numbers that correspond to certain features of the
              words. Embeddings can be used to represent the meaning of words,
              sentences, entire documents, or even images and videos.
            </p>
            <h4>In this section</h4>
            <ul>
              <li>
                Create the embeddings for words based on predefined features
              </li>
              <li>
                Calculate the similarity score between embeddings and explore
                word analogies
              </li>
              <li>
                Experience retrieval-augmented generation (RAG) and brainstorm
                its applications
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=wgfSDrqYMJ4"
              target="_blank"
              class="no-underline flex gap-2 items-center text-primary mt-8"
            >
              <BIconPlayBtn /> IBM Technology: What are Word Embeddings?
            </a>
          </div>
        </div>
      </div>

      <!-- Word Embeddings Task -->
      <div v-if="step === 1">
        <h2>Word Embeddings</h2>
        <p>
          When we think of the word "😼 cat," we can associate it with features
          such as "mammal," "can move," and "has a tail." To create a word
          embedding, language models can assign values to these features based
          on how closely they are associated with the word "😼 cat." For
          instance, we can use 1 and 0 to indicate the presence or absence of a
          feature.
        </p>
        <p>
          <strong>Task:</strong>
          Can you think of how language models might assign embeddings to the
          words "🐶 dog" and "🚗 car"?
        </p>
        <div class="flex justify-center">
          <table class="table table-sm my-0">
            <tbody>
              <tr>
                <th></th>
                <th v-for="(feat, i) in Object.keys(feats)" :key="i">
                  <h3 class="my-0 text-center">
                    {{ feats[feat as keyof typeof feats] }}
                  </h3>
                </th>
              </tr>
              <tr>
                <td><h3 class="my-0 text-center">😼 cat</h3></td>
                <td><div class="text-center">0</div></td>
                <td><div class="text-center">1</div></td>
                <td><div class="text-center">1</div></td>
                <td><div class="text-center">0</div></td>
                <td><div class="text-center">1</div></td>
              </tr>
              <tr v-for="(emb, word) in embs" :key="word">
                <td>
                  <h3 class="my-0 text-center">{{ emb.label }}</h3>
                </td>
                <td v-for="(feat, i) in emb.states" :key="i">
                  <SelectEmb :state="feat.state" :answer="feat.answer" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Similarity Score Intro -->
      <div v-if="step === 2">
        <h2>Similarity Score</h2>
        <p>
          As humans, natural language allows us to intuitively understand how
          similar two words are. But how does language models make sense of the
          similarity between two words? They can use something called a
          “similarity score.” This score ranges from -1 to 1, with higher scores
          indicating greater similarity in meaning between words.
        </p>
        <p>
          Let’s take a closer look at the math and calculate the similarity
          score between “😼 cat” (0,1,1,0,1) and “🐶 dog” (1,1,1,0,1).
        </p>
        <!-- Example Dot Product -->
        <div class="flex gap-4 items-center">
          <VueLatex
            class="flex-grow"
            expression="\text{Cat}\cdot\text{Dog}=0\times1+1\times1+1\times1+0\times0+1\times1=3"
            display-mode
          />
          <div
            class="tooltip"
            data-tip="Dot product: multiply each corresponding pair of numbers and adding them all together"
          >
            <button class="btn btn-xs btn-circle">?</button>
          </div>
        </div>
        <!-- Example Magnitudes -->
        <div class="flex gap-4 items-center my-0">
          <div class="flex-grow">
            <VueLatex
              expression="\Vert\text{Cat}\Vert=\sqrt{0^2+1^2+1^2+0^2+1^2}=1.732"
              display-mode
            />
            <VueLatex
              expression="\Vert\text{Dog}\Vert=\sqrt{1^2+1^2+1^2+0^2+1^2}=2"
              display-mode
            />
          </div>
          <div
            class="tooltip"
            data-tip="Magnitude: square each number, adding them all together, and taking the square root of the sum"
          >
            <button class="btn btn-xs btn-circle">?</button>
          </div>
        </div>
        <!-- Example Similarity -->
        <div class="flex gap-4 items-center">
          <VueLatex
            class="flex-grow"
            expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Dog}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Dog}\Vert}=\frac{3}{1.732\times2}=0.866"
            display-mode
          />
          <div
            class="tooltip"
            data-tip="Similarity score: divide the dot product by the product of the magnitudes"
          >
            <button class="btn btn-xs btn-circle">?</button>
          </div>
        </div>
      </div>

      <!-- Similarity Score Task -->
      <div v-if="step === 3">
        <h2>Similarity Score</h2>
        <p>
          <strong>Task:</strong>
          Calculate the similarity score between the word embeddings of "😼 cat"
          (0,1,1,0,1) and "🚗 car" (0,1,0,1,0). Which of the pairs of words are
          more related: cat and car, or cat and dog?
        </p>
        <!-- Task Dot Product -->
        <VueLatex
          expression="\text{Cat}\cdot\text{Car}=0\times0+1\times1+1\times0+0\times1+1\times0=1"
          display-mode
        />
        <!-- Task Magnitudes -->
        <div>
          <VueLatex
            expression="\Vert\text{Cat}\Vert=\sqrt{0^2+1^2+1^2+0^2+1^2}=1.732"
            display-mode
          />
          <VueLatex
            expression="\Vert\text{Car}\Vert=\sqrt{0^2+1^2+0^2+1^2+0^2}=1.414"
            display-mode
          />
        </div>
        <div class="flex gap-2 justify-center items-center">
          <!-- Task Similarity -->
          <VueLatex
            expression="\text{Similarity}=\frac{\text{Cat}\cdot\text{Car}}{\Vert\text{Cat}\Vert\cdot\Vert\text{Car}\Vert}=\frac{1}{1.732\times1.414}="
            display-mode
          />
          <!-- Answer Input -->
          <input
            type="number"
            class="input input-bordered w-32 my-0"
            placeholder="Answer"
            v-model="store.state[S3.SIM_CAT_CAR.state]"
            v-bind:class="{
              'input-success':
                store.state[S3.SIM_CAT_CAR.state] === S3.SIM_CAT_CAR.answer,
              'input-error':
                store.state[S3.SIM_CAT_CAR.state] != undefined &&
                store.state[S3.SIM_CAT_CAR.state] !== S3.SIM_CAT_CAR.answer,
            }"
          />
          <a
            href="https://www.omnicalculator.com/math/cosine-similarity"
            target="_blank"
            class="no-underline flex gap-2 items-center text-primary"
          >
            <BIconCalculator class="w-5 h-5" />
          </a>
        </div>
        <!-- Feedback Message -->
        <div
          class="alert mt-6 text-sm"
          v-if="store.state[S3.SIM_CAT_CAR.state] === S3.SIM_CAT_CAR.answer"
        >
          <span>✅</span>
          Well done! As expected, the similarity score between the words 'cat'
          and 'car' (0.408) is lower than that between 'cat' and 'dog' (0.866),
          as cars are less similar to cats than dogs are.
        </div>
        <div
          class="alert mt-6 text-sm"
          v-else-if="
            store.state[S3.SIM_CAT_CAR.state] != undefined &&
            store.state[S3.SIM_CAT_CAR.state] !== S3.SIM_CAT_CAR.answer
          "
        >
          <span>❌</span>
          Not quite. Remember to provide 3 decimal places in your answer.
        </div>
      </div>

      <!-- Word Analogy -->
      <div v-if="step === 4">
        <h2>Word Analogy</h2>
        <p>
          Intuitively, we know that “🤴 king” is to “👸 queen” in the same way
          “🙋‍♂️ man” is to “💁‍♀️ woman,” as they are pairs of words that share a
          relationship: one is male, the other is female. This is known as a
          word analogy. Since embeddings represent the meaning of words as
          numbers, we can perform arithmetic operations on them to identify word
          analogies.
        </p>
        <p>
          <strong>Task:</strong>
          Let's create the embeddings for "🤴 king" in the following analogy.
        </p>
        <table class="table table-sm my-0 pb-0">
          <thead>
            <th></th>
            <th><h2 class="my-0 text-center">👸 queen</h2></th>
            <th><h2 class="my-0 text-center">–</h2></th>
            <th><h2 class="my-0 text-center">💁‍♀️ woman</h2></th>
            <th><h2 class="my-0 text-center">+</h2></th>
            <th><h2 class="my-0 text-center">🙋‍♂️ man</h2></th>
            <th><h2 class="my-0 text-center">=</h2></th>
            <th><h2 class="my-0 text-center">🤴 king</h2></th>
          </thead>
          <tbody>
            <tr>
              <td><h3 class="my-0 text-center">male</h3></td>
              <td class="text-center">0</td>
              <td class="text-center">–</td>
              <td class="text-center">0</td>
              <td class="text-center">+</td>
              <td class="text-center">1</td>
              <td class="text-center">=</td>
              <td>
                <SelectEmb
                  :state="S3.EMB_KING_MALE.state"
                  :answer="S3.EMB_KING_MALE.answer"
                />
              </td>
            </tr>
            <tr>
              <td><h3 class="my-0 text-center">female</h3></td>
              <td class="text-center">1</td>
              <td class="text-center">–</td>
              <td class="text-center">1</td>
              <td class="text-center">+</td>
              <td class="text-center">0</td>
              <td class="text-center">=</td>
              <td>
                <SelectEmb
                  :state="S3.EMB_KING_FEMALE.state"
                  :answer="S3.EMB_KING_FEMALE.answer"
                />
              </td>
            </tr>
            <tr>
              <td><h3 class="my-0 text-center">royal</h3></td>
              <td class="text-center">1</td>
              <td class="text-center">–</td>
              <td class="text-center">0</td>
              <td class="text-center">+</td>
              <td class="text-center">0</td>
              <td class="text-center">=</td>
              <td>
                <SelectEmb
                  :state="S3.EMB_KING_ROYAL.state"
                  :answer="S3.EMB_KING_ROYAL.answer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Word Analogy Brainstorm -->
      <div v-if="step === 5">
        <h2>Word Analogy</h2>
        <p>
          This property of word embeddings is crucial for many natural language
          processing (NLP) tasks, including for language models to understand
          the relationships between words and generate accurate outputs.
        </p>
        <p>
          <strong>Task:</strong>
          Can you think of other word analogies to explore? Choose one of the
          examples below or create your own analogy.
        </p>
        <p>
          <span class="badge badge-ghost mr-2 p-4 mb-2">
            school – teacher + doctor = ?
          </span>
          <span class="badge badge-ghost mr-2 p-4 mb-2">
            summer – hot + cold = ?
          </span>
          <span class="badge badge-ghost mr-2 p-4 mb-2">
            eye – see + hear = ?
          </span>
          <span class="badge badge-ghost mr-2 p-4 mb-2">
            running – run + play = ?
          </span>
        </p>
        <div class="flex flex-row gap-2 items-center my-8">
          <input
            type="text"
            class="input input-bordered w-full"
            placeholder="Base word"
            v-model="store.state[S3.ANALOGY_BASE.state]"
            @change="store.state[S3.ANALOGY_OUT.state] = []"
          />
          <b>–</b>
          <input
            type="text"
            class="input input-bordered w-full"
            placeholder="Subtract word"
            v-model="store.state[S3.ANALOGY_SUB.state]"
            @change="store.state[S3.ANALOGY_OUT.state] = []"
          />
          <b>+</b>
          <input
            type="text"
            class="input input-bordered w-full"
            placeholder="Add word"
            v-model="store.state[S3.ANALOGY_ADD.state]"
            @change="store.state[S3.ANALOGY_OUT.state] = []"
          />
          <b>=</b>
          <button
            class="btn"
            @click="analogyHandler"
            :disabled="loadingAnalogy"
          >
            <span class="loading loading-spinner" v-if="loadingAnalogy"></span>
            <div v-else>Find</div>
          </button>
        </div>
        <div
          v-if="
            Array.isArray(store.state[S3.ANALOGY_OUT.state]) &&
            store.state[S3.ANALOGY_OUT.state].length > 0
          "
          class="mt-4"
        >
          <p>
            Here are the 5 closest words to the analogy, along with their
            similarity scores:
          </p>
          <span
            v-for="result in store.state[S3.ANALOGY_OUT.state]"
            :key="result.word"
            class="badge badge-neutral badge-lg mr-2 p-4 mb-2 gap-2"
          >
            <b>{{ result.word }}</b>
            {{ result.distance.toFixed(3) }}
          </span>
        </div>
      </div>

      <!-- RAG Intro -->
      <div v-if="step === 6">
        <h2>Retrieval-Augmented Generation</h2>
        <p>
          As discussed earlier, LLMs only possess generic knowledge from their
          training data. What if we need to ask questions in a specific personal
          or organizational context? LLMs most likely won’t have this specific
          information. To address this issue, we can use retrieval-augmented
          generation (RAG) to provide context-specific information to the LLM.
        </p>
        <table class="table table-sm my-0">
          <tbody>
            <tr>
              <th><BIcon1Circle class="w-5 h-5" /></th>
              <th>Database</th>
              <td>
                Prepare a set of entries which contains information relevant to
                the context.
              </td>
            </tr>
            <tr>
              <th><BIcon2Circle class="w-5 h-5" /></th>
              <th>Query</th>
              <td>
                The user inputs a query prompt to ask for information within the
                context of the database.
              </td>
            </tr>
            <tr>
              <th><BIcon3Circle class="w-5 h-5" /></th>
              <th>Retrieve</th>
              <td>
                Obtain the embeddings and compute the similarity scores between
                the query and every entry in the database.
              </td>
            </tr>
            <tr>
              <th><BIcon4Circle class="w-5 h-5" /></th>
              <th>Augment</th>
              <td>
                Add the most relevant entries with the highest similarity scores
                to the prompt.
              </td>
            </tr>
            <tr>
              <th><BIcon5Circle class="w-5 h-5" /></th>
              <th>Generate</th>
              <td>
                The LLM generates a text response for the user based on the
                augmented prompt.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <a
            href="https://www.youtube.com/watch?v=qppV3n3YlF8"
            target="_blank"
            class="no-underline flex gap-2 items-center text-primary mt-8"
          >
            <BIconPlayBtn /> IBM Technology: RAG Explained
          </a>
        </p>
      </div>

      <!-- Customer Service Chatbot: Database -->
      <div v-if="step === 7">
        <h2>Customer Service Chatbot</h2>
        <p>
          <strong>Task: </strong>
          Inspect the RAG database of a customer service chatbot for an online
          electronics store below. Then, use it to generate a response to a
          customer query in the next step.
        </p>
        <!-- Database Section -->
        <div class="flex gap-2 items-center mb-4">
          <BIcon1Circle class="w-5 h-5" />
          <h4 class="my-0">Database</h4>
          <div class="flex-grow"></div>
          <div
            class="tooltip tooltip-left"
            data-tip="Prepare the entries in the database that will be used for the RAG process"
          >
            <button class="btn btn-xs btn-circle">?</button>
          </div>
        </div>
        <input
          v-for="(data, index) in database"
          :key="index"
          :value="data"
          type="text"
          class="input input-sm textarea-bordered w-full leading-normal mb-1"
          rows="1"
          readonly
        />
      </div>

      <!-- Customer Service Chatbot: RAG -->
      <div v-if="step === 8">
        <h2>Customer Service Chatbot</h2>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <!-- Query Section -->
            <div class="flex gap-2 items-center mb-4">
              <BIcon2Circle class="w-5 h-5" />
              <h4 class="my-0">Query</h4>
              <div class="flex-grow"></div>
              <div
                class="tooltip tooltip-left"
                data-tip="Select a query and start the RAG process using the database"
              >
                <button class="btn btn-xs btn-circle">?</button>
              </div>
            </div>
            <div class="mt-0 mb-2 grid grid-cols-3 gap-2">
              <div
                v-for="(example, key) in examples"
                :key="key"
                class="form-control px-2 border rounded-xl mb-2"
                :class="{
                  'border-neutral': store.state[S3.RAG_PROMPT.state] === key,
                }"
              >
                <label class="label cursor-pointer">
                  <span class="label-text">{{ example.label }}</span>
                  <input
                    type="radio"
                    name="radio-10"
                    class="radio"
                    :checked="store.state[S3.RAG_PROMPT.state] === key"
                    @change="store.state[S3.RAG_PROMPT.state] = key"
                  />
                </label>
              </div>
            </div>
            <div class="flex flex-row gap-4 items-center">
              <textarea
                type="text"
                class="textarea textarea-lg textarea-bordered w-full leading-normal"
                :value="store.state[S3.RAG_PROMPT.state] ? examples[store.state[S3.RAG_PROMPT.state] as keyof typeof examples].query : ''"
                placeholder="Select a query example"
                readonly
              ></textarea>
              <div class="indicator">
                <span
                  v-if="
                    store.state[S3.RAG_PROMPT.state] &&
                    store.state[S3.RAG_GENERATED.state] != 8
                  "
                  class="indicator-item badge badge-sm badge-error"
                ></span>
                <button
                  class="btn"
                  @click="generateHandler"
                  :disabled="generating"
                >
                  <span v-if="generating" class="loading"></span>
                  <span v-else><BIconArrowRightSquare class="w-5 h-5" /></span>
                </button>
              </div>
            </div>

            <!-- Retrieve Section -->
            <div class="flex gap-2 items-center my-4">
              <BIcon3Circle class="w-5 h-5" />
              <h4 class="my-0">Retrieve</h4>
              <div class="flex-grow"></div>
              <div
                class="tooltip tooltip-left"
                data-tip="Similarity scores between the query and every entry in the database"
              >
                <button class="btn btn-xs btn-circle">?</button>
              </div>
            </div>
            <div
              v-for="i in Math.min(
                database.length,
                store.state[S3.RAG_GENERATED.state] || 0
              )"
              :key="i"
              class="text-sm"
            >
              <div class="flex items-center gap-4 w-full">
                <div class="line-clamp-1 w-full">
                  {{ database[i - 1] }}
                </div>
                <div class="font-bold">
                  {{
                    examples[
                      store.state[S3.RAG_PROMPT.state] as keyof typeof examples
                    ].simScores[i - 1].toFixed(3)
                  }}
                </div>
              </div>
            </div>
          </div>
          <div>
            <!-- Augmented Prompt Section -->
            <div class="flex gap-2 items-center mb-4">
              <BIcon4Circle class="w-5 h-5" />
              <h4 class="my-0">Augment</h4>
              <div class="flex-grow"></div>
              <div
                class="tooltip tooltip-left"
                :data-tip="`Augmented prompt with the entry that has the highest similarity score`"
              >
                <button class="btn btn-xs btn-circle">?</button>
              </div>
            </div>
            <div
              class="chat chat-end"
              v-if="store.state[S3.RAG_GENERATED.state] >= 7"
            >
              <div
                class="chat-bubble bg-gray-100 text-neutral text-sm py-0"
                v-html="examples[store.state[S3.RAG_PROMPT.state] as keyof typeof examples].augPrompt"
              ></div>
            </div>

            <!-- Generate Section -->
            <div class="flex gap-2 items-center my-4">
              <BIcon5Circle class="w-5 h-5" />
              <h4 class="my-0">Generate</h4>
              <div class="flex-grow"></div>
              <div
                class="tooltip tooltip-left"
                data-tip="Response from the LLM generated using the augmented prompt"
              >
                <button class="btn btn-xs btn-circle">?</button>
              </div>
            </div>
            <div
              class="chat chat-start"
              v-if="store.state[S3.RAG_GENERATED.state] === 8"
            >
              <div
                class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
                v-html="examples[store.state[S3.RAG_PROMPT.state] as keyof typeof examples].response"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- RAG Brainstorm -->
      <div v-if="step === 9">
        <h2>RAG in Everyday Life</h2>
        <p>
          Now that you have learned about performing RAG with LLMs, let's
          brainstorm some everyday applications of RAG.
        </p>
        <p>
          <strong>Task: </strong>
          Identify a task that could be automated or improved with the help of
          RAG.
        </p>
        <input
          class="input input-lg input-bordered w-full"
          v-model="store.state[S3.RAG_BRAINSTORM_TASK.state]"
          placeholder="Task"
        />
        <p>
          <strong>Task: </strong>
          The database for this RAG system would be sourced from:
        </p>
        <textarea
          class="textarea textarea-lg textarea-bordered w-full"
          v-model="store.state[S3.RAG_BRAINSTORM_DATABASE.state]"
          placeholder="Database, e.g., websites, documents, books, etc."
        ></textarea>
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
