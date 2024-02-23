import * as dotenv from 'dotenv';
import { app } from 'electron';
import path from 'path';

export type EnvType = {
  DATABASE_URL: string;
  SHOW_ON_TOP: boolean;
  SHOW_SUB_MENU: boolean;
  UPDATE_INTERVAL_SEC: number;
  AUTO_EDIT_END_SEC: number;
};

const envPath =
  process.env.NODE_ENV === 'development'
    ? `${process.cwd()}/.env`
    : `${path.dirname(app.getPath('exe'))}/.env`;

dotenv.config({ path: envPath });

const env: EnvType = {
  DATABASE_URL: process.env['DATABASE_URL'] ?? '',
  SHOW_ON_TOP: Number(process.env['SHOW_ON_TOP']) === 1,
  SHOW_SUB_MENU: Number(process.env['SHOW_SUB_MENU']) === 1,
  UPDATE_INTERVAL_SEC: Number(process.env['UPDATE_INTERVAL_SEC']),
  AUTO_EDIT_END_SEC: Number(process.env['AUTO_EDIT_END_SEC']),
};

console.log(`env: ${JSON.stringify(env, null, 2)}`);

export { env, envPath };
