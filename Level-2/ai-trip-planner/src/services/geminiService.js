import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Use a valid public model
const MODEL_ID = 'gemini-2.0-flash';

let genAI;
let model;

if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
  // Provide the model + optional generationConfig
  model = genAI.getGenerativeModel({
    model: MODEL_ID,
    generationConfig: {
      maxOutputTokens: 1024,
      temperature: 0.7,
      topP: 0.9,
    },
  });
}

export const generateTripPlan = async (
  destination,
  days,
  budget,
  interests
) => {
  if (!model) {
    throw new Error('Please configure your Gemini API key');
  }

  const prompt = `Create a detailed ${days}-day trip itinerary for ${destination} with a budget of ${budget}. 
The traveler is interested in: ${interests}.

Please provide:
1. Day-by-day itinerary with activities
2. Recommended places to visit
3. Estimated costs for each activity
4. Best time to visit each place
5. Local food recommendations
6. Travel tips

Format the response in a clear structure.`;

  try {
    const result = await model.generateContent(
      prompt
    );

    const response = await result.response;

    // Some models return .parts array
    if (Array.isArray(response.parts)) {
      return response.parts.map((p) => p.text).join('\n');
    }

    // Fallback if .text() exists
    return typeof response.text === 'function'
      ? response.text()
      : response.text ?? '';
  } catch (error) {
    console.error('Error generating trip plan:', error);
    throw error;
  }
};

export const isApiConfigured = () => {
  return Boolean(API_KEY);
};
