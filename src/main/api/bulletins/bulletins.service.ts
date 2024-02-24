import { Bulletin, PrismaClient } from '../../lib/data-access-db/generated';
import prismaClient from '../../lib/prisma-client';
import { UpdateBulletinIsEditingInput } from './dto/update-bulletin-is-editing-input.dto';
import { UpsertBulletinInput } from './dto/upsert-bulletin-input.dto';

class BulletinsService {
  /**
   * コンストラクタ
   */
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * 連絡板のデータを全て取得する。
   * @returns
   */
  async getBulletins(): Promise<Bulletin[] | null> {
    return await this.prisma.bulletin.findMany();
  }

  /**
   * 連絡板のデータを取得する。
   * @param id
   * @returns
   */
  async getBulletin(id: number): Promise<Bulletin | null> {
    return await this.prisma.bulletin.findFirst({
      where: {
        id,
      },
    });
  }

  /**
   * 連絡板のデータを新規作成または更新する。
   * @param upsertBulletinInput
   * @returns
   */
  async upsertBulletin(
    upsertBulletinInput: UpsertBulletinInput,
  ): Promise<Bulletin> {
    return await this.prisma.bulletin.upsert({
      where: {
        id: upsertBulletinInput.id,
      },
      create: upsertBulletinInput,
      update: upsertBulletinInput,
    });
  }

  /**
   * 連絡板の編集中状態を更新する。
   * @param updateBulletinIsEditingInput
   * @returns
   */
  async updateBulletinIsEditing(
    updateBulletinIsEditingInput: UpdateBulletinIsEditingInput,
  ): Promise<Bulletin> {
    return await this.prisma.bulletin.update({
      where: {
        id: updateBulletinIsEditingInput.id,
      },
      data: {
        isEditing: updateBulletinIsEditingInput.isEditing,
        editStartedAt: updateBulletinIsEditingInput.editStartedAt,
      },
    });
  }
}

export const bulletinsService = new BulletinsService(prismaClient);
