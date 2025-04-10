export const generateRandomTextResponse = () => {
  const responses = [
    "Okay, I understand.",
    "Thanks for letting me know.",
    "How else can I assist you?",
    "Interesting point.",
    "Got it.",
    "Let me process that.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};
