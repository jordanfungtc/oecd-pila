<script setup lang="ts">
import { store } from "../store";
import Agent from "@knowlearning/agents/browser.js";
import {
  BIconArrowClockwise,
  BIconCodeSlash,
  BIconBoxArrowRight,
} from "bootstrap-icons-vue";

const restart = async () => {
  Object.keys(store.state).forEach((key) => delete store.state[key]);
};
</script>

<template>
  <div class="flex flex-row items-center py-2 px-4 gap-4 bg-primary text-white">
    <!-- Left Content -->
    <div class="flex items-center gap-4 w-full">
      <img src="/pila-logo.png" alt="PILA Logo" class="h-6" />
      <h3>{{ store.title }}</h3>
    </div>

    <!-- Right Content -->
    <div class="flex items-center justify-end gap-2 w-full">
      <p class="text-sm">{{ store.auth?.info?.name }}</p>
      <button class="btn btn-xs btn-circle" onclick="restart_modal.showModal()">
        <BIconArrowClockwise />
      </button>
      <button class="btn btn-xs btn-circle" onclick="dev_modal.showModal()">
        <BIconCodeSlash />
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
      <a
        href="https://jordanfung.com"
        target="_blank"
        class="btn btn-xs btn-neutral btn-outline outline-white text-white btn-circle"
      >
        JF
      </a>
    </div>
  </div>

  <!-- Restart Modal -->
  <dialog id="restart_modal" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">Restart</h3>
      <p class="py-4">
        Are you sure you want to restart? All progress will be lost.
      </p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn btn-neutral mr-2" @click="restart">Restart</button>
          <button class="btn">Cancel</button>
        </form>
      </div>
    </div>
  </dialog>

  <!-- Dev Modal -->
  <dialog id="dev_modal" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">User</h3>
      <p class="py-4">{{ store.auth.user }} ({{ store.auth.provider }})</p>
      <h3 class="text-lg font-bold">State</h3>
      <div class="text-xs py-4">{{ store.state }}</div>
      <h3 class="text-lg font-bold">Metadata</h3>
      <div class="text-xs py-4">{{ store.metadata }}</div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
