<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import {
  BIcon2Circle,
  BIcon3Circle,
  BIcon4Circle,
  BIcon5Circle,
  BIconArrowRightSquare,
} from "bootstrap-icons-vue";
import { S3 } from "../states";
import { store } from "../../store";

const { t, tm } = useI18n();
const generating = ref(false);
const database = computed(() => tm("s3.ragExamples.database") as string[]);

const examples = {
  shipping: {
    emoji: "🚚",
    simScores: [0.309, 0.174, 0.049, 0.454, 0.329, 0.331],
  },
  discount: {
    emoji: "💸",
    simScores: [0.141, 0.533, 0.287, 0.247, 0.308, 0.235],
  },
  return: {
    emoji: "📦",
    simScores: [0.313, 0.223, 0.155, 0.286, 0.621, 0.282],
  },
};

const generateHandler = async () => {
  // Check if a prompt is selected
  if (!store.state[S3.RAG_PROMPT.state]) {
    return window.alert(t("s3.ragGenerate.selectPrompt"));
  }

  // Generate each step with loading delay
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
  <!-- Title -->
  <h2>{{ t("s3.ragGenerate.title") }}</h2>

  <!-- Sections -->
  <div class="grid grid-cols-2 gap-8">
    <div>
      <!-- Query Section -->
      <div class="flex gap-2 items-center mb-4">
        <BIcon2Circle class="w-5 h-5" />
        <h4 class="my-0">{{ t("s3.ragGenerate.sections.query.title") }}</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          :data-tip="t('s3.ragGenerate.sections.query.tooltip')"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>

      <!-- Example Selection -->
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
            <span class="label-text">{{
              example.emoji + " " + t(`s3.ragExamples.examples.${key}.label`)
            }}</span>
            <input
              type="radio"
              name="radio-10"
              class="radio"
              :checked="store.state[S3.RAG_PROMPT.state] === key"
              @change="
                () => {
                  store.state[S3.RAG_PROMPT.state] = key;
                  store.state[S3.RAG_GENERATED.state] = 0;
                }
              "
            />
          </label>
        </div>
      </div>

      <div class="flex flex-row gap-4 items-center">
        <!-- Example Prompt -->
        <textarea
          type="text"
          class="textarea textarea-lg textarea-bordered w-full leading-normal"
          :value="
            store.state[S3.RAG_PROMPT.state]
              ? t(
                  `s3.ragExamples.examples.${store.state[S3.RAG_PROMPT.state]}.query`,
                )
              : ''
          "
          :placeholder="t('s3.ragGenerate.selectPrompt')"
          readonly
        ></textarea>

        <!-- Generate Button -->
        <div class="indicator">
          <span
            v-if="
              store.state[S3.RAG_PROMPT.state] &&
              store.state[S3.RAG_GENERATED.state] != 8
            "
            class="indicator-item badge badge-sm badge-error"
          ></span>
          <button class="btn" @click="generateHandler" :disabled="generating">
            <span v-if="generating" class="loading"></span>
            <span v-else><BIconArrowRightSquare class="w-5 h-5" /></span>
          </button>
        </div>
      </div>

      <!-- Retrieve Section -->
      <div class="flex gap-2 items-center my-4">
        <BIcon3Circle class="w-5 h-5" />
        <h4 class="my-0">{{ t("s3.ragGenerate.sections.retrieve.title") }}</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          :data-tip="t('s3.ragGenerate.sections.retrieve.tooltip')"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>

      <!-- Retrieve Results -->
      <div
        v-for="i in Math.min(
          database.length,
          store.state[S3.RAG_GENERATED.state] || 0,
        )"
        :key="i"
        class="text-sm"
      >
        <div class="flex items-center gap-4 w-full">
          <div class="line-clamp-1 w-full">
            {{ t(database[i - 1]) }}
          </div>
          <div class="font-bold">
            {{
              store.state[S3.RAG_PROMPT.state]
                ? examples[
                    store.state[S3.RAG_PROMPT.state] as keyof typeof examples
                  ].simScores[i - 1].toFixed(3)
                : ""
            }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <!-- Augmented Prompt Section -->
      <div class="flex gap-2 items-center mb-4">
        <BIcon4Circle class="w-5 h-5" />
        <h4 class="my-0">{{ t("s3.ragGenerate.sections.augment.title") }}</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          :data-tip="t('s3.ragGenerate.sections.augment.tooltip')"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>

      <!-- Augmented Prompt -->
      <div
        class="chat chat-end"
        v-if="store.state[S3.RAG_GENERATED.state] >= 7"
      >
        <div
          class="chat-bubble bg-gray-100 text-neutral text-sm py-0"
          v-html="
            store.state[S3.RAG_PROMPT.state]
              ? t(
                  `s3.ragExamples.examples.${store.state[S3.RAG_PROMPT.state]}.augPrompt`,
                )
              : ''
          "
        ></div>
      </div>

      <!-- Generate Section -->
      <div class="flex gap-2 items-center my-4">
        <BIcon5Circle class="w-5 h-5" />
        <h4 class="my-0">{{ t("s3.ragGenerate.sections.generate.title") }}</h4>
        <div class="flex-grow"></div>
        <div
          class="tooltip tooltip-left"
          :data-tip="t('s3.ragGenerate.sections.generate.tooltip')"
        >
          <button class="btn btn-xs btn-circle">?</button>
        </div>
      </div>

      <!-- Generated Response -->
      <div
        class="chat chat-start"
        v-if="store.state[S3.RAG_GENERATED.state] === 8"
      >
        <div
          class="chat-bubble bg-blue-100 text-neutral text-sm py-0"
          v-html="
            store.state[S3.RAG_PROMPT.state]
              ? t(
                  `s3.ragExamples.examples.${store.state[S3.RAG_PROMPT.state]}.response`,
                )
              : ''
          "
        ></div>
      </div>
    </div>
  </div>
</template>
