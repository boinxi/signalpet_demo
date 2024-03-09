const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    database: 'demo',
    password: 'Aa123456',
    user: 'user'
});

export async function query(text: string, params?: any[]) {
    const res = await pool.query(text, params);
    return res.rows;
}
