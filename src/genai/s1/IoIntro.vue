<script setup lang="ts">
import musicIcon from "/s1/music.png";
import assistantIcon from "/s1/assistant.png";
import spamIcon from "/s1/spam.png";
import navigationIcon from "/s1/navigation.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/2">
      <h2>Identifying Inputs and Outputs</h2>
      <p>
        To effectively use AI and ML, we need to clearly identify the inputs and
        outputs. Inputs are the information that the AI system needs in order to
        operate, while outputs are the results it provides to the user.
      </p>
      <p>
        Without inputs, the AI system would have no data to process, making it
        incapable of making predictions, offering recommendations, or performing
        tasks. Similarly, having appropriate outputs is crucial to ensuring that
        the AI system is useful and relevant to the user.
      </p>
      <p>
        Some examples of AI systems and their inputs and outputs are provided on
        the right.
      </p>
    </div>

    <div class="w-1/2 flex flex-col gap-2 mt-6">
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="musicIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Music Streaming Services</h4>
          <p class="text-sm my-0">
            Inputs: Listening history, preferences<br />
            Outputs: Song recommendations
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="assistantIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Smartphone Assistants</h4>
          <p class="text-sm my-0">
            Inputs: Voice commands, user data<br />
            Outputs: Actions to perform
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="spamIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Spam Filters</h4>
          <p class="text-sm my-0">
            Inputs: Email sender, text content<br />
            Outputs: Spam or not spam
          </p>
        </div>
      </div>
      <div class="flex gap-8 p-4 border rounded-xl items-center">
        <img :src="navigationIcon" class="w-16 h-16 my-0" />
        <div>
          <h4 class="mt-0">Navigation Systems</h4>
          <p class="text-sm my-0">
            Inputs: Current location, destination, map<br />
            Outputs: Best route to take
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
