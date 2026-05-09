<script setup lang="ts">
import Agent from "@knowlearning/agents/browser.js";
import { store } from "./store";
import NavBar from "./util/NavBar.vue";
import LangSelector from "./util/LangSelector.vue";
import { inject } from "@vercel/analytics";

Agent.environment().then(async ({ auth }) => {
  if (auth.provider === "anonymous") {
    // Redirect to login
    await Agent.login("google");
  } else {
    store.auth = auth;
    // @ts-ignore
    store.state = await Agent.state("my-state");
    // @ts-ignore
    store.metadata = await Agent.metadata("my-state");
    store.isLoading = false;
  }
});

inject();
</script>

<template>
  <!-- Loading Spinner -->
  <div v-if="store.isLoading" class="flex items-center justify-center h-screen">
    <span class="loading loading-spinner loading-lg"></span>
  </div>

  <!-- Main App -->
  <div
    v-else
    class="flex flex-col prose-headings:font-['Rubik'] bg-blue-100 min-h-screen"
  >
    <NavBar />
    <div class="p-10 prose max-w-none justify-center">
      <RouterView />
    </div>
    <LangSelector />
  </div>
</template>
