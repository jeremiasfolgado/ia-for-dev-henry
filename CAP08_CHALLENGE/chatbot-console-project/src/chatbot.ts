import Groq from 'groq-sdk';
import { config } from './config/config';
import { googleSearch } from './services/googleSearch';
import { Conversation } from './models/conversation';

const groq = new Groq({ apiKey: config.groqApiKey });

/**
 * Handles a user's input and generates a response based on a Google search.
 *
 * @param userInput - The user's input text.
 * @param conversation - The current conversation object.
 * @returns The generated response.
 */
export async function chatbot(userInput: string, conversation:Conversation): Promise<string> {
  conversation.addMessage('user', userInput);

  // Realizar búsqueda en Google
  const searchResults = await googleSearch(userInput);

  // Preparar el contexto para Groq
  const context = searchResults.map(result => `${result.title}\n${result.snippet}\nFuente: ${result.link}`).join('\n\n');

  const chatCompletion = await groq.chat.completions.create({
    messages: [
      { role: 'system', content: 'Eres un asistente útil que proporciona información basada en búsquedas en Internet. Cita tus fuentes al final de tu respuesta.' },
      ...conversation.getMessages(),
      { role: 'user', content: `Basándote en la siguiente información, responde a la pregunta del usuario: "${userInput}"\n\nContexto de búsqueda:\n${context}` }
    ],
    model: config.groqModel,
    stream: true,
  });

  let response = '';
  for await (const chunk of chatCompletion) {
    const content = chunk.choices[0]?.delta?.content || '';
    process.stdout.write(content);
    response += content;
  }
  console.log('\n');

  conversation.addMessage('assistant', response);
  return response;
}
