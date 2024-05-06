// File: /prompts/promptUtils.js
export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a helpful assistant that specializes in generating film suggestions.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Generate a film suggestion related to "${input}".`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_film_suggestion",
      description: "Generate a film suggestion based on user input.",
      parameters: {
        type: "object",
        properties: {
          filmTitle: {
            type: "string",
            description: "The suggested film title.",
          },
          description: {
            type: "string",
            description: "A brief description of the suggested film.",
          },
        },
        required: ["filmTitle", "description"]
      },
    },
  ];
}
