<script setup lang="ts">
import transportIcon from "/s1/b-transport.png";
import environmentIcon from "/s1/b-environment.png";
import healthcareIcon from "/s1/b-healthcare.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>Designing an AI System</h2>
      <p>
        As we saw in each of the applications, there is a clear problem that
        needs to be solved using AI. The AI system is designed to take relevant
        input data, analyze it, and predict an output. Finally, the output can
        be used by the user to solve the problem.
      </p>
      <p>
        Now it is your turn to design an AI system. You must first identify a
        problem that you want to solve in a specific sector. Some examples are
        provided on the right.
      </p>
    </div>
    <div class="w-3/5 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="transportIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">Transportation</h4>
          <p class="text-sm my-0">
            Traffic congestion is increasingly a concern in urban areas. Could
            AI analyse commuter data and traffic patterns to optimise bus routes
            and schedules, making travel more efficient?
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="environmentIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">Environment</h4>
          <p class="text-sm my-0">
            Energy wastage and pollution are major environmental issues. Could
            AI use data on resource consumption to identify areas for
            improvement and reduce waste?
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="healthcareIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">Healthcare</h4>
          <p class="text-sm my-0">
            Managing disease outbreaks is crucial for public health. Could AI
            use data from hospitals to support the healthcare system in
            identifying and responding to potential outbreaks?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
