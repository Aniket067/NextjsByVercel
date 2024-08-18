import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// POSTGRES_URL="postgres://default:OhoJzsTSH56p@ep-late-shape-a491h9rz-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// POSTGRES_PRISMA_URL="postgres://default:OhoJzsTSH56p@ep-late-shape-a491h9rz-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require&pgbouncer=true&connect_timeout=15"
// POSTGRES_URL_NO_SSL="postgres://default:OhoJzsTSH56p@ep-late-shape-a491h9rz-pooler.us-east-1.aws.neon.tech:5432/verceldb"
// POSTGRES_URL_NON_POOLING="postgres://default:OhoJzsTSH56p@ep-late-shape-a491h9rz.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require"
// POSTGRES_USER="default"
// POSTGRES_HOST="ep-late-shape-a491h9rz-pooler.us-east-1.aws.neon.tech"
// POSTGRES_PASSWORD="OhoJzsTSH56p"
// POSTGRES_DATABASE="verceldb"