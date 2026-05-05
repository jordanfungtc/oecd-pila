<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S3 } from "../states";
import SelectEmb from "../../util/SelectEmb.vue";

const { t } = useI18n();
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s3.analogyTask.title") }}</h2>

  <!-- Paragraphs -->
  <p>{{ t("s3.analogyTask.paragraph1") }}</p>
  <p>
    <strong>{{ t("common.taskLabel") }}</strong>
    {{ t("s3.analogyTask.taskInstruction") }}
  </p>

  <!-- Embeddings Table -->
  <table class="table table-sm mt-0 mb-[-10px]">
    <thead>
      <!-- Analogy -->
      <tr>
        <th></th>
        <th>
          <h3 class="my-0 text-center flex gap-2 items-center">
            <div class="text-xl">👸</div>
            <div class="text-lg">{{ t("s3.analogyTask.words.queen") }}</div>
          </h3>
        </th>
        <th><h2 class="my-0 text-center">–</h2></th>
        <th>
          <h3 class="my-0 text-center flex gap-2 items-center">
            <div class="text-xl">💁‍♀️</div>
            <div class="text-lg">{{ t("s3.analogyTask.words.woman") }}</div>
          </h3>
        </th>
        <th><h2 class="my-0 text-center">+</h2></th>
        <th>
          <h3 class="my-0 text-center flex gap-2 items-center">
            <div class="text-xl">🙋‍♂️</div>
            <div class="text-lg">{{ t("s3.analogyTask.words.man") }}</div>
          </h3>
        </th>
        <th><h2 class="my-0 text-center">=</h2></th>
        <th>
          <h3 class="my-0 text-center flex gap-2 items-center">
            <div class="text-xl">🤴</div>
            <div class="text-lg">{{ t("s3.analogyTask.words.king") }}</div>
          </h3>
        </th>
      </tr>
    </thead>

    <tbody>
      <!-- Male Feature -->
      <tr class="border-none">
        <td>
          <h3 class="my-0 text-center">
            {{ t("s3.analogyTask.features.male") }}
          </h3>
        </td>
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

      <!-- Female Feature -->
      <tr class="border-none">
        <td>
          <h3 class="my-0 text-center">
            {{ t("s3.analogyTask.features.female") }}
          </h3>
        </td>
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

      <!-- Ruler Feature -->
      <tr>
        <td>
          <h3 class="my-0 text-center">
            {{ t("s3.analogyTask.features.ruler") }}
          </h3>
        </td>
        <td class="text-center">1</td>
        <td class="text-center">–</td>
        <td class="text-center">0</td>
        <td class="text-center">+</td>
        <td class="text-center">0</td>
        <td class="text-center">=</td>
        <td>
          <SelectEmb
            :state="S3.EMB_KING_RULER.state"
            :answer="S3.EMB_KING_RULER.answer"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>
