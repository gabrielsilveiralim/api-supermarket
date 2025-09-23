declare class ListProductsService {
    execute(): Promise<{
        name: string;
        id: string;
        category: {
            name: string;
        };
        price: string;
        quantity: number;
        createdBy: {
            name: string;
            role: import("@prisma/client").$Enums.Role;
        };
    }[]>;
}
export { ListProductsService };
//# sourceMappingURL=ListProductService.d.ts.map