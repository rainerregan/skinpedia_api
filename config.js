import * as dotenv from 'dotenv'

dotenv.config()

const config = {
  db: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  listPerPage: 10,
};

export default config;