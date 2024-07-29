import { env } from '@/env/server';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { migrate } from 'drizzle-orm/neon-http/migrator';

const sql = neon(env.DATABASE_URL);
const db = drizzle(sql);

async function runMigrate() {
  try {
    await migrate(db, { migrationsFolder: 'src/db/migrations' });

    console.log('migration successful');
  } catch (error) {
    console.log(error);
  }
}

runMigrate();
