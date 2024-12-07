<script setup lang="ts">
import musicIcon from "/s1/music.png";
import assistantIcon from "/s1/assistant.png";
import spamIcon from "/s1/spam.png";
import navigationIcon from "/s1/navigation.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>Inputs and Outputs</h2>
      <p>
        To use AI and ML effectively, we need to understand the importance of
        inputs and outputs. Inputs are the information that the AI system needs
        to function, whereas outputs are the results it provides to the user.
      </p>
      <p>
        Without inputs, the AI system would have no data to process, making it
        incapable of making predictions, offering recommendations, or performing
        tasks. Having suitable outputs is equally as important to ensure that
        the AI system is useful and relevant for the user.
      </p>
      <p>
        Some examples of AI systems and their inputs and outputs are provided on
        the right.
      </p>
    </div>

    <div class="w-1/2 flex flex-col gap-2 mt-6">
      <div class="flex gap-6 p-4 border rounded-xl">
        <img :src="musicIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Music Streaming Services</h4>
          <p class="text-sm my-0">
            Inputs: Listening history, preferences → Outputs: Song
            recommendations
          </p>
        </div>
      </div>
      <div class="flex gap-6 p-4 border rounded-xl">
        <img :src="assistantIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Smartphone Assistants</h4>
          <p class="text-sm my-0">
            Inputs: Voice commands, user data → Outputs: Actions to perform
          </p>
        </div>
      </div>
      <div class="flex gap-6 p-4 border rounded-xl">
        <img :src="spamIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Spam Filters</h4>
          <p class="text-sm my-0">
            Inputs: Email sender, text content → Outputs: Classification as spam
            or not spam
          </p>
        </div>
      </div>
      <div class="flex gap-6 p-4 border rounded-xl">
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
