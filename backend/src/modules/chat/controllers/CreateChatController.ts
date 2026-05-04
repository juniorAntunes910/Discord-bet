import { type Request, type Response } from "express";
import { createChatService } from "../services/CreateChatService.js";
import * as z from 'zod';


class createChatController{
    async handle(req: Request, res: Response){
        const chatScheme = z.object({
            content: z.string().min(1, "The message must contain at least 3 characters"),
            userID: z.string()
        });
        
        try{
            { content, userID } = chatScheme.parse(req.body);
        
        } catch(error){
            if(error instanceof Error){
                res.status(400).json({error: error.message});
            }
            res.status(400).json({"Error" : "Internal Server Error"})
        }

    }
}