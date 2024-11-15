<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import {
  BIconTrash,
  BIconChevronLeft,
  BIconChevronRight,
  BIconArrowRightSquare,
  BIconPlayBtn,
  BIconFileEarmarkTextFill,
} from "bootstrap-icons-vue";
import { ref } from "vue";
import { store } from "../store";
import SelectTf from "../components/SelectTf.vue";
import { S2 } from "./states";

store.title = "Generative AI Module";

import sectionIcon from "/s2/s2-icon.png";
import dataCutoffIcon from "/s2/data-cutoff.png";
import hallucinationIcon from "/s2/hallucination.png";
import intelPropIcon from "/s2/intel-prop.png";

const step = ref(0);

const resetHandler = () => {
  step.value = 0;
  Object.keys(S2).forEach((key) => {
    delete store.state[S2[key as keyof typeof S2].state];
  });
};

const submitHandler = () => {
  // @ts-ignore
  Agent.close({ success: true });
};

const singleExamples = {
  photosynthesis: {
    label: "🌿 Photosynthesis",
    prompt1: "What is photosynthesis?",
    response1:
      "<p>Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy in the form of glucose. This process occurs mainly in the chloroplasts of plant cells, using chlorophyll to capture light energy. The general equation for photosynthesis can be summarized as:</p><p>6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂</p><p>This means that carbon dioxide and water, using light energy, are transformed into glucose and oxygen.</p>",
    prompt2:
      "Explain the process of photosynthesis in plants in a way that a 5-year-old can understand. The response should have 150 words and written in a friendly and fun tone.",
    response2:
      "<p>Sure! 🌞 Photosynthesis is like a magic recipe that plants use to make their food! First, they need three special things: sunshine, air, and water. 🌱☀️💧 </p><p>When the sun shines, plants open tiny little doors on their leaves to take in air, which has something called carbon dioxide. They also drink up water from the soil through their roots. Then, with the help of the sunlight, the plants mix the water and air together in their leaves. It’s like a fun science experiment! 🎉 </p><p>When they mix everything, they make their own food, which helps them grow big and strong. And guess what? They also make oxygen, which is the fresh air we breathe! So, plants are super important because they help us and make our world beautiful. 🌍💚 Isn’t that amazing?</p>",
  },
  french: {
    label: "🇫🇷 French Revolution",
    prompt1: "Tell me about the French Revolution.",
    response1:
      "<p>The French Revolution (1789-1799) was a period of radical social and political change in France that led to the end of absolute monarchy, the rise of democracy, and the establishment of the French Republic. Key events included the Storming of the Bastille, the Declaration of the Rights of Man and of the Citizen, and the Reign of Terror. The revolution inspired movements worldwide and significantly influenced modern political ideologies.</p>",
    prompt2:
      "Provide a detailed overview of the French Revolution, including its causes, key events, and outcomes. The response should be in bulleted lists and maintain a neutral tone.",
    response2:
      "<h3>Overview of the French Revolution</h3><h4>Causes</h4><ul><li><strong>Social Inequality</strong>: France&#39;s society was divided into three estates: the clergy (First Estate), the nobility (Second Estate), and the common people (Third Estate). The Third Estate bore the tax burden and had little political power.</li><li><strong>Economic Hardship</strong>: Financial crises due to debt from wars (e.g., American Revolution), poor harvests, and extravagant spending by the monarchy led to widespread discontent.</li><li><strong>Enlightenment Ideas</strong>: Philosophers like Voltaire, Rousseau, and Montesquieu promoted ideas of liberty, equality, and fraternity, challenging traditional authority.</li><li><strong>Weak Leadership</strong>: King Louis XVI&#39;s indecisiveness and inability to address financial issues contributed to the crisis.</li></ul><h4>Key Events</h4><ul><li><strong>Estates-General (May 1789)</strong>: Convened to address the financial crisis; the Third Estate broke away to form the National Assembly.</li><li><strong>Tennis Court Oath (June 1789)</strong>: Members of the National Assembly pledged not to disband until a new constitution was established.</li><li><strong>Storming of the Bastille (July 14, 1789)</strong>: A symbolic act of revolution, it marked the uprising against the monarchy.</li><li><strong>Declaration of the Rights of Man and of the Citizen (August 1789)</strong>: A foundational document asserting individual rights and the principles of liberty and equality.</li><li><strong>Reign of Terror (1793-1794)</strong>: Led by Robespierre and the Committee of Public Safety, this period was marked by mass executions of perceived enemies of the revolution.</li><li><strong>Fall of Robespierre (July 1794)</strong>: His execution ended the Reign of Terror and led to the Thermidorian Reaction.</li></ul><h4>Outcomes</h4><ul><li><strong>End of Monarchy</strong>: The revolution led to the abolition of the monarchy and the establishment of the First French Republic.</li><li><strong>Rise of Napoleon Bonaparte</strong>: The instability following the revolution paved the way for Napoleon&#39;s rise to power, eventually leading to the Napoleonic Wars.</li><li><strong>Social Changes</strong>: The revolution promoted secularism, the spread of nationalism, and changes in class structure.</li><li><strong>Influence on Other Revolutions</strong>: The French Revolution inspired uprisings and movements for democracy and rights across Europe and the Americas.</li></ul>",
  },
  productivity: {
    label: "🚀 Productivity Tips",
    prompt1: "How can I be more productive?",
    response1:
      "<p>To be more productive, try these strategies: </p><ol><li><strong>Set Clear Goals</strong>: Define specific, measurable, achievable, relevant, and time-bound (SMART) goals.</li><li><strong>Prioritize Tasks</strong>: Use methods like the Eisenhower Matrix to distinguish between what&#39;s urgent and important.</li><li><strong>Time Management</strong>: Implement techniques like the Pomodoro Technique, where you work for 25 minutes and take a 5-minute break.</li><li><strong>Limit Distractions</strong>: Identify and minimize distractions in your work environment.</li><li><strong>Use Tools</strong>: Utilize productivity apps and tools to keep track of tasks and deadlines.</li></ol><p>Consistency and reflection on your progress can also help enhance productivity over time.</p>",
    prompt2:
      "Provide some productivity tips for high school students, along with practical examples. The response should be an essay of 200 words written in an encouraging tone.",
    response2:
      "<p>Improving productivity as a high school student is essential for achieving academic success and personal growth. Here are some effective tips to help you maximize your time and efforts.</p><p>First, create a structured schedule. Use a planner or digital calendar to block out time for classes, homework, and extracurricular activities. For example, dedicate specific hours each day for studying, ensuring you stay on track with assignments and projects.</p><p>Second, break tasks into smaller, manageable chunks. Instead of tackling a large project all at once, divide it into sections and set deadlines for each part. This approach not only makes tasks less overwhelming but also provides a sense of accomplishment as you complete each segment.</p><p>Additionally, minimize distractions. Find a quiet study space and limit your phone usage during study sessions. Apps that block distracting websites can also help you stay focused. For instance, try using the Pomodoro Technique: study for 25 minutes, then take a 5-minute break.</p><p>Lastly, prioritize self-care. Ensure you get enough sleep, eat well, and take breaks to recharge. A healthy mind and body are crucial for maintaining high productivity levels. Remember, consistency is key—stay committed to these practices, and you’ll see remarkable improvements in your productivity!</p>",
  },
};

