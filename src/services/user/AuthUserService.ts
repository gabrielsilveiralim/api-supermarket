import { compare } from "bcryptjs";
import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import { Role } from "@prisma/client";

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute({ email, password }: AuthRequest){
        
        //verificar email cadastrado
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        if(!user){
            throw new Error("User/password incorrect")
        }

        //verificar senha correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new Error("User/password incorrect")
        }

        //token do usuario
        const token = sign(
            {
                name: user.name,
                email: user.email,
                Role: user.role
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            Role: user.role,
            token: token
        }
    }
}

export { AuthUserService }