import { PrismaClient } from '@prisma/client';
import { env } from '../env';

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
});

export { prismaClient };