const loadingSingle = ref([false, false]);

const singleHandler = (i: number) => {
  if (!store.state[S2.LLM_PROMPT.state]) {
    return window.alert("Please select a prompt example.");
  }
  const generated =
    i === 0 ? S2.LLM_SIMPLE_GENERATED : S2.LLM_REFINED_GENERATED;
  loadingSingle.value[i] = true;
  store.state[generated.state] = false;
  setTimeout(() => {
    loadingSingle.value[i] = false;
    store.state[generated.state] = true;
  }, 2000);
};

const promptTechniques = [
  "Start simple and iteratively refine your prompt based on the response",
  "Be clear and concise in your instructions and avoid ambiguity",
  "Provide sufficient context and background information",
  "Specify the desired length, format and tone of the response",
  "All of the above",
];

const convExample = [
  {
    user: "Hello LLM! I am writing an essay about climate change, can you help me?",
    assistant:
      "<p>Of course! I can help you outline your essay, provide information on key topics related to climate change, or assist with specific sections. What do you need help with?</p>",
  },
  {
    user: "Can you help me create an outline of the essay with all the things I should mention?",
    assistant:
      "<p>Certainly! Here's an outline for an essay on climate change:</p><ol><li>Introduction</li><li>Causes of Climate Change</li><li>Impacts of Climate Change</li><li>Mitigation Strategies</li><li>Conclusion and call to action</li></ol><p>Feel free to modify this outline to better suit your specific needs or focus areas. If you need more detailed information on any section, let me know!</p>",
  },
  {
    user: "That's awesome, can you write the essay for me? It should have around 200 words and written in an authoritative tone.",
    assistant:
      "<p>Climate change, driven predominantly by human activities such as deforestation, fossil fuel combustion, and industrial processes, poses a profound threat to our planet.</p><p>The release of greenhouse gases, notably carbon dioxide and methane, is causing global temperatures to rise at an unprecedented rate. This warming has far-reaching consequences, including more frequent and severe weather events, rising sea levels, and disruptions to ecosystems and biodiversity.</p><p>The impacts are already visible: polar ice caps are melting, coral reefs are dying, and extreme weather patterns are becoming the norm. These changes threaten food security, water resources, and human health on a global scale.</p><p>Mitigating climate change requires immediate and decisive action. Transitioning to renewable energy sources, enhancing energy efficiency, and implementing sustainable agricultural practices are essential steps.</p><p>In conclusion, addressing climate change is not optional but imperative. The time for action is now, and collective efforts from governments, businesses, and individuals are crucial to safeguarding our future.</p>",
  },
  {
    user: "That's great, but can you add some statistics to the essay to make it more persuasive?",
    assistant: `
      <p>Climate change, driven predominantly by human activities such as deforestation, fossil fuel combustion, and industrial processes, poses a profound threat to our planet.</p>
      <p>The release of greenhouse gases, notably carbon dioxide and methane, is causing global temperatures to rise at an unprecedented rate. This warming has far-reaching consequences, including rising sea levels and a 90% increase in the frequency of severe weather events over the last decade, as reported by the Intergovernmental Panel on Oceans and the Atmosphere (IPOA).</p>
      <p>The impacts are already visible: polar ice caps are melting at a rate of 13% per decade, as highlighted by NASA, and coral reefs are experiencing mass bleaching events. These changes threaten food security, water resources, and human health on a global scale.</p>
      <p>Mitigating climate change requires immediate and decisive action. Transitioning to renewable energy sources could reduce global greenhouse gas emissions by 150% by 2070, according to the European Renewable Energy Office (EUREO). Enhancing energy efficiency and implementing sustainable agricultural practices are essential steps to achieving these reductions.</p>
      <p>In conclusion, addressing climate change is not optional but imperative. The time for action is now, and collective efforts from governments, businesses, and individuals are crucial to safeguarding our future.</p>`,
  },
  {
    user: "Thank you for your help! I will submit the essay you wrote to my teacher now.",
    assistant:
      "<p>You're welcome! I'm glad I could help. Best of luck with your submission, but remember to review the essay for accuracy and plagiarism before sharing it with your teacher. If you have any more questions or need further assistance, feel free to ask!</p>",
  },
];

