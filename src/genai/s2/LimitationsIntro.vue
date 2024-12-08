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
        LLMs have limitations that can affect the quality and reliability of
        their responses. It is crucial to approach their outputs with caution
        and verify information independently.
      </p>
      <p>
        For instance, you can look for sources online that confirm the
        information provided by the LLM, check the credibility of the author,
        and ensure that the data is up-to-date.
      </p>
    </div>
    <div class="w-2/3 flex flex-col gap-4 mt-12">
      <div class="flex gap-8 py-3 px-6 border rounded-xl">
        <img :src="dataCutoffIcon" class="w-16 h-16 my-4" />
        <div>
          <h4 class="mt-0">Data Cut-off</h4>
          <p class="text-sm my-0">
            LLMs can only generate responses based on the information available
            in their training data. If an LLM has a data cut-off in 2023, it
            won't be able to answer questions about events in 2024.
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl">
        <img :src="hallucinationIcon" class="w-16 h-16 my-4" />
        <div>
          <h4 class="mt-0">Hallucinations</h4>
          <p class="text-sm my-0">
            LLMs can only predict the most likely response based on the given
            prompt and may sometimes generate plausible-sounding but incorrect
            responses known as "hallucinations".
          </p>
        </div>
      </div>
      <div class="flex gap-8 py-3 px-6 border rounded-xl">
        <img :src="intelPropIcon" class="w-16 h-16 my-4" />
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
