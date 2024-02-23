import { Bulletin } from '../../lib/data-access-db/generated';
import prismaClient from '../../lib/prisma-client';
import { UpsertBulletinInput } from './dto/upsert-bulletin-input.dto';

/**
 * 連絡板のデータを全て取得する。
 * @returns
 */
const getBulletins = async (): Promise<Bulletin[] | null> => {
  return await prismaClient.bulletin.findMany();
};

/**
 * 連絡板のデータを取得する。
 * @param id
 * @returns
 */
const getBulletin = async (id: number): Promise<Bulletin | null> => {
  return await prismaClient.bulletin.findFirst({
    where: {
      id,
    },
  });
};

/**
 * 連絡板のデータを新規作成または更新する。
 * @param upsertBulletinInput
 * @returns
 */
const upsertBulletin = async (
  upsertBulletinInput: UpsertBulletinInput,
): Promise<Bulletin> => {
  return await prismaClient.bulletin.upsert({
    where: {
      id: upsertBulletinInput.id,
    },
    create: upsertBulletinInput,
    update: upsertBulletinInput,
  });
};

export { getBulletin, getBulletins, upsertBulletin };
