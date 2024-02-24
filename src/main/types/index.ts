export type EnvType = {
  DATABASE_URL: string;
  SHOW_ON_TOP: boolean;
  SHOW_SUB_MENU: boolean;
  UPDATE_INTERVAL_SEC: number;
  AUTO_EDIT_END_SEC: number;
};

export type ConfigStoreType = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  fontSize?: string;
};
