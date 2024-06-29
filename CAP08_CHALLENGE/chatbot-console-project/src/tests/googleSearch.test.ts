import { googleSearch } from '../services/googleSearch';
import axios from 'axios';

jest.mock('axios', () => ({
post: jest.fn(),
}));
describe('googleSearch', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  it('should return formatted search results', async () => {
    const mockResponse = {
      data: {
        organic: [
          { title: 'Test Title 1', link: 'http://test1.com', snippet: 'Test Snippet 1' },
          { title: 'Test Title 2', link: 'http://test2.com', snippet: 'Test Snippet 2' },
        ],
      },
    };

    mockedAxios.post.mockResolvedValue(mockResponse);

    const results = await googleSearch('test query');

    expect(results).toHaveLength(2);
    expect(results[0]).toEqual({
      title: 'Test Title 1',
      link: 'http://test1.com',
      snippet: 'Test Snippet 1',
    });
  });

  it('should handle errors', async () => {
    mockedAxios.post.mockRejectedValue(new Error('API Error'));

    await expect(googleSearch('test query')).rejects.toThrow('API Error');
  });
});
