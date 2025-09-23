import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/CreateProductController';
import { ListProductsController } from './controllers/product/ListProductController';


const router = Router();

//rota user
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

//rota category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)

//rota product
router.post('/product', isAuthenticated, new CreateProductController().handle )
router.get('/products',  new ListProductsController().handle);


export { router };