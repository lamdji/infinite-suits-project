console.log("Test Prisma script started");

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Prisma Client Initialized");
  const user = await prisma.user.findMany(); 
  console.log(user);
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
