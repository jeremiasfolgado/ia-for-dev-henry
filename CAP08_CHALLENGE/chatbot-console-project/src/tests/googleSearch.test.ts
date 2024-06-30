const axios = require("axios");
const { googleSearch } = require("../services/googleSearch");
const { config } = require("../config/config");

jest.mock("axios");

describe("googleSearch", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should perform a successful search and return formatted results.", async () => {
    const mockResponse = {
      data: {
        organic: [
          {
            title: "Resultado 1",
            link: "http://ejemplo1.com",
            snippet: "Descripción 1",
          },
          {
            title: "Resultado 2",
            link: "http://ejemplo2.com",
            snippet: "Descripción 2",
          },
        ],
      },
    };
    axios.post.mockResolvedValue(mockResponse);

    const results = await googleSearch("prueba de búsqueda");

    expect(axios.post).toHaveBeenCalledWith(
      "https://google.serper.dev/search",
      {
        q: "prueba de búsqueda",
        gl: config.searchCountry,
        hl: config.searchLanguage,
      },
      {
        headers: {
          "X-API-KEY": config.serperApiKey,
          "Content-Type": "application/json",
        },
      }
    );
    expect(results.length).toBe(2);
    expect(results[0]).toEqual({
      title: "Resultado 1",
      link: "http://ejemplo1.com",
      snippet: "Descripción 1",
    });
  });

  test("should limit the results to 5 even if the API returns more than 5.", async () => {
    const mockResponse = {
      data: {
        organic: Array(10).fill({
          title: "Título",
          link: "http://ejemplo.com",
          snippet: "Descripción",
        }),
      },
    };
    axios.post.mockResolvedValue(mockResponse);

    const results = await googleSearch("prueba");

    expect(results.length).toBe(5);
  });

  test("should handle errors and launch them", async () => {
    const mockError = new Error("Error de API");
    axios.post.mockRejectedValue(mockError);

    await expect(googleSearch("prueba error")).rejects.toThrow("Error de API");
  });

  test("should handle empty query string gracefully", async () => {
    jest.spyOn(axios, "post").mockResolvedValue({ data: { organic: [] } });

    const results = await googleSearch("");

    expect(results).toEqual([]);
  });

  test("should map title from response to SearchResult.title", async () => {
    const mockResponse = {
      data: {
        organic: [
          {
            title: "Result 1",
            link: "http://example.com/1",
            snippet: "Snippet 1",
          },
          {
            title: "Result 2",
            link: "http://example.com/2",
            snippet: "Snippet 2",
          },
          {
            title: "Result 3",
            link: "http://example.com/3",
            snippet: "Snippet 3",
          },
          {
            title: "Result 4",
            link: "http://example.com/4",
            snippet: "Snippet 4",
          },
          {
            title: "Result 5",
            link: "http://example.com/5",
            snippet: "Snippet 5",
          },
        ],
      },
    };

    jest.spyOn(axios, "post").mockResolvedValue(mockResponse);

    const results = await googleSearch("test query");

    expect(results).toHaveLength(5);
    expect(results[0].title).toBe("Result 1");
    expect(results[1].title).toBe("Result 2");
    expect(results[2].title).toBe("Result 3");
    expect(results[3].title).toBe("Result 4");
    expect(results[4].title).toBe("Result 5");
  });
      // catches network errors
      test('should catch network errors when they occur', async () => {
        jest.spyOn(axios, 'post').mockRejectedValue(new Error('Network Error'));
  
        await expect(googleSearch('test query')).rejects.toThrowError('Network Error');
      });
});

