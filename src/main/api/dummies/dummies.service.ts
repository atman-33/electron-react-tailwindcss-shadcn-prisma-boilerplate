import { Dummy, PrismaClient } from '../../lib/data-access-db/generated';
import { CreateDummyInput } from './dto/create-dummy-input.dto';
import { UpdateDummyInput } from './dto/update-dummy-input.dto';

class DummiesService {
  /**
   * コンストラクタ
   */
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private readonly prisma: PrismaClient) {}

  async getDummies(): Promise<Dummy[]> {
    return await this.prisma.dummy.findMany({});
  }

  async createDummy(createDummyInput: CreateDummyInput): Promise<Dummy> {
    return await this.prisma.dummy.create({
      data: createDummyInput,
    });
  }

  async updateDummy(updateDummyInput: UpdateDummyInput): Promise<Dummy | null> {
    const find = await this.prisma.dummy.findUnique({
      where: {
        id: updateDummyInput.id,
      },
    });

    if (!find) {
      return null;
    }
    return await this.prisma.dummy.update({
      where: {
        id: updateDummyInput.id,
      },
      data: updateDummyInput,
    });
  }

  async deleteDummies(): Promise<void> {
    await this.prisma.dummy.deleteMany({});
  }
}

export { DummiesService };
