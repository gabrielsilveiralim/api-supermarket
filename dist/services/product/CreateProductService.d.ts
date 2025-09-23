interface ProductRequest {
    creator: string;
    name: string;
    price: string;
    quantity: number;
    category: string;
}
declare class CreateProductService {
    execute({ creator, name, price, quantity, category }: ProductRequest): Promise<{
        name: string;
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
export { CreateProductService };
//# sourceMappingURL=CreateProductService.d.ts.map