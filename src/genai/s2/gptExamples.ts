const singleExamples = {
  photosynthesis: {
    label: "🌿 Photosynthesis",
    prompt: [
      "What is photosynthesis?",
      "Explain the process of photosynthesis in plants in a way that a 5-year-old can understand. The response should have 150 words and written in a friendly and fun tone.",
    ],
    response: [
      "<p>Photosynthesis is the process by which green plants, algae, and some bacteria convert light energy, usually from the sun, into chemical energy in the form of glucose. This process occurs mainly in the chloroplasts of plant cells, using chlorophyll to capture light energy. The general equation for photosynthesis can be summarized as:</p><p>6 CO₂ + 6 H₂O + light energy → C₆H₁₂O₆ + 6 O₂</p><p>This means that carbon dioxide and water, using light energy, are transformed into glucose and oxygen.</p>",
      "<p>Sure! 🌞 Photosynthesis is like a magic recipe that plants use to make their food! First, they need three special things: sunshine, air, and water. 🌱☀️💧 </p><p>When the sun shines, plants open tiny little doors on their leaves to take in air, which has something called carbon dioxide. They also drink up water from the soil through their roots. Then, with the help of the sunlight, the plants mix the water and air together in their leaves. It’s like a fun science experiment! 🎉 </p><p>When they mix everything, they make their own food, which helps them grow big and strong. And guess what? They also make oxygen, which is the fresh air we breathe! So, plants are super important because they help us and make our world beautiful. 🌍💚 Isn’t that amazing?</p>",
    ],
  },
  french: {
    label: "🇫🇷 French Revolution",
    prompt: [
      "Tell me about the French Revolution.",
      "Provide a detailed overview of the French Revolution, including its causes, key events, and outcomes. The response should be in bulleted lists and maintain a neutral tone.",
    ],
    response: [
      "<p>The French Revolution (1789-1799) was a period of radical social and political change in France that led to the end of absolute monarchy, the rise of democracy, and the establishment of the French Republic. Key events included the Storming of the Bastille, the Declaration of the Rights of Man and of the Citizen, and the Reign of Terror. The revolution inspired movements worldwide and significantly influenced modern political ideologies.</p>",
      "<h3>Overview of the French Revolution</h3><h4>Causes</h4><ul><li><strong>Social Inequality</strong>: France&#39;s society was divided into three estates: the clergy (First Estate), the nobility (Second Estate), and the common people (Third Estate). The Third Estate bore the tax burden and had little political power.</li><li><strong>Economic Hardship</strong>: Financial crises due to debt from wars (e.g., American Revolution), poor harvests, and extravagant spending by the monarchy led to widespread discontent.</li><li><strong>Enlightenment Ideas</strong>: Philosophers like Voltaire, Rousseau, and Montesquieu promoted ideas of liberty, equality, and fraternity, challenging traditional authority.</li><li><strong>Weak Leadership</strong>: King Louis XVI&#39;s indecisiveness and inability to address financial issues contributed to the crisis.</li></ul><h4>Key Events</h4><ul><li><strong>Estates-General (May 1789)</strong>: Convened to address the financial crisis; the Third Estate broke away to form the National Assembly.</li><li><strong>Tennis Court Oath (June 1789)</strong>: Members of the National Assembly pledged not to disband until a new constitution was established.</li><li><strong>Storming of the Bastille (July 14, 1789)</strong>: A symbolic act of revolution, it marked the uprising against the monarchy.</li><li><strong>Declaration of the Rights of Man and of the Citizen (August 1789)</strong>: A foundational document asserting individual rights and the principles of liberty and equality.</li><li><strong>Reign of Terror (1793-1794)</strong>: Led by Robespierre and the Committee of Public Safety, this period was marked by mass executions of perceived enemies of the revolution.</li><li><strong>Fall of Robespierre (July 1794)</strong>: His execution ended the Reign of Terror and led to the Thermidorian Reaction.</li></ul><h4>Outcomes</h4><ul><li><strong>End of Monarchy</strong>: The revolution led to the abolition of the monarchy and the establishment of the First French Republic.</li><li><strong>Rise of Napoleon Bonaparte</strong>: The instability following the revolution paved the way for Napoleon&#39;s rise to power, eventually leading to the Napoleonic Wars.</li><li><strong>Social Changes</strong>: The revolution promoted secularism, the spread of nationalism, and changes in class structure.</li><li><strong>Influence on Other Revolutions</strong>: The French Revolution inspired uprisings and movements for democracy and rights across Europe and the Americas.</li></ul>",
    ],
  },
  productivity: {
    label: "🚀 Productivity Tips",
    prompt: [
      "How can I be more productive?",
      "Provide some productivity tips for high school students, along with practical examples. The response should be an essay of 200 words written in an encouraging tone.",
    ],
    response: [
      "<p>To be more productive, try these strategies: </p><ol><li><strong>Set Clear Goals</strong>: Define specific, measurable, achievable, relevant, and time-bound (SMART) goals.</li><li><strong>Prioritize Tasks</strong>: Use methods like the Eisenhower Matrix to distinguish between what&#39;s urgent and important.</li><li><strong>Time Management</strong>: Implement techniques like the Pomodoro Technique, where you work for 25 minutes and take a 5-minute break.</li><li><strong>Limit Distractions</strong>: Identify and minimize distractions in your work environment.</li><li><strong>Use Tools</strong>: Utilize productivity apps and tools to keep track of tasks and deadlines.</li></ol><p>Consistency and reflection on your progress can also help enhance productivity over time.</p>",
      "<p>Improving productivity as a high school student is essential for achieving academic success and personal growth. Here are some effective tips to help you maximize your time and efforts.</p><p>First, create a structured schedule. Use a planner or digital calendar to block out time for classes, homework, and extracurricular activities. For example, dedicate specific hours each day for studying, ensuring you stay on track with assignments and projects.</p><p>Second, break tasks into smaller, manageable chunks. Instead of tackling a large project all at once, divide it into sections and set deadlines for each part. This approach not only makes tasks less overwhelming but also provides a sense of accomplishment as you complete each segment.</p><p>Additionally, minimize distractions. Find a quiet study space and limit your phone usage during study sessions. Apps that block distracting websites can also help you stay focused. For instance, try using the Pomodoro Technique: study for 25 minutes, then take a 5-minute break.</p><p>Lastly, prioritize self-care. Ensure you get enough sleep, eat well, and take breaks to recharge. A healthy mind and body are crucial for maintaining high productivity levels. Remember, consistency is key—stay committed to these practices, and you’ll see remarkable improvements in your productivity!</p>",
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
