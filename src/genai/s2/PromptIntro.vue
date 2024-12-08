<script setup lang="ts">
import qaIcon from "/s2/qa.png";
import contentIcon from "/s2/content.png";
import programmingIcon from "/s2/programming.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-2/5">
      <h2>Writing Prompts</h2>
      <p>
        The prompt is the input that you provide to the LLM, which can be in the
        form of questions or instructions. The LLM will then generate a response
        to the prompt based on the data that it has been trained on.
      </p>
      <p>
        LLMs can be used on a wide range of tasks, including question answering,
        content creation, programming, and more. Some examples of prompts for
        different tasks are provided on the right.
      </p>
    </div>
    <div class="w-3/5 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="qaIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">Question Answering</h4>
          <ul class="text-sm my-0">
            <li>Who invented the first light bulb?</li>
            <li>Explain the concept of gravity.</li>
            <li>How can I improve my writing skills?</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="contentIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">Content Creation</h4>
          <ul class="text-sm my-0">
            <li>Write an essay outline about climate change.</li>
            <li>Compose a poem about the beauty of autumn.</li>
            <li>Draft an email to offer refund to a customer.</li>
          </ul>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="programmingIcon" class="w-20 h-20 my-0" />
        <div>
          <h4 class="mt-0">Programming</h4>
          <ul class="text-sm my-0">
            <li>Write a Python function to calculate the factorial.</li>
            <li>Debug the following code: priint("Hello, World!").</li>
            <li>Create a website to showcase my projects.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
