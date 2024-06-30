import axios from 'axios';
import { config } from '../config/config';

export interface SearchResult {
  title: string;
  link: string;
  snippet: string;
}

/**
 * Performs a Google search using the Serper API and returns the top 5 search results.
 *
 * @param query - The search query to be executed.
 * @returns An array of `SearchResult` objects containing the title, link, and snippet for each search result.
 */
export async function googleSearch(query: string): Promise<SearchResult[]> {
  try {
    const response = await axios.post(
      'https://google.serper.dev/search',
      {
        q: query,
        gl: config.searchCountry,
        hl: config.searchLanguage,
      },
      {
        headers: {
          'X-API-KEY': config.serperApiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.organic.slice(0, 5).map((result: any) => ({
      title: result.title,
      link: result.link,
      snippet: result.snippet,
    }));
  } catch (error) {
    console.error('Error al realizar la búsqueda en Google:', error);
    throw error;
  }
}
