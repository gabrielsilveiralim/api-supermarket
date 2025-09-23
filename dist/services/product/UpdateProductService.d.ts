interface UpdateProductRequest {
    id: string;
    name?: string;
    price?: string;
    quantity?: number;
    category?: string;
}
declare class UpdateProductService {
    execute({ id, name, price, quantity, category }: UpdateProductRequest): Promise<{
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
    }>;
}
export { UpdateProductService };
//# sourceMappingURL=UpdateProductService.d.ts.map