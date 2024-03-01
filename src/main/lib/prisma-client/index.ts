import { PrismaClient } from '../data-access-db/generated';
import { env } from '../env';

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var prisma: PrismaClient;
}

if (!global.prisma) {
  global.prisma = new PrismaClient({
    datasources: {
      db: {
        url: env.DATABASE_URL,
      },
    },
  });
}

/**
 * DBコネクションをクローズ
 */
const closeDB = async () => {
  await global.prisma.$disconnect();
};

export { closeDB };
export default global.prisma;
