import dotenv from 'dotenv';

dotenv.config();

/**
 * Configuration settings for the application.
 * 
 * @property {string} groqApiKey - The API key for the GROQ API.
 * @property {string} serperApiKey - The API key for the Serper API.
 * @property {string} groqModel - The GROQ model to use, which can be changed according to preferences.
 * @property {string} searchLanguage - The language to use for search queries.
 * @property {string} searchCountry - The country to use for search queries.
 */
export const config = {
  groqApiKey: process.env.GROQ_API_KEY,
  serperApiKey: process.env.SERPER_API_KEY,
  groqModel: 'mixtral-8x7b-32768', // Puedes cambiar esto según tus preferencias
  searchLanguage: 'es-419',
  searchCountry: 'ar',
};

/**
 * Checks that the required GROQ and Serper API keys are configured in the .env file.
 * If either key is missing, an error is thrown.
 */
if (!config.groqApiKey || !config.serperApiKey) {
  throw new Error('Las claves API de Groq y Serper deben estar configuradas en el archivo .env');
}
