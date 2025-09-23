interface CategoryRequest {
    name: string;
    creator: string;
}
declare class CreateCategoryService {
    execute({ name, creator }: CategoryRequest): Promise<{
        name: string;
        id: string;
        creator: {
            name: string;
            role: import("@prisma/client").$Enums.Role;
            id: string;
        };
    }>;
}
export { CreateCategoryService };
//# sourceMappingURL=CreateCategoryService.d.ts.map