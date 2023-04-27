import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  //   const user = await prisma.user.create({ data: { name: "Gabi" } });
  const user = await prisma.user.findMany();
  console.log(user);
}

// 1. The main function is an async function that will be called at the end of the file.
// 2. In case of an error, the catch block will catch the error and log it to the console.
// 3. The finally block will be executed at the end of the script, regardless of whether an error occurred or not.
main()
  .catch((e) => {
    console.log(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//   27:56
