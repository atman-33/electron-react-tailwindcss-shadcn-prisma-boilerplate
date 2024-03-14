import { CreateDummyInput, UpdateDummyInput } from '@shared/api/dto';
import { Dummy } from '@shared/api/models';
import { useCallback } from 'react';

export const useDummies = () => {
  /**
   * Get all dummies
   */
  const getDummies = useCallback(async (): Promise<Dummy[]> => {
    try {
      return await window.dbDummies.getDummies();
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
        return await window.dbDummies.createDummy(createDummyInput);
      } catch (error) {
        throw error;
      }
    },
    [],
  );

  /**
   * Update dummy
   */
  const updateDummy = useCallback(
    async (updateDummyInput: UpdateDummyInput): Promise<Dummy> => {
      try {
        return await window.dbDummies.updateDummy(updateDummyInput);
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
      await window.dbDummies.deleteDummies();
    } catch (error) {
      throw error;
    }
  }, []);

  return { getDummies, createDummy, deleteDummies, updateDummy };
};
