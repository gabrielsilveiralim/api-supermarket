"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListProductController_1 = require("./controllers/product/ListProductController");
const UpdateProductController_1 = require("./controllers/product/UpdateProductController");
const DeleteProductController_1 = require("./controllers/product/DeleteProductController");
const router = (0, express_1.Router)();
exports.router = router;
//rota user
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//rota category
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.get('/category', new ListCategoryController_1.ListCategoryController().handle);
//rota product
router.post('/product', isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get('/products', new ListProductController_1.ListProductsController().handle);
router.put('/product/:id', isAuthenticated_1.isAuthenticated, new UpdateProductController_1.UpdateProductController().handle);
router.delete('/product/:id', isAuthenticated_1.isAuthenticated, new DeleteProductController_1.DeleteProductController().handle);
//# sourceMappingURL=routes.js.map