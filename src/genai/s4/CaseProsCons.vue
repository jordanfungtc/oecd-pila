<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { S4 } from "../states";
import { store } from "../../store";
import caseProIcon from "/s4/case-pro.png";
import caseConIcon from "/s4/case-con.png";

const { t } = useI18n();
</script>

<template>
  <!-- Title -->
  <h2>{{ t("s4.caseProsCons.title") }}</h2>

  <!-- Task Instruction -->
  <p>
    <strong>{{ t("common.task") }}:</strong>
    {{ t("s4.caseProsCons.taskInstruction") }}
  </p>

  <div class="grid grid-cols-2 gap-8">
    <!-- Pros -->
    <div>
      <!-- Pros Title -->
      <div class="flex gap-4 items-center">
        <img :src="caseProIcon" class="w-8 h-8 my-4" />
        <h3 class="my-0">{{ t("s4.caseProsCons.prosTitle") }}</h3>
      </div>

      <!-- Pros Inputs -->
      <div class="flex flex-col gap-4">
        <input
          v-for="p in [S4.CASE_PRO_1, S4.CASE_PRO_2, S4.CASE_PRO_3]"
          type="text"
          class="input input-bordered w-full"
          :placeholder="t('common.answer')"
          v-model="store.state[p.state]"
        />
      </div>
    </div>

    <!-- Cons -->
    <div>
      <!-- Cons Title -->
      <div class="flex gap-4 items-center">
        <img :src="caseConIcon" class="w-8 h-8 my-4" />
        <h3 class="my-0">{{ t("s4.caseProsCons.consTitle") }}</h3>
      </div>

      <!-- Cons Inputs -->
      <div class="flex flex-col gap-4">
        <input
          v-for="c in [S4.CASE_CON_1, S4.CASE_CON_2, S4.CASE_CON_3]"
          type="text"
          class="input input-bordered w-full"
          :placeholder="t('common.answer')"
          v-model="store.state[c.state]"
        />
      </div>
    </div>
  </div>
</template>
