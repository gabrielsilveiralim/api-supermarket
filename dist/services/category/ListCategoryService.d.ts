declare class ListCategoryService {
    execute(): Promise<{
        name: string;
        id: string;
        creator: {
            name: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }[]>;
}
export { ListCategoryService };
//# sourceMappingURL=ListCategoryService.d.ts.map