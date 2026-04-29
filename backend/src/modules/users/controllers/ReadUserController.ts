import { type Request, type Response } from "express";
import { readUserService } from "../services/ReadUserService.js";
import { prisma } from "../../../database/client.js";

     class ReadUserController{
        async handle(req: Request, res: Response){
            try{
                const users = await readUserService.execute();
                return res.json(users);
            }catch(error){
                if(error instanceof Error){
                    res.status(400).json({error: error.message});
                }
                res.status(400).json({error: "Internal Server Error"});
            }
        }
    }
export const readUserController = new ReadUserController();