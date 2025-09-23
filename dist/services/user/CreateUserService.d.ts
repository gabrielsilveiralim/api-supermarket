import { Role } from "@prisma/client";
interface UserRequest {
    name: string;
    email: string;
    password: string;
    role: Role;
}
declare class CreateUserService {
    execute({ name, email, password, role }: UserRequest): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
    }>;
}
export { CreateUserService };
//# sourceMappingURL=CreateUserService.d.ts.map