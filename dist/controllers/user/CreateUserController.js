"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUserService_1 = require("../../services/user/CreateUserService");
const client_1 = require("@prisma/client");
function parseRole(roleStr) {
    const upperRole = roleStr.toUpperCase();
    // Role válido do enum
    const validRoles = Object.values(client_1.Role);
    return upperRole;
}
class CreateUserController {
    async handle(req, res) {
        const { name, email, password, role } = req.body;
        //converte string role para o enum Role
        const roleEnum = parseRole(role);
        const createUserService = new CreateUserService_1.CreateUserService();
        //valor convertido para o service
        const user = await createUserService.execute({
            name,
            email,
            password,
            role: roleEnum,
        });
        return res.json(user);
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map