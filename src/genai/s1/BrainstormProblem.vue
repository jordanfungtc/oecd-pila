<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { store } from "../../store";
import { S1 } from "../states";

const { t } = useI18n();

/* Brainstorm Sectors */
const sectors = computed(() => ({
  healthcare: t("s1.brainstormProblem.sectors.healthcare"),
  finance: t("s1.brainstormProblem.sectors.finance"),
  education: t("s1.brainstormProblem.sectors.education"),
  transportation: t("s1.brainstormProblem.sectors.transportation"),
  retail: t("s1.brainstormProblem.sectors.retail"),
  sports: t("s1.brainstormProblem.sectors.sports"),
  agriculture: t("s1.brainstormProblem.sectors.agriculture"),
  manufacturing: t("s1.brainstormProblem.sectors.manufacturing"),
  arts: t("s1.brainstormProblem.sectors.arts"),
  government: t("s1.brainstormProblem.sectors.government"),
  environment: t("s1.brainstormProblem.sectors.environment"),
  legal: t("s1.brainstormProblem.sectors.legal"),
  entertainment: t("s1.brainstormProblem.sectors.entertainment"),
  telecom: t("s1.brainstormProblem.sectors.telecom"),
  hospitality: t("s1.brainstormProblem.sectors.hospitality"),
}));
</script>

<template>
  <h2>{{ t("s1.brainstormProblem.title") }}</h2>
  <p>
    <strong>{{ t("s1.brainstormProblem.taskLabel") }} </strong>
    {{ t("s1.brainstormProblem.taskInstruction") }}
  </p>
  <div class="grid grid-cols-5 gap-2">
    <div
      v-for="(sector, key) in sectors"
      :key="key"
      class="form-control px-2 border rounded-xl"
      :class="{
        'border-neutral': store.state[S1.APP_BRAINSTORM_SECTOR.state] === key,
      }"
    >
      <label class="label cursor-pointer">
        <span class="label-text">{{ sector }}</span>
        <input
          type="radio"
          name="radio-10"
          class="radio"
          :checked="store.state[S1.APP_BRAINSTORM_SECTOR.state] === key"
          @change="store.state[S1.APP_BRAINSTORM_SECTOR.state] = key"
        />
      </label>
    </div>
  </div>
  <textarea
    class="textarea textarea-lg textarea-bordered w-full leading-normal mt-8"
    v-model="store.state[S1.APP_BRAINSTORM_PROBLEM.state]"
    :placeholder="t('s1.brainstormProblem.placeholder')"
    rows="3"
  ></textarea>
</template>
