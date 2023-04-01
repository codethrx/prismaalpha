import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();

const client = new PrismaClient();
app.get("/api/users", async (req, res) => {
  const users = await client.user.findMany();
  res.status(200).json(users);
});
app.post("/api/users", async (req, res) => {
  const user = await client.user.create({ data: { email: "abc@gmail.com" } });
  res.status(200).json(user);
});
app.listen(4000, () => {
  console.log(`Server listening on port ${4000}`);
});
