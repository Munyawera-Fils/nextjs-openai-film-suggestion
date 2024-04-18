// File: /prompts/promptUtils.js

export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a film recommendation assistant. Please input a film you enjoyed.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: "Please input a film you enjoyed.",
  };
}

export function getFunctions() {
  return [
    {
      name: "suggest_similar_films",
      description: "Suggest similar films based on a user's input.",
      parameters: {
        type: "object",
        properties: {
          userInput: {
            type: "string",
            description: "The film the user enjoyed",
          },
          suggestedFilms: {
            type: "array",
            description: "An array of suggested films similar to the user's input",
            items: {
              type: "string",
            },
          },
        },
        required: ["userInput", "suggestedFilms"],
      },
    },
  ];
}
