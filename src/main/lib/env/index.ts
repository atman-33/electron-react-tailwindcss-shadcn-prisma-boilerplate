import * as dotenv from 'dotenv';
import path from 'path';

export type EnvType = {
  DATABASE_URL: string;
};

// 開発モードと本番モードの判定
const isProduction = process.env.NODE_ENV === 'production';

// .envファイルのパスを設定
const envPath = isProduction ? path.resolve(__dirname, '.env') : '.env';

dotenv.config({ path: envPath });

export const env: EnvType = {
  DATABASE_URL: process.env['DATABASE_URL'] ?? '',
};
