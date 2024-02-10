import { CreateDummyInput } from '@main/api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@prisma/client';

export const useDummies = () => {
  const getDummies = async (): Promise<Dummy[]> => {
    try {
      return await window.db.loadDummies();
    } catch (error) {
      throw error;
    }
  };

  const createDummy = async (
    createDummyInput: CreateDummyInput,
  ): Promise<Dummy> => {
    try {
      return await window.db.createDummy(createDummyInput);
    } catch (error) {
      throw error;
    }
  };

  return { getDummies, createDummy };
};
