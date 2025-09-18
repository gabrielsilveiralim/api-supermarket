import { Role } from "@prisma/client";
import { hash } from "bcryptjs";
import prismaClient from "../../prisma";


interface UserRequest{
    name: string;
    email: string;
    password: string;
    role: Role;
}

class CreateUserService{
    async execute( {name, email, password, role }: UserRequest){

        //verificar se enviou emial
        if(!email){
            throw new Error("Email incorrect")
        }

        //verificar email cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
                role: role,
            },
            select:{
                id: true,
                name: true,
                email: true,
                role: true
            }
        })

        return user;
    }
}

export { CreateUserService }