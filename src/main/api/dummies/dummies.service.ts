import { Dummy } from '../../lib/data-access-db/generated';
import { prismaClient } from '../../lib/prisma-client';
import { CreateDummyInput } from './dto/create-dummy-input.dto';

const getDummies = async (): Promise<Dummy[]> => {
  return await prismaClient.dummy.findMany({});
};

const createDummy = async (
  createDummyInput: CreateDummyInput,
): Promise<Dummy> => {
  return await prismaClient.dummy.create({
    data: createDummyInput,
  });
};

const deleteDummies = async (): Promise<void> => {
  await prismaClient.dummy.deleteMany({});
};

export { createDummy, deleteDummies, getDummies };
