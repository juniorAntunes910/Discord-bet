import { type Request, type Response } from "express";
import { deleteUserService } from "../services/DeleteUserService.js";

class DeleteUserController{
    async handle(req: Request, res: Response){
        try{
            const { id } = req.params;
            const result = await deleteUserService.execute(id as string);
            return res.status(200).json({message: "User Deleted Successffully"});
        }catch(error){
            if(error instanceof Error){
                return res.status(400).json({error: error.message})
            }
            return res.status(400).json({"Error" : "Internal Server Error"});
        }
    }
}
export const deleteUserController = new DeleteUserController();