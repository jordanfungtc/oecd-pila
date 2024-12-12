<script setup lang="ts">
import dataCutoffIcon from "/s2/data-cutoff.png";
import hallucinationIcon from "/s2/hallucination.png";
import intelPropIcon from "/s2/intel-prop.png";
</script>

<template>
  <div class="flex gap-12">
    <div class="w-1/3">
      <h2>Limitations of LLMs</h2>
      <p>
        As you have seen, LLMs have limitations that can affect the quality and
        reliability of their responses.
      </p>
      <p>
        Therefore, it is essential to approach LLM responses with caution and
        always verify information independently using search engines such as
        Google. You should also check the credibility of the author and ensure
        that the data is up-to-date.
      </p>
    </div>
    <div class="w-2/3 flex flex-col gap-4 mt-8">
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="dataCutoffIcon" class="w-20 h-20 my-4" />
        <div>
          <h4 class="mt-0">Data Cut-off</h4>
          <p class="text-sm my-0">
            LLMs can only generate responses based their training data. If an
            LLM was trained on data up to 2023, it won't be able to answer
            questions about events in 2024.
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="hallucinationIcon" class="w-20 h-20 my-4" />
        <div>
          <h4 class="mt-0">Hallucinations</h4>
          <p class="text-sm my-0">
            LLMs can only predict the most likely response based on the given
            prompt and may sometimes generate plausible-sounding but incorrect
            responses known as "hallucinations".
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl items-center">
        <img :src="intelPropIcon" class="w-20 h-20 my-4" />
        <div>
          <h4 class="mt-0">Intellectual Property</h4>
          <p class="text-sm my-0">
            As LLMs are trained on text data from different sources, they may
            inadvertently generate text that resembles existing work created by
            others, raising ethical concerns around IP rights.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
