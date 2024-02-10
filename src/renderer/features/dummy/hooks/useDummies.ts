import { CreateDummyInput } from '@main/api/dummies/dto/create-dummy-input.dto';
import { Dummy } from '@prisma/client';
import { useCallback } from 'react';

export const useDummies = () => {
  /**
   * Get all dummies
   */
  const getDummies = useCallback(async (): Promise<Dummy[]> => {
    try {
      return await window.db.getDummies();
    } catch (error) {
      throw error;
    }
  }, []);

  /**
   * Create dummy
   */
  const createDummy = useCallback(
    async (createDummyInput: CreateDummyInput): Promise<Dummy> => {
      try {
        return await window.db.createDummy(createDummyInput);
      } catch (error) {
        throw error;
      }
    },
    [],
  );

  /**
   * Delete all dummies
   */
  const deleteDummies = useCallback(async (): Promise<void> => {
    try {
      await window.db.deleteDummies();
    } catch (error) {
      throw error;
    }
  }, []);

  return { getDummies, createDummy, deleteDummies };
};
