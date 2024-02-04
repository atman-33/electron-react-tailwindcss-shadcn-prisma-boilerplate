import { Dummy, PrismaClient } from '@prisma/client';
import { CreateDummyInput } from './dto/create-dummy-input.dto';

const getDummies = async (prisma: PrismaClient): Promise<Dummy[]> => {
  return await prisma.dummy.findMany();
};

const createDummy = async (
  prisma: PrismaClient,
  createDummyInput: CreateDummyInput,
): Promise<Dummy> => {
  return await prisma.dummy.create({
    data: createDummyInput,
  });
};

export { createDummy, getDummies };
