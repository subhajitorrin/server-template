import prisma from "../prisma";
import { Request, Response } from "express";

async function addUser(req: Request, res: Response): Promise<void> {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

async function getAllUsers(req: Request, res: Response): Promise<void> {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export { addUser, getAllUsers };
