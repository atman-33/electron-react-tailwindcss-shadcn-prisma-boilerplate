// import { Dummy } from '../../lib/data-access-db/generated';
import { Dummy } from '../../lib/data-access-db/generated';
import prismaClient from '../../lib/prisma-client';
import { CreateDummyInput } from './dto/create-dummy-input.dto';
import { UpdateDummyInput } from './dto/update-dummy-input.dto';

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

const updateDummy = async (
  updateDummyInput: UpdateDummyInput,
): Promise<Dummy | null> => {
  const find = await prismaClient.dummy.findUnique({
    where: {
      id: updateDummyInput.id,
    },
  });

  if (!find) {
    return null;
  }
  return await prismaClient.dummy.update({
    where: {
      id: updateDummyInput.id,
    },
    data: updateDummyInput,
  });
};

const deleteDummies = async (): Promise<void> => {
  await prismaClient.dummy.deleteMany({});
};

export { createDummy, deleteDummies, getDummies, updateDummy };
