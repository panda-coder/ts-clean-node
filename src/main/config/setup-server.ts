import { ILogger } from '@/shared/contracts';
import { Server } from 'http'
import { gracefulShutdown } from '../helpers'

let connections: any[] = [];

const setupServer = (server: Server, logger: ILogger) => {
  server.on('connection', connection => {
    connections.push(connection);
    connection.on('close', () => connections = connections
      .filter(curr => curr !== connection));
  });
  
  
  process.once('SIGUSR2', gracefulShutdown(server, connections));
  process.on('SIGTERM', gracefulShutdown(server, connections));
  process.on('SIGINT', gracefulShutdown(server, connections));
  
  setInterval(() => server.getConnections(
    (err, connections) => logger.info(`${connections} connections currently open`)
  ), 5000);
}

export {
  setupServer
}
