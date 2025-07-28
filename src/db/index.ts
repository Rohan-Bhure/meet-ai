import { drizzle } from 'drizzle-orm/neon-http';
import 'dotenv/config';
const db = drizzle(process.env.DATABASE_URL!);
// const result = await db.execute('select 1');
console.log(process.env.DATABASE_URL);
