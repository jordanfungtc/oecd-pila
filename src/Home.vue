<script setup lang="ts">
import { ref } from "vue";
import Agent from "@knowlearning/agents/browser.js";
import { RouterLink } from "vue-router";
import { store } from "./store";

store.title = "OECD PILA Modules";

const base_url = "https://pila.oecd.jordanfung.com";

const modules = {
  genai: {
    name: "Generative AI Module",
    preview: "/genai/preview",
    dashboard: `/genai/dashboard?user=${store.auth.user}&content=my-state&content=fake-state`,
    sequences: [
      {
        name: "Generative AI Module",
        uuid: "085f62f0-87a4-11ef-861e-a9ea128200f7",
      },
      {
        name: "Generative AI Assessment",
        uuid: "a95c5870-9c21-11ef-90a1-b33fe74cf711",
      },
    ],
    sections: [
      {
        name: "Generative AI (I)",
        url: "/genai/1",
        uuid: "9a01ba82-f19f-4507-ae84-faea96133744",
      },
      {
        name: "Generative AI (II)",
        url: "/genai/2",
        uuid: "b39a1ebc-e19e-4fb3-a98a-3597787c7e8e",
      },
      {
        name: "Generative AI (III)",
        url: "/genai/3",
        uuid: "7970039f-b917-43cf-8dee-0b7df9f661bf",
      },
      {
        name: "Generative AI (IV)",
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
  <div class="max-w-4xl w-full">
    <div
      v-for="(module, i) in modules"
      :key="i"
      class="p-8 rounded-xl mb-8 bg-white shadow-md"
    >
      <div class="flex gap-2 items-center">
        <h2 class="my-0">{{ module.name }}</h2>
        <div class="flex-grow"></div>
        <RouterLink :to="module.preview" class="btn btn-neutral">
          Preview Module
        </RouterLink>
        <RouterLink :to="module.dashboard" class="btn btn-neutral">
          Preview Dashboard
        </RouterLink>
      </div>

      <!-- Sequences Table -->
      <h3>Sequences</h3>
      <p>
        You can add the following sequence UUIDs directly to PILA, or clone them
        in PILA Create to edit them.
      </p>
      <div class="overflow-x-auto">
        <table class="table table-sm mt-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>UUID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sequence in module.sequences" :key="sequence.uuid">
              <td>{{ sequence.name }}</td>
              <td>{{ sequence.uuid }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Sections Table -->
      <h3>Sections</h3>
      <p>
        You can also use these individual section UUIDs as part of your own PILA
        sequences.
      </p>
      <div class="overflow-x-auto">
        <table class="table table-sm mt-0">
          <thead>
            <tr>
              <th>Name</th>
              <th>URL</th>
              <th>UUID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="section in module.sections" :key="section.name">
              <td>{{ section.name }}</td>
              <td>{{ base_url + section.url }}</td>
              <td>{{ section.uuid }}</td>
              <td>
                <RouterLink :to="section.url" class="btn btn-xs">
                  Open
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
