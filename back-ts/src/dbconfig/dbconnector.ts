import { Pool } from 'pg';
import { config as configDotenv } from 'dotenv';

configDotenv();

const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

const pool = new Pool({
    connectionString: `postgres://${db_user}:${db_password}@${db_host}:${db_port}/${db_name}`,
});

export default pool;