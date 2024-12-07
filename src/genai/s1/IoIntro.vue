<script setup lang="ts">
import assistantIcon from "/s1/assistant.png";
import spamIcon from "/s1/spam.png";
import navigationIcon from "/s1/navigation.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>Inputs and Outputs</h2>
      <p>
        To understand AI and ML, we need to understand the importance of inputs
        and outputs. The inputs are the information the AI system needs to
        function, and outputs are the results it provides to the user.
      </p>
      <p>
        Without inputs, the AI would not have any data to work with, meaning it
        would not be able to make predictions, provide recommendations, or
        perform tasks.
      </p>
      <p>
        For instance, without the input of the last ten songs you played, the AI
        system built into your music streaming app wouldn’t know what song to
        recommend next.
      </p>
    </div>

    <div class="w-1/2 flex flex-col gap-4 mt-6">
      <h4>Examples</h4>
      <div class="flex gap-8 p-4 border rounded-xl">
        <img :src="assistantIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Smartphone Assistants</h4>
          <p class="text-sm my-0">
            Inputs: Voice commands, user data → Outputs: Actions to perform
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl">
        <img :src="spamIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Spam Filters</h4>
          <p class="text-sm my-0">
            Inputs: Email sender, text content → Outputs: Classification as spam
            or not spam
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl">
        <img :src="navigationIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Navigation Systems</h4>
          <p class="text-sm my-0">
            Inputs: Current location, destination, traffic data → Outputs: Best
            route to take
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
