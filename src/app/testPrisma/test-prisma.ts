console.log("Test Prisma script started");

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Prisma Client Initialized");
  const users = await prisma.user.findMany(); 
  console.log(users);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
