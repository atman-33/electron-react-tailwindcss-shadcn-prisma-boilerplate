import * as dotenv from 'dotenv';
import { app } from 'electron';
import path from 'path';

export type EnvType = {
  DATABASE_URL: string;
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
  UPDATE_INTERVAL_SEC: process.env['UPDATE_INTERVAL_SEC'] as unknown as number,
  AUTO_EDIT_END_SEC: process.env['AUTO_EDIT_END_SEC'] as unknown as number,
};

console.log(`env: ${JSON.stringify(env, null, 2)}`);

export { env, envPath };
