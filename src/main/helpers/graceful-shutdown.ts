import { Server } from 'http'

const gracefulShutdown = (server: Server, connections: any[]) => {
  return () => {
    console.log('Received kill signal, shutting down gracefully')

    server.close(() => {
        console.log('Closed out remaining connections');
        process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down')
        process.exit(1)
    }, 10000);

    connections.forEach(curr => curr.end())
    setTimeout(() => connections.forEach(curr => curr.destroy()), 5000)
  }
}

export {
  gracefulShutdown
}
