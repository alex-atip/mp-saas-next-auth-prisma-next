import { PrismaClient } from "@prisma/client";

declare global {
  /*eslint-disable no-var */
  var prisma: PrismaClient | undefined;
  /* eslint-enable no-var */
}

const db = new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export default db;