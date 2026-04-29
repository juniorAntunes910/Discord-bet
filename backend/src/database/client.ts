import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// 1. Criamos o Pool de conexão do driver nativo (pg)
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

// 2. Criamos o adaptador do Prisma para o Postgres
const adapter = new PrismaPg(pool);

// 3. Instanciamos o Prisma passando o adaptador
export const prisma = new PrismaClient({ adapter });

console.log('🚀 Prisma Client conectado via Postgres Adapter!');