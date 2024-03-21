import { Request, Response, Router } from "express";
import { PrismaClient  } from "@prisma/client";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const usersRouter = Router();

usersRouter.get("/user", async (req: Request, res: Response) => {
    try{
        const authorizationHeader = req.headers.authorization;

        if(!authorizationHeader){
            return res.status(401).json({ message: "Token Invalido" });
        }

        const token = authorizationHeader.split(" ")[1];
        if(!token){
            return res.status(401).json({ message: "Token Invalido" });
        }
        
        const data = jwt.decode(token);
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({ message: "Erro de buscar dados do usuario" });
    }
})

usersRouter.post("/user", async (req: Request, res: Response) => {
    try{
        const { name, email, password } = req.body;
        
        // Verifica se o email já está em uso
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ message: "O email fornecido já está em uso." });
        }

        const role = "user";

        const user = await prisma.user.create({
            data:{
                name,
                email,
                password,
                role
            }
        });

        res.status(201).json(user);
    }
    catch(error){
        console.error("Erro ao criar usuário", error);
        res.status(500).json({ message: "Erro ao criar usuário" });
    }
})

export default usersRouter