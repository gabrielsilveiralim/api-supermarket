import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { Role } from "@prisma/client";


function parseRole(roleStr: string): Role {
  const upperRole = roleStr.toUpperCase();

  // Role válido do enum
  const validRoles = Object.values(Role);

  return upperRole as Role;
}
class CreateUserController{
    async handle(req:Request, res:Response){
        const { name, email, password, role } = req.body;

        //converte string role para o enum Role
        const roleEnum = parseRole(role);

        const createUserService = new CreateUserService();

        //valor convertido para o service
        const user = await createUserService.execute({
         name,
         email,
         password,
         role: roleEnum,
        });
        
        return res.json(user)
    }
}

export { CreateUserController }