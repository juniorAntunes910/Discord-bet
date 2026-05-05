import { type Request, type Response } from "express";
import { readchatService } from "../services/ReadChatService.js";

    class ReadChatController {
        async handle(req: Request, res: Response ){
            try{
                const users = await readchatService.execute();
                return res.json(users);
            }catch(error){
                if(error instanceof Error){
                    res.status(400).json({error: error.message});
                }
                res.status(400).json({"Error": "Internal Server Error"});
            }
        }
    }

    export const readChatController = new ReadChatController();