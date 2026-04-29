import  Express  from "express"
import { createUserController } from "./modules/users/controllers/CreateUserController.js";
import { readUserController } from "./modules/users/controllers/ReadUserController.js";
import { updateUserController } from "./modules/users/controllers/UpdateUserController.js";
const router = Express();

router.post('/users', (req, res) => createUserController.handle(req, res));
router.get('/users', (req, res) => readUserController.handle(req, res));
router.patch('/users/:id', (req, res) => updateUserController.handle(req, res));

export{ router}