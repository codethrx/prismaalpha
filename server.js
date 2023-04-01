import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();

const client = new PrismaClient();

//reading..
app.get("/api/users", async (req, res) => {
  const users = await client.user.findMany({
    where: {
      //   age: { equals: "2" },
      //   age: { not: "2" },
      //   age: { in: ["2", "4"] },
      //   email: { contains: "c" },
      //   age: { lt: 2 },
      AND: [{ email: { contains: "c" }, role: { equals: "Basic" } }],
      //   writtenPosts:{contains:''}
    },
    // distinct: ["age"],
    // ordeerBy: { age: "asc" },
  });
  res.json(users);
});
//creating..
//updating..
//deleting..
app.listen(4000, () => {
  console.log(`Server listening on port ${4000}`);
});
