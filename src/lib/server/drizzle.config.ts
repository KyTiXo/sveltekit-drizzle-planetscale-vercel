import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
	schema: './src/lib/server/schema.ts',
	out: './drizzle',
	driver: 'mysql2',
	dbCredentials: {
		connectionString: process.env.DB_URL ?? ''
	}
} satisfies Config;
