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

  // 複数アプリケーションに対応するために、WALを有効化する場合
  // global.prisma.$queryRaw`PRAGMA journal_mode = WAL;`.catch((error) => {
  //   console.log('Failed due to:', error);
  //   process.exit(1);
  // });
}

/**
 * DBコネクションをクローズ
 */
const closeDB = async () => {
  await global.prisma.$disconnect();
};

export { closeDB };
export default global.prisma;
