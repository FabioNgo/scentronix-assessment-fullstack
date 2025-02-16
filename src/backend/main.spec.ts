import { findServer } from './main'; // Adjust path as needed
import { Server } from './types';

// Mock the fetch function for testing purposes
global.fetch = jest.fn();

describe('findServer', () => {
  it('should return the lowest priority server when all servers are online', async () => {
    const servers: Server[] = [
      { url: 'http://server1.com', priority: 2 },
      { url: 'http://server2.com', priority: 1 },
      { url: 'http://server3.com', priority: 3 },
    ];

    // Mock successful responses for each server
    servers.forEach(() => {
      (global.fetch as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve({ ok: true, status: 200 } as Response)
      );
    });

    const result = await findServer(servers);
    expect(result).toEqual(servers.find(s => s.priority === 1));
  });

  it('should throw an error if all servers are offline', async () => {
    const servers: Server[] = [
      { url: 'http://server1.com', priority: 2 },
      { url: 'http://server2.com', priority: 1 },
    ];

    // Mock failed responses for each server
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.reject(new Error('Failed to fetch'))
    );

    await expect(findServer(servers)).rejects.toThrowError(
      'All servers failed to respond successfully.'
    );
  });

  it('should return the highest priority server when some servers are offline', async () => {
    const servers: Server[] = [
      { url: 'http://server1.com', priority: 2 },
      { url: 'http://server2.com', priority: 1 },
      { url: 'http://server3.com', priority: 3 },
    ];

    // Mock successful response for server3, failed for others.
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch'))
    );
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('Failed to fetch'))
    );
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: true, status: 200 } as Response)
    );

    const result = await findServer(servers);
    expect(result).toEqual(servers.find(s => s.priority === 3));
  });

  it('should handle HTTP error responses correctly', async () => {
    const server: Server = { url: 'http://server1.com', priority: 1 };
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({ ok: false, status: 500 } as Response)
    );

    await expect(findServer([server])).rejects.toThrow();
  });

  it('should handle timeout correctly', async () => {
    const server: Server = { url: 'http://server1.com', priority: 1 };
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(
        new DOMException('The operation was aborted.', 'AbortError')
      )
    );

    await expect(findServer([server])).rejects.toThrowError(
      'All servers failed to respond successfully.'
    );
  });

  it('should log error if all servers fail and throw an error', async () => {
    const servers: Server[] = [
      { url: 'https://does-not-work.perfume.new', priority: 1 },
      { url: 'https://gitlab.com', priority: 4 },
      { url: 'http://app.scnt.me', priority: 3 },
      { url: 'https://offline.scentronix.com', priority: 2 },
    ];

    // Mock failed responses for each server
    (global.fetch as jest.Mock).mockImplementation(url => {
      return Promise.reject(new Error(`Failed to fetch ${url}`));
    });

    try {
      const server = await findServer(servers);
      console.log(server);
    } catch (error) {
      console.log(error);
      expect(error).toEqual(
        new Error('All servers failed to respond successfully.')
      );
    }
  });
});
