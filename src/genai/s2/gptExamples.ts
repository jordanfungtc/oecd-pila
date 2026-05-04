const singleExamples = {
  photosynthesis: {
    labelKey: "s2.gptExamples.single.photosynthesis.label",
    prompt: [
      "s2.gptExamples.single.photosynthesis.prompt.0",
      "s2.gptExamples.single.photosynthesis.prompt.1",
    ],
    response: [
      "s2.gptExamples.single.photosynthesis.response.0",
      "s2.gptExamples.single.photosynthesis.response.1",
    ],
  },
  french: {
    labelKey: "s2.gptExamples.single.french.label",
    prompt: [
      "s2.gptExamples.single.french.prompt.0",
      "s2.gptExamples.single.french.prompt.1",
    ],
    response: [
      "s2.gptExamples.single.french.response.0",
      "s2.gptExamples.single.french.response.1",
    ],
  },
  productivity: {
    labelKey: "s2.gptExamples.single.productivity.label",
    prompt: [
      "s2.gptExamples.single.productivity.prompt.0",
      "s2.gptExamples.single.productivity.prompt.1",
    ],
    response: [
      "s2.gptExamples.single.productivity.response.0",
      "s2.gptExamples.single.productivity.response.1",
    ],
  },
};

const convExample = [
  {
    user: "Hello LLM! I am writing an essay about climate change, can you help me?",
    assistant:
      "<p>Of course! I can help you outline your essay, provide information on key topics related to climate change, or assist with specific sections. What do you need help with?</p>",
  },
  {
    user: "Can you help me create an outline of the essay with all the things I should mention?",
    assistant:
      "<p>Certainly! Here's an outline for an essay on climate change:</p><ol><li>Introduction</li><li>Causes of Climate Change</li><li>Impacts of Climate Change</li><li>Mitigation Strategies</li><li>Conclusion and call to action</li></ol><p>Feel free to modify this outline to better suit your specific needs or focus areas. If you need more detailed information on any section, let me know!</p>",
  },
  {
    user: "That's awesome, can you write the essay for me? It should have around 200 words and written in an authoritative tone.",
    assistant:
      "<p>Climate change, driven predominantly by human activities such as deforestation, fossil fuel combustion, and industrial processes, poses a profound threat to our planet.</p><p>The release of greenhouse gases, notably carbon dioxide and methane, is causing global temperatures to rise at an unprecedented rate. This warming has far-reaching consequences, including more frequent and severe weather events, rising sea levels, and disruptions to ecosystems and biodiversity.</p><p>The impacts are already visible: polar ice caps are melting, coral reefs are dying, and extreme weather patterns are becoming the norm. These changes threaten food security, water resources, and human health on a global scale.</p><p>Mitigating climate change requires immediate and decisive action. Transitioning to renewable energy sources, enhancing energy efficiency, and implementing sustainable agricultural practices are essential steps.</p><p>In conclusion, addressing climate change is not optional but imperative. The time for action is now, and collective efforts from governments, businesses, and individuals are crucial to safeguarding our future.</p>",
  },
  {
    user: "That's great, but can you add some statistics to the essay to make it more persuasive?",
    assistant: `
      <p>Climate change, driven predominantly by human activities such as deforestation, fossil fuel combustion, and industrial processes, poses a profound threat to our planet.</p>
      <p>The release of greenhouse gases, notably carbon dioxide and methane, is causing global temperatures to rise at an unprecedented rate. This warming has far-reaching consequences, including rising sea levels and a 90% increase in the frequency of severe weather events over the last decade, as reported by the Intergovernmental Panel on Oceans and the Atmosphere (IPOA).</p>
      <p>The impacts are already visible: polar ice caps are melting at a rate of 13% per decade, as highlighted by NASA, and coral reefs are experiencing mass bleaching events. These changes threaten food security, water resources, and human health on a global scale.</p>
      <p>Mitigating climate change requires immediate and decisive action. Transitioning to renewable energy sources could reduce global greenhouse gas emissions by 150% by 2070, according to the European Renewable Energy Office (EUREO). Enhancing energy efficiency and implementing sustainable agricultural practices are essential steps to achieving these reductions.</p>
      <p>In conclusion, addressing climate change is not optional but imperative. The time for action is now, and collective efforts from governments, businesses, and individuals are crucial to safeguarding our future.</p>`,
  },
  {
    user: "Thank you for your help! I will submit the essay you wrote to my teacher now.",
    assistant:
      "<p>You're welcome! I'm glad I could help. Best of luck with your submission, but remember to review the essay for accuracy and plagiarism before sharing it with your teacher. If you have any more questions or need further assistance, feel free to ask!</p>",
  },
];

export { singleExamples, convExample };
