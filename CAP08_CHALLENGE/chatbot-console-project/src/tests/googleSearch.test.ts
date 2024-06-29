const axios = require('axios');
const { googleSearch } = require('../services/googleSearch');
const { config } = require('../config/config');

jest.mock('axios');

describe('googleSearch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('debería realizar una búsqueda exitosa y devolver resultados formateados', async () => {
    const mockResponse = {
      data: {
        organic: [
          { title: 'Resultado 1', link: 'http://ejemplo1.com', snippet: 'Descripción 1' },
          { title: 'Resultado 2', link: 'http://ejemplo2.com', snippet: 'Descripción 2' },
        ]
      }
    };
    axios.post.mockResolvedValue(mockResponse);

    const results = await googleSearch('prueba de búsqueda');

    expect(axios.post).toHaveBeenCalledWith(
      'https://google.serper.dev/search',
      {
        q: 'prueba de búsqueda',
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
    expect(results.length).toBe(2);
    expect(results[0]).toEqual({
      title: 'Resultado 1',
      link: 'http://ejemplo1.com',
      snippet: 'Descripción 1'
    });
  });

  test('debería limitar los resultados a 5 incluso si la API devuelve más', async () => {
    const mockResponse = {
      data: {
        organic: Array(10).fill({ title: 'Título', link: 'http://ejemplo.com', snippet: 'Descripción' })
      }
    };
    axios.post.mockResolvedValue(mockResponse);

    const results = await googleSearch('prueba');

    expect(results.length).toBe(5);
  });

  test('debería manejar errores y lanzarlos', async () => {
    const mockError = new Error('Error de API');
    axios.post.mockRejectedValue(mockError);

    await expect(googleSearch('prueba error')).rejects.toThrow('Error de API');
  });
});
