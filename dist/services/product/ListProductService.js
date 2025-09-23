"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductsService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ListProductsService {
    async execute() {
        const product = await prisma_1.default.product.findMany({
            select: {
                id: true,
                name: true,
                price: true,
                quantity: true,
                category: { select: { name: true } },
                createdBy: { select: { name: true, role: true } }
            }
        });
        return product;
    }
}
exports.ListProductsService = ListProductsService;
//# sourceMappingURL=ListProductService.js.map