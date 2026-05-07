<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import { store } from "./store";

const base_url = "https://pila.oecd.jordanfung.com";

store.titleKey = "main.homeTitle";
const { t } = useI18n();

const modules = {
  genai: {
    nameKey: "main.genaiModule",
    preview: "/genai/preview",
    dashboard: `/genai/dashboard?user=${store.auth.user}&content=my-state&content=fake-state`,
    sequences: [
      {
        nameKey: "main.genaiModule",
        uuid: "085f62f0-87a4-11ef-861e-a9ea128200f7",
      },
      {
        nameKey: "main.genaiAssessment",
        uuid: "a95c5870-9c21-11ef-90a1-b33fe74cf711",
      },
    ],
    sections: [
      {
        url: "/genai/1",
        uuid: "9a01ba82-f19f-4507-ae84-faea96133744",
      },
      {
        url: "/genai/2",
        uuid: "b39a1ebc-e19e-4fb3-a98a-3597787c7e8e",
      },
      {
        url: "/genai/3",
        uuid: "7970039f-b917-43cf-8dee-0b7df9f661bf",
      },
      {
        url: "/genai/4",
        uuid: "27511e40-f72d-4179-8547-0f6f429bc197",
      },
    ],
  },
};
</script>

<template>
  <div class="max-w-4xl w-full mx-auto">
    <div
      v-for="(module, i) in modules"
      :key="i"
      class="p-8 rounded-xl mb-8 bg-white shadow-md"
    >
      <div class="flex gap-2 items-center">
        <!-- Module Name -->
        <h2 class="my-0">{{ t(module.nameKey) }}</h2>
        <div class="flex-grow"></div>

        <!-- Preview Module Button -->
        <RouterLink :to="module.preview" class="btn btn-neutral">
          {{ t("main.previewModule") }}
        </RouterLink>

        <!-- Preview Dashboard Button -->
        <RouterLink :to="module.dashboard" class="btn btn-neutral">
          {{ t("main.previewDashboard") }}
        </RouterLink>
      </div>

      <!-- Sequences Title -->
      <h3>{{ t("main.sequences") }}</h3>

      <!-- Sequences Description -->
      <p>{{ t("main.sequencesDescription") }}</p>

      <!-- Sequences Table -->
      <div class="overflow-x-auto">
        <table class="table table-sm my-0">
          <thead>
            <tr>
              <th>{{ t("main.name") }}</th>
              <th>{{ t("main.uuid") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sequence in module.sequences" :key="sequence.uuid">
              <td>{{ t(sequence.nameKey) }}</td>
              <td>{{ sequence.uuid }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sections Title -->
      <h3>{{ t("main.sections") }}</h3>

      <!-- Sections Description -->
      <p>{{ t("main.sectionsDescription") }}</p>

      <!-- Sections Table -->
      <div class="overflow-x-auto">
        <table class="table table-sm my-0">
          <thead>
            <tr>
              <th>#</th>
              <th>{{ t("main.url") }}</th>
              <th>{{ t("main.uuid") }}</th>
              <th>{{ t("main.actions") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(section, index) in module.sections" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ base_url + section.url }}</td>
              <td>{{ section.uuid }}</td>
              <td>
                <RouterLink :to="section.url" class="btn btn-xs">
                  {{ t("main.open") }}
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
