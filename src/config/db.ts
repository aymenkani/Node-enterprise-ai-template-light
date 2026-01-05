import { PrismaClient } from '@prisma/client';
import logger from '../utils/logger';

const prisma: PrismaClient = new PrismaClient();

async function connectDB() {
  try {
    logger.info('Attempting to connect to the database...');
    await prisma.$connect();
    logger.info('Database connected successfully');
  } catch (error) {
    logger.error('CRITICAL: Database connection failed.');
    logger.error(`Error details: ${error}`);
    throw error; // Let the caller handle the exit
  }
}

export { prisma, connectDB };
