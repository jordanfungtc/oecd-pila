<script setup lang="ts">
import { ref } from "vue";
import Agent from "@knowlearning/agents/browser.js";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";
import { store } from "./store";

const base_url = "https://pila.oecd.jordanfung.com";

store.titleKey = "main.homeTitle";
const { t } = useI18n();

const modules = {
  genai: {
    nameKey: "main.modules.genai.name",
    preview: "/genai/preview",
    dashboard: `/genai/dashboard?user=${store.auth.user}&content=my-state&content=fake-state`,
    sequences: [
      {
        nameKey: "main.modules.genai.name",
        uuid: "085f62f0-87a4-11ef-861e-a9ea128200f7",
      },
      {
        nameKey: "main.modules.genai.assessment",
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

const name = ref("");
const items = ref("");
const uuid = ref();
const metadata = ref({});
const content = ref({});

const create = async () => {
  // Generate new UUID
  uuid.value = await Agent.uuid();
  const metadata = await Agent.metadata(uuid.value);
  const content = await Agent.state(uuid.value);
  // Split the section uuids, set sequence type if more than 1
  const splitItems = items.value.split(",");
  if (splitItems.length > 1) {
    // @ts-ignore
    metadata.active_type = "application/json;type=sequence";
    // @ts-ignore
    content.items = splitItems.map((id) => ({ id: id.trim() }));
  } else {
    // @ts-ignore
    content.id = splitItems[0];
  }
  // @ts-ignore
  content.name = name.value;
};

const check = async () => {
  content.value = await Agent.state(uuid.value);
  metadata.value = await Agent.metadata(uuid.value);
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
      <h3>{{ t("main.sequences.title") }}</h3>

      <!-- Sequences Description -->
      <p>{{ t("main.sequences.description") }}</p>

      <!-- Sequences Table -->
      <div class="overflow-x-auto">
        <table class="table table-sm my-0">
          <thead>
            <tr>
              <th>{{ t("main.columns.name") }}</th>
              <th>{{ t("main.columns.uuid") }}</th>
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
      <h3>{{ t("main.sections.title") }}</h3>

      <!-- Sections Description -->
      <p>{{ t("main.sections.description") }}</p>

      <!-- Sections Table -->
      <div class="overflow-x-auto">
        <table class="table table-sm my-0">
          <thead>
            <tr>
              <th>#</th>
              <th>{{ t("main.columns.url") }}</th>
              <th>{{ t("main.columns.uuid") }}</th>
              <th>{{ t("main.columns.actions") }}</th>
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

    <!-- Developer Utility -->
    <div class="collapse collapse-arrow border">
      <input type="checkbox" />
      <div class="collapse-title">Developer Utility</div>
      <div class="collapse-content">
        <div class="flex flex-row gap-8">
          <div class="w-full">
            <h3>KL Create</h3>
            <div class="flex flex-col gap-4">
              <input
                v-model="name"
                class="input input-bordered"
                placeholder="Name"
              />
              <textarea
                v-model="items"
                class="textarea textarea-bordered leading-normal"
                placeholder="Items UUID comma-separated"
              ></textarea>
              <div>
                <button class="btn" @click="create">Create</button>
              </div>
            </div>
            <p>
              If more than one item is provided, sequence type will be set
              automatically. Clone the created UUID in PILA Create to activate
              the sequence.
            </p>
          </div>
          <div class="w-full">
            <h3>KL Check</h3>
            <div class="flex flex-col gap-4">
              <input
                v-model="uuid"
                class="input input-bordered"
                placeholder="UUID"
              />
              <div>
                <button class="btn" @click="check">Check</button>
              </div>
            </div>
            <p>Metadata: {{ JSON.stringify(metadata) }}</p>
            <p>Content: {{ JSON.stringify(content) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
