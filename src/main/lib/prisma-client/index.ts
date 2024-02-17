import { PrismaClient } from '../data-access-db/generated';
import { env } from '../env';

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
});

export { prismaClient };
