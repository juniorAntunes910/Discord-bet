import  Express  from "express"
import { createUserController } from "./modules/users/controllers/CreateUserController.js";
import { readUserController } from "./modules/users/controllers/ReadUserController.js";
import { updateUserController } from "./modules/users/controllers/UpdateUserController.js";
import { deleteUserController } from "./modules/users/controllers/DeleteUserService.js";
const router = Express();

router.post('/users', (req, res) => createUserController.handle(req, res));
router.get('/users', (req, res) => readUserController.handle(req, res));
router.patch('/users/:id', (req, res) => updateUserController.handle(req, res));
router.delete('/users/:id', (req, res) => deleteUserController.handle(req, res));

export{ router}