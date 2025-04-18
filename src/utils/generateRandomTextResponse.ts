export const generateRandomText = () => {
  const responses = [
    "Okay, I fully understand what you mean.",
    "Thank you for letting me know, I've noted it down.",
    "That's an interesting point you bring up.",
    "Got it, I have registered that information.",
    "Alright, let me take a moment to process that.",
    "Understood, that clarifies things for me.",
    "I've acknowledged your input, thank you.",
    "That makes perfect sense now.",
    "Okay, I see the picture more clearly now.",
    "Sounds good, we can proceed on that basis.",
    "Let me check on that information for you quickly.",
    "Just one moment while I look into that.",
    "Certainly, I can handle that request.",
    "I'll definitely keep that in mind going forward.",
    "Okay, I'm processing the details now.",
    "That's quite clear, I appreciate the explanation.",
    "I appreciate you providing that information.",
    "Will do, consider it underway.",
    "Allow me a moment to review what you've said.",
    "Thanks for the update, that's helpful to know.",
    "Your feedback has been noted.",
    "I'm following your line of reasoning.",
    "Is there anything specific you'd like me to do with that information?",
    "That seems logical based on our conversation.",
    "Okay, moving on to the next step then.",
    "I'll factor that into my response.",
    "Let me ensure I have everything correctly.",
    "Happy to help if you have more questions on this.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
};
