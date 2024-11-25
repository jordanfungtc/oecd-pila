const database = [
  "Our online store sells electronic gadgets including smartphones, laptops, home appliances, and accessories.",
  "Our loyalty program allows you to earn points on every purchase, which can be redeemed at $1 per 100 points.",
  "We accept all major credit cards, PayPal, and Apple Pay. Your payment information is secure and encrypted.",
  "All orders are shipped within 1-2 business days and you will receive a tracking number via email.",
  "We offer a 30-day return policy. Please contact us and provide your order number and reason for return.",
  "Our customer service is available Monday to Friday 9am-5pm EST by phone at (555) 123-4567 or via live chat.",
];

const examples = {
  shipping: {
    label: "🚚 Shipping",
    query: "How many days will it take to ship my mobile phone order?",
    simScores: [0.309, 0.174, 0.049, 0.454, 0.329, 0.331],
    augPrompt:
      "<p><i>Context: All orders are shipped within 1-2 business days and you will receive a tracking number via email.</i></p><p><b>Query: How many days will it take to ship my mobile phone order?</b></p>",
    response:
      "<p>Your mobile phone order will be shipped within 1-2 business days.</p>",
  },
  discount: {
    label: "💸 Discount",
    query: "I have 2500 loyalty points, how much discount can I get?",
    simScores: [0.141, 0.533, 0.287, 0.247, 0.308, 0.235],
    augPrompt:
      "<p><i>Context: Our loyalty program allows you to earn points on every purchase, which can be redeemed at $1 per 100 points.</i></p><p><b>Query: I have 2500 loyalty points, how much discount can I get?</b></p>",
    response:
      "<p>You can redeem your 2500 loyalty points for a discount of $25, since the conversion rate is $1 per 100 points.</p>",
  },
  return: {
    label: "📦 Returns",
    query: "I would like to return a laptop I purchased 2 months ago.",
    simScores: [0.313, 0.223, 0.155, 0.286, 0.621, 0.282],
    augPrompt:
      "<p><i>Context: We offer a 30-day return policy. Please contact us and provide your order number and reason for return.</i></p><p><b>Query: I would like to return a laptop I purchased 2 months ago.</b></p>",
    response:
      "<p>Our return policy is for 30 days, so unfortunately, you are unable to return the laptop since it was purchased 2 months ago.</p>",
  },
};

export { database, examples };
