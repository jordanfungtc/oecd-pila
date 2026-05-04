const database = [
  "s3.ragExamples.database.0",
  "s3.ragExamples.database.1",
  "s3.ragExamples.database.2",
  "s3.ragExamples.database.3",
  "s3.ragExamples.database.4",
  "s3.ragExamples.database.5",
];

const examples = {
  shipping: {
    labelKey: "s3.ragExamples.examples.shipping.label",
    queryKey: "s3.ragExamples.examples.shipping.query",
    simScores: [0.309, 0.174, 0.049, 0.454, 0.329, 0.331],
    augPromptKey: "s3.ragExamples.examples.shipping.augPrompt",
    responseKey: "s3.ragExamples.examples.shipping.response",
  },
  discount: {
    labelKey: "s3.ragExamples.examples.discount.label",
    queryKey: "s3.ragExamples.examples.discount.query",
    simScores: [0.141, 0.533, 0.287, 0.247, 0.308, 0.235],
    augPromptKey: "s3.ragExamples.examples.discount.augPrompt",
    responseKey: "s3.ragExamples.examples.discount.response",
  },
  return: {
    labelKey: "s3.ragExamples.examples.return.label",
    queryKey: "s3.ragExamples.examples.return.query",
    simScores: [0.313, 0.223, 0.155, 0.286, 0.621, 0.282],
    augPromptKey: "s3.ragExamples.examples.return.augPrompt",
    responseKey: "s3.ragExamples.examples.return.response",
  },
};

export { database, examples };
