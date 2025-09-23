declare class DetailUserService {
    execute(user_id: string): Promise<{
        name: string;
        email: string;
        role: import("@prisma/client").$Enums.Role;
        id: string;
    }>;
}
export { DetailUserService };
//# sourceMappingURL=DetailUserService.d.ts.map