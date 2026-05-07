<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { store } from "../store";
import Agent from "@knowlearning/agents/browser.js";
import {
  BIconArrowClockwise,
  BIconBoxArrowRight,
  BIconInfo,
} from "bootstrap-icons-vue";

const { t } = useI18n();

const restart = async () => {
  Object.keys(store.state).forEach((key) => delete store.state[key]);
};
</script>

<template>
  <div class="flex flex-row items-center py-2 px-4 gap-4 bg-primary text-white">
    <!-- Left Content -->
    <div class="flex items-center gap-4 w-full">
      <img src="/pila-logo.png" alt="PILA Logo" class="h-6" />
      <h3>{{ t(store.titleKey) }}</h3>
    </div>

    <!-- Right Content -->
    <div class="flex items-center justify-end gap-2 w-full">
      <p class="text-sm">{{ store.auth?.info?.name }}</p>
      <button class="btn btn-xs btn-circle" onclick="info_modal.showModal()">
        <BIconInfo class="w-4 h-4" />
      </button>
      <button
        class="btn btn-xs btn-circle"
        title="Logout"
        @click="
          store.auth.provider === 'anonymous'
            ? Agent.login('google')
            : Agent.logout()
        "
      >
        <BIconBoxArrowRight />
      </button>
    </div>
  </div>

  <!-- Info Modal -->
  <dialog id="info_modal" class="modal">
    <div class="modal-box prose">
      <!-- Close Button -->
      <form method="dialog">
        <button class="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
      </form>

      <!-- Logo -->
      <img src="/oecd-pila-logo.png" class="h-14 my-4" />

      <!-- Title -->
      <div class="text-2xl font-bold my-4">{{ t("main.homeTitle") }}</div>

      <!-- Developer -->
      <a
        href="https://jordanfung.com"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 font-normal no-underline hover:underline text-sm"
      >
        {{ t("main.developedBy", { name: "Jordan Fung" }) }}
      </a>

      <hr class="my-8" />

      <!-- Debug Info -->
      <p class="text-xs">
        User: {{ store.auth.user }} ({{ store.auth.provider }})
      </p>
      <p class="text-xs">State: {{ store.state }}</p>
      <p class="text-xs mb-8">Metadata: {{ store.metadata }}</p>

      <!-- Restart Button -->
      <button
        class="btn btn-xs btn-circle btn-outline btn-error"
        @click="restart"
      >
        <BIconArrowClockwise />
      </button>
    </div>
  </dialog>
</template>
