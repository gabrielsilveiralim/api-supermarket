interface AuthRequest {
    email: string;
    password: string;
}
declare class AuthUserService {
    execute({ email, password }: AuthRequest): Promise<{
        id: string;
        name: string;
        email: string;
        Role: import("@prisma/client").$Enums.Role;
        token: string;
    }>;
}
export { AuthUserService };
//# sourceMappingURL=AuthUserService.d.ts.map