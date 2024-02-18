export interface UpsertBulletinInput {
  id: number;
  message: string;
  isEditing: number;
  editedAt: Date;
}
