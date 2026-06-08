<script setup lang="ts">
import { ref } from "vue";
import Agent from "@knowlearning/agents/browser.js";

type JsonObject = Record<string, unknown>;

const name = ref<string>("");
const items = ref<string>("");
const uuid = ref<string>("");
const metadata = ref<JsonObject>({});
const content = ref<JsonObject>({});

const create = async () => {
  uuid.value = await Agent.uuid();
  const nextMetadata = (await Agent.metadata(uuid.value)) as JsonObject;
  const nextContent = (await Agent.state(uuid.value)) as JsonObject;

  const splitItems = items.value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (splitItems.length > 1) {
    (nextMetadata as any).active_type = "application/json;type=sequence";
    (nextContent as any).items = splitItems.map((id) => ({ id }));
  } else if (splitItems.length === 1) {
    (nextContent as any).id = splitItems[0];
  }

  (nextContent as any).name = name.value;

  metadata.value = nextMetadata;
  content.value = nextContent;
};

const check = async () => {
  if (!uuid.value) return;
  content.value = (await Agent.state(uuid.value)) as JsonObject;
  metadata.value = (await Agent.metadata(uuid.value)) as JsonObject;
};
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <h1>Developer Utility</h1>
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
          automatically. Clone the created UUID in PILA Create to activate the
          sequence.
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
</template>
