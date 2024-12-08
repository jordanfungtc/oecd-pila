<script setup lang="ts">
import { BIconFileEarmarkTextFill } from "bootstrap-icons-vue";
import oecdAiIcon from "/s4/oecd-ai-logo.jpg";
import aiActIcon from "/s4/ai-act-logo.png";
</script>

<template>
  <h2>Regulation of AI</h2>
  <p>
    As AI technologies continue to advance, there is a growing need for
    regulation to ensure that the risks posed by AI systems are addressed
    appropriately. National governments and organizations such as the OECD and
    the European Union have published documents detailing safe, responsible AI
    use cases and identifying those with high or unacceptable risks.
  </p>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <img :src="oecdAiIcon" class="h-16 w-auto mt-6" />
      <p>
        The OECD's values-based principles for AI aim to promote the use of AI
        that is innovative and trustworthy and that respects human rights and
        democratic values.
      </p>
      <a
        :href="`https://oecd.ai/en/ai-principles`"
        target="_blank"
        class="no-underline text-primary flex gap-2 items-center"
      >
        <BIconFileEarmarkTextFill />
        OECD AI Principles Overview
      </a>
    </div>
    <div>
      <img :src="aiActIcon" class="h-16 w-auto mt-6" />
      <p>
        The European Union Artificial Intelligence Act categorizes AI systems by
        their risk levels and imposes regulations to safeguard people's safety
        and fundamental rights.
      </p>
      <a
        href="https://artificialintelligenceact.eu/ai-act-explorer/"
        target="_blank"
        class="no-underline text-primary flex gap-2 items-center"
      >
        <BIconFileEarmarkTextFill />
        EU Artificial Intelligence Act Explorer
      </a>
    </div>
  </div>
</template>
