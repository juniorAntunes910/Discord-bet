import  Express  from "express"
import { createUserController } from "./modules/users/controllers/CreateUserController.js";
import { readUserController } from "./modules/users/controllers/ReadUserController.js";
const router = Express();

router.post('/users', (req, res) => createUserController.handle(req, res));
router.get('/users', (req, res) => readUserController.handle(req, res));
export{ router}