import { Config, JsonDB } from 'node-json-db';

export const jsonDB = new JsonDB(new Config('./fake/db', true, false, '/'));
