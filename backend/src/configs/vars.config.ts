import dotenv from 'dotenv';
dotenv.config();

export const DATA_SOURCE = {
    mysql: {
        DB_HOST: process.env.MY_SQL_DB_HOST,
        DB_USER: process.env.MY_SQL_DB_USER,
        DB_PASSWORD: process.env.MY_SQL_DB_PASSWORD,
        DB_DATABASE: process.env.MY_SQL_DB_DATABASE
    }
}