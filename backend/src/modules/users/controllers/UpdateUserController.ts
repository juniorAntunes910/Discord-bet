import { updateUserService } from "../services/UpdateUserService.js";
import { type Request, type Response } from "express";

    class UpdateUserController{
        async handle(req: Request, res: Response){
            try{
                const { id } = req.params as {id: string};
                const {username, email} = req.body;

                const user = await updateUserService.execute({id, username, email});
                return res.json(user);
            }catch(error){
                if(error instanceof Error){
                    return res.status(400).json({error: error.message})
                }
                return res.status(400).json({error: "Internal Server Error"})
            }

        }
    }
    export const updateUserController = new UpdateUserController();