import { pool } from './connection.js';

export default class Db {
    constructor() {}
    async query(sql: string, args: any[] = []) {
        const client = await pool.connect();
        try {
            return await client.query(sql, args);
        } finally {
            client.release();
        }
    }
}