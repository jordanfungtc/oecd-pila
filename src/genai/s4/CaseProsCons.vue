<script setup lang="ts">
import { S4 } from "../states";
import { store } from "../../store";
import caseProIcon from "/s4/case-pro.png";
import caseConIcon from "/s4/case-con.png";
</script>

<template>
  <h2>Case Study</h2>
  <p>
    <strong>Task: </strong>
    Identify the pros and cons of the use of AI in this case study. Consider
    potential benefits as well as the ethical and environmental risks while you
    list out the pros and cons.
  </p>
  <div class="grid grid-cols-2 gap-8">
    <!-- Pros -->
    <div>
      <div class="flex gap-4 items-center">
        <img :src="caseProIcon" class="w-8 h-8 my-4" />
        <h3 class="my-0">Pros</h3>
      </div>
      <div class="flex flex-col gap-4">
        <input
          v-for="(p, i) in [S4.CASE_PRO_1, S4.CASE_PRO_2, S4.CASE_PRO_3]"
          type="text"
          class="input input-bordered w-full"
          :placeholder="'Pro ' + (i + 1)"
          v-model="store.state[p.state]"
        />
      </div>
    </div>
    <!-- Cons -->
    <div>
      <div class="flex gap-4 items-center">
        <img :src="caseConIcon" class="w-8 h-8 my-4" />
        <h3 class="my-0">Cons</h3>
      </div>
      <div class="flex flex-col gap-4">
        <input
          v-for="(c, i) in [S4.CASE_CON_1, S4.CASE_CON_2, S4.CASE_CON_3]"
          type="text"
          class="input input-bordered w-full"
          :placeholder="'Con ' + (i + 1)"
          v-model="store.state[c.state]"
        />
      </div>
    </div>
  </div>
</template>
