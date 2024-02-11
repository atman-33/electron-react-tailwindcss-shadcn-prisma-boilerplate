import * as dotenv from 'dotenv';
import { app } from 'electron';
import path from 'path';

export type EnvType = {
  DATABASE_URL: string;
};

const envPath =
  process.env.NODE_ENV === 'development'
    ? `${process.cwd()}/.env`
    : `${path.dirname(app.getPath('exe'))}/resources/.env`;

dotenv.config({ path: envPath });

const env: EnvType = {
  DATABASE_URL: process.env['DATABASE_URL'] ?? '',
};

export { env, envPath };
