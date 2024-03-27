import { Request, Response, Router } from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const authRouter = Router();

authRouter.post("/auth", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || password !== password) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const user = await prisma.usuario.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      if (user.senha === password) {
        const expiresIn = 60 * 60 * 24;

        const token = jwt.sign({ user }, user.senha, { expiresIn });
        console.log(token);

        res.status(200).json({
          token: `${token}`,
          user: {
            id: user.id,
            name: user.nome,
            email: user.email,
          },
        });
      } else {
        res.status(401).json({ message: "Credenciais inválidas" });
      }
    } else {
      res.status(401).json({ message: "Credenciais inválidas" });
    }
  } catch (error) {
    console.log("Erro de autenticação: ", error);
    res.status(500).json({ message: "Erro de autenticação" });
  }
});

export default authRouter;