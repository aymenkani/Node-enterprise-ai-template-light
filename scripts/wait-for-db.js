const net = require('net');
const { URL } = require('url');

/**
 * Robustly wait for the database to be ready by checking port availability.
 * Uses native Node.js 'net' module to avoid external dependencies like 'pg'.
 */
async function waitForDb() {
  const dbUrl = process.env.DATABASE_URL;

  if (!dbUrl) {
    console.error('--- Database Wait: DATABASE_URL is not set. Skipping wait. ---');
    process.exit(0);
  }

  let host, port;
  try {
    const parsedUrl = new URL(dbUrl);
    host = parsedUrl.hostname;
    port = parseInt(parsedUrl.port || '5432', 10);
  } catch (err) {
    console.error('--- Database Wait: Failed to parse DATABASE_URL. ---');
    process.exit(1);
  }

  console.log(`--- Database Wait: Checking connection to ${host}:${port}... ---`);

  const maxRetries = 30;
  const delay = 2000; // 2 seconds

  for (let i = 0; i < maxRetries; i++) {
    try {
      await new Promise((resolve, reject) => {
        const socket = net.createConnection(port, host);
        socket.on('connect', () => {
          socket.end();
          resolve();
        });
        socket.on('error', (err) => {
          socket.destroy();
          reject(err);
        });
        socket.setTimeout(2000);
        socket.on('timeout', () => {
          socket.destroy();
          reject(new Error('Timeout'));
        });
      });

      console.log('--- Database Wait: SUCCESS! Database port is open. ---');
      process.exit(0);
    } catch (err) {
      console.log(`--- Database Wait: Attempt ${i + 1}/${maxRetries} failed (${err.message}). Retrying in ${delay / 1000}s... ---`);
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  console.error('--- Database Wait: FAILED! Could not connect to database after maximum retries. ---');
  process.exit(1);
}

waitForDb();