const loadingConv = ref(false);

const convHandler = () => {
  if (!store.state[S2.LLM_CONV_GENERATED.state]) {
    store.state[S2.LLM_CONV_GENERATED.state] = 0;
  }
  if (store.state[S2.LLM_CONV_GENERATED.state] < convExample.length) {
    loadingConv.value = true;
    setTimeout(() => {
      store.state[S2.LLM_CONV_GENERATED.state]++;
      loadingConv.value = false;
    }, 2000);
  }
};

const facts = [
  {
    stat: "90% increase in the frequency of severe weather events over the last decade, as reported by the Intergovernmental Panel on Oceans and the Atmosphere (IPOA).",
    state: S2.LLM_FACT_IPOA,
  },
  {
    stat: "Polar ice caps are melting at a rate of 13% per decade, as highlighted by NASA.",
    state: S2.LLM_FACT_NASA,
  },
  {
    stat: "Transitioning to renewable energy sources could reduce global greenhouse gas emissions by 150% by 2070, according to the European Renewable Energy Office (EUREO).",
    state: S2.LLM_FACT_EUREO,
  },
];
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
            v-for="i in 9"
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
            <h2>Large Language Models</h2>
            <p>
              Large language models (LLMs) are ML models that are trained on
              vast amounts of text data to learn patterns and structures in
              human language. They take text as input (called a prompt) and
              generate a text response as output. LLMs and other Generative AI
              models have gained popularity in recent years due to their
              wide-ranging applications.
            </p>
            <h4>In this section</h4>
            <ul>
              <li>
                Generate responses using LLMs and learn prompt engineering
                techniques
              </li>
              <li>
                Experience the conversational capabilities of LLMs and identify
                their limitations
              </li>
              <li>
                Brainstorm everyday applications of LLMs and write prompts for
                specific tasks
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=iR2O2GPbB0E"
              target="_blank"
              class="no-underline flex gap-2 items-center text-primary mt-8"
            >
              <BIconPlayBtn /> Google for Developer: What are Large Language
              Models (LLMs)?
            </a>
          </div>
        </div>
      </div>

      <!-- Prompt Engineering -->
      <div v-if="step === 1" class="flex justify-center">
        <div class="max-w-2xl w-full">
          <h2>Prompt Engineering</h2>
          <p>
            Prompt engineering is the process of crafting effective prompts in
            the form of questions or instructions to guide LLMs in generating
            the desired output. Mastering this skill can significantly enhance
            the quality of the responses.
          </p>
          <a
            href="https://www.promptingguide.ai/"
            target="_blank"
            class="no-underline flex gap-2 items-center text-primary"
          >
            <BIconFileEarmarkTextFill /> DAIR.AI: Prompt Engineering Guide
          </a>
          <p>
            <strong>Task: </strong>
            To explore the capabilities of LLMs and illustrate the process of
            prompt engineering, choose one of the following prompt examples and
            generate responses in the next steps.
          </p>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(example, key) in singleExamples"
              :key="key"
              class="form-control px-2 border rounded-xl mb-2"
              :class="{
                'border-neutral': store.state[S2.LLM_PROMPT.state] === key,
              }"
            >
              <label class="label cursor-pointer">
                <span class="label-text">{{ example.label }}</span>
                <input
                  type="radio"
                  name="radio-10"
                  class="radio"
                  :checked="store.state[S2.LLM_PROMPT.state] === key"
                  @change="store.state[S2.LLM_PROMPT.state] = key"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Prompt -->
      <div v-if="step === 2">
        <h2>Simple Prompt</h2>
        <div class="flex gap-4 items-center">
          <textarea
            class="textarea textarea-lg textarea-bordered w-full leading-normal"
            :value="store.state[S2.LLM_PROMPT.state] ? singleExamples[store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples].prompt1 : ''"
            placeholder="Select a prompt example"
            rows="2"
            readonly
          ></textarea>
          <div class="indicator">
            <span
              v-if="!store.state[S2.LLM_SIMPLE_GENERATED.state]"
              class="indicator-item badge badge-sm badge-error"
            ></span>
            <button
              class="btn"
              @click="() => singleHandler(0)"
              :disabled="loadingSingle[0]"
            >
              <div v-if="loadingSingle[0]" class="loading"></div>
              <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
            </button>
          </div>
        </div>
        <div class="h-[16rem] overflow-y-auto my-4 border rounded-xl p-4">
          <h4 class="mt-0">Response</h4>
          <div
            v-if="store.state[S2.LLM_SIMPLE_GENERATED.state]"
            v-html="singleExamples[store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples].response1"
            class="mt-[-10px]"
          ></div>
          <p v-else>
            Generate a response using the simple prompt above and examine the
            response.
          </p>
        </div>
      </div>

      <!-- Refined Prompt -->
      <div v-if="step === 3">
        <h2>Refined Prompt</h2>
        <div class="flex gap-4 items-center">
          <textarea
            class="textarea textarea-lg textarea-bordered w-full leading-normal"
            :value="store.state[S2.LLM_PROMPT.state] ? singleExamples[store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples].prompt2 : ''"
            placeholder="Select a prompt example"
            rows="2"
            readonly
          ></textarea>
          <div class="indicator">
            <span
              v-if="!store.state[S2.LLM_REFINED_GENERATED.state]"
              class="indicator-item badge badge-sm badge-error"
            ></span>
            <button
              class="btn"
              @click="() => singleHandler(1)"
              :disabled="loadingSingle[1]"
            >
              <div v-if="loadingSingle[1]" class="loading"></div>
              <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
            </button>
          </div>
        </div>
        <div class="h-[16rem] overflow-y-auto my-4 border rounded-xl p-4">
          <h4 class="mt-0">Response</h4>
          <div
            v-if="store.state[S2.LLM_REFINED_GENERATED.state]"
            v-html="singleExamples[store.state[S2.LLM_PROMPT.state] as keyof typeof singleExamples].response2"
            class="mt-[-10px]"
          ></div>
          <p v-else>
            Generate a response using the refined prompt above and compare the
            responses to the simple prompt.
          </p>
        </div>
      </div>

      <!-- Techniques -->
      <div v-if="step === 4">
        <h2>Prompt Engineering Techniques</h2>
        <p>
          <strong>Task: </strong>
          When writing prompts for LLMs, which of the following techniques
          should you consider?
        </p>
        <div
          v-for="(technique, index) in promptTechniques"
          :key="index"
          class="form-control px-2 border rounded-xl mb-2"
          :class="{
            'border-neutral':
              store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index,
          }"
        >
          <label class="label cursor-pointer">
            <span class="label-text">{{ technique }}</span>
            <input
              type="radio"
              name="radio-10"
              class="radio"
              :checked="store.state[S2.LLM_PROMPT_TECHNIQUE.state] === index"
              @change="store.state[S2.LLM_PROMPT_TECHNIQUE.state] = index"
            />
          </label>
        </div>
        <div
          v-if="store.state[S2.LLM_PROMPT_TECHNIQUE.state] !== undefined"
          class="mt-4"
        >
          <div
            v-if="
              store.state[S2.LLM_PROMPT_TECHNIQUE.state] ===
              promptTechniques.length - 1
            "
            class="alert text-sm"
          >
            <span>✅</span>
            <span>
              Well done! Considering all the prompt engineering techniques can
              help you craft effective prompts for LLMs.
            </span>
          </div>
          <div v-else class="alert text-sm">
            <span>❌</span>
            <span>
              That's true, but there are other techniques that you should also
              consider. Can you identify them?
            </span>
          </div>
        </div>
      </div>

      <!-- Conversational AI -->
      <div v-if="step === 5">
        <div class="flex gap-8">
          <div class="w-1/3">
            <h2>Conversational AI</h2>
            <p>
              We can also have conversations with LLMs by including previous
              prompts and responses in the current prompt.
            </p>
            <p>
              <strong>Task: </strong>
              Generate and examine the responses in a conversation where a
              student asks for help with an essay on climate change.
            </p>
          </div>
          <div class="w-2/3">
            <!-- Conversation Bubbles -->
            <div
              class="h-[21rem] overflow-y-auto mt-8 mb-4 border rounded-xl p-4"
            >
              <h4 class="mt-0">Conversation History</h4>
              <div
                v-for="i in store.state[S2.LLM_CONV_GENERATED.state]"
                :key="i - 1"
              >
                <!-- User Bubble (unformatted) -->
                <div class="chat chat-end">
                  <div class="chat-header">User Prompt</div>
                  <div
                    class="chat-bubble bg-gray-100 text-neutral text-sm py-0"
                  >
                    <p>{{ convExample[i - 1].user }}</p>
                  </div>
                </div>

                <!-- LLM Bubble (HTML formatted) -->
                <div class="chat chat-start">
                  <div class="chat-header">LLM Response</div>
                  <div
                    class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
                    v-html="convExample[i - 1].assistant"
                  ></div>
                </div>
              </div>
            </div>
            <!-- User Input -->
            <div class="flex gap-4 items-center">
              <textarea
                class="textarea textarea-lg textarea-bordered w-full leading-normal"
                :value="
                  !store.state[S2.LLM_CONV_GENERATED.state]
                    ? convExample[0].user
                    : store.state[S2.LLM_CONV_GENERATED.state] <
                      convExample.length
                    ? convExample[store.state[S2.LLM_CONV_GENERATED.state]].user
                    : ''
                "
                placeholder="Conversation ended"
                rows="2"
                readonly
              ></textarea>
              <div class="indicator">
                <span
                  v-if="
                    !store.state[S2.LLM_CONV_GENERATED.state] ||
                    store.state[S2.LLM_CONV_GENERATED.state] <
                      convExample.length
                  "
                  class="indicator-item badge badge-sm badge-error"
                ></span>
                <button
                  class="btn"
                  @click="() => convHandler()"
                  :disabled="loadingConv"
                >
                  <div v-if="loadingConv" class="loading"></div>
                  <div v-else><BIconArrowRightSquare class="w-5 h-5" /></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fact Checking -->
      <div v-if="step === 6">
        <h2>Fact Checking</h2>
        <p>
          As you may have noticed in the conversation, the LLM sometimes gives
          you responses that are not entirely accurate but may seem so at first
          glance. This is because LLMs are not truly “intelligent”. They are
          also not a search engine.
        </p>
        <p>
          <strong>Task: </strong>
          Using an Internet search engine, verify the accuracy of the following
          statistics included in the response.
        </p>
        <table class="table table-sm my-0">
          <thead>
            <tr>
              <th>Statistics</th>
              <th>Accuracy</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fact, index) in facts" :key="index">
              <td>{{ fact.stat }}</td>
              <td>
                <SelectTf
                  :state="fact.state.state"
                  :answer="fact.state.answer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Limitations of LLMs -->
      <div v-if="step === 7">
        <div class="flex gap-12">
          <div class="w-1/3">
            <h2>Limitations of LLMs</h2>
            <p>
              LLMs have limitations that can affect the quality and reliability
              of their responses. It is crucial to approach their outputs with
              caution and verify information independently.
            </p>
            <p>
              For instance, you can look for sources online that confirm the
              information provided by the LLM, check the credibility of the
              author, and ensure that the data is up-to-date.
            </p>
          </div>
          <div class="w-2/3 flex flex-col gap-4 mt-12">
            <div class="flex gap-8 p-4 border rounded-xl">
              <img :src="dataCutoffIcon" class="w-16 h-16 my-4" />
              <div>
                <h4 class="mt-0">Data Cut-off</h4>
                <p class="text-sm my-0">
                  LLMs can only generate responses based on the information
                  available in their training data. If an LLM has a data cut-off
                  in 2023, it won't be able to answer questions about events in
                  2024.
                </p>
              </div>
            </div>
            <div class="flex gap-8 p-4 border rounded-xl">
              <img :src="hallucinationIcon" class="w-16 h-16 my-4" />
              <div>
                <h4 class="mt-0">Hallucinations</h4>
                <p class="text-sm my-0">
                  LLMs can only predict the most likely response based on the
                  given prompt and may sometimes generate plausible-sounding but
                  incorrect responses known as "hallucinations".
                </p>
              </div>
            </div>
            <div class="flex gap-8 p-4 border rounded-xl">
              <img :src="intelPropIcon" class="w-16 h-16 my-4" />
              <div>
                <h4 class="mt-0">Intellectual Property</h4>
                <p class="text-sm my-0">
                  As LLMs are trained on text data from different sources, they
                  may inadvertently generate text that resembles existing work
                  created by others, raising ethical concerns around IP rights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- LLMs Brainstorm -->
      <div v-if="step === 8">
        <h2>LLMs in Everyday Life</h2>
        <p>
          Now that you are familiar with the capabilities and limitations of
          LLMs, let's brainstorm some everyday applications of LLMs.
        </p>
        <p>
          <strong>Task: </strong>
          Identify a task that could be automated or improved with the help of
          LLMs.
        </p>
        <input
          class="input input-lg input-bordered w-full"
          v-model="store.state[S2.LLM_BRAINSTORM_TASK.state]"
          placeholder="Task"
        />
        <p>
          <strong>Task: </strong>
          Write the prompt you would use as the input to an LLM to assist you in
          this task.
        </p>
        <textarea
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          v-model="store.state[S2.LLM_BRAINSTORM_PROMPT.state]"
          placeholder="Prompt"
          rows="3"
        ></textarea>
      </div>
    </div>

    <!-- Next/Submit Button -->
    <button
      class="btn btn-circle w-16 h-16 btn-neutral"
      @click="step != 8 ? step++ : submitHandler"
    >
      <BIconChevronRight class="w-8 h-8" />
    </button>
  </div>
</template>
