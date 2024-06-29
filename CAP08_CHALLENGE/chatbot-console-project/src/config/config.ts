import dotenv from 'dotenv';

dotenv.config();

export const config = {
  groqApiKey: process.env.GROQ_API_KEY,
  serperApiKey: process.env.SERPER_API_KEY,
  groqModel: 'mixtral-8x7b-32768', // Puedes cambiar esto según tus preferencias
  searchLanguage: 'es-419',
  searchCountry: 'ar',
};

if (!config.groqApiKey || !config.serperApiKey) {
  throw new Error('Las claves API de Groq y Serper deben estar configuradas en el archivo .env');
}
