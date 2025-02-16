import { Server } from './types';

async function doGet(server: Server) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(server.url, { signal: controller.signal });

    if (response.ok) {
      return server;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function findServer(servers: Server[]) {
  const allResponses = await Promise.allSettled(servers.map(doGet));

  const isAllFailed = allResponses.every(
    response => response.status === 'rejected'
  );

  if (isAllFailed) {
    throw new Error('All servers failed to respond successfully.');
  }

  const fulfilledResponses = allResponses.filter(
    response => response.status === 'fulfilled'
  );

  const allOnlineServers = fulfilledResponses.map(
    response => (response as PromiseFulfilledResult<Server>).value
  );

  allOnlineServers.sort((a, b) => a.priority - b.priority);
  return allOnlineServers[0];
}
