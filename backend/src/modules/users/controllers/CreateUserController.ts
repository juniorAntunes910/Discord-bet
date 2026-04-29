import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService.js";
import * as z from 'zod';

export class CreateUserController{

    async handle(req: Request, res: Response){

        const userSchema = z.object({
            username: z.string().min(3, "The name needs at least 3 characters"),
            email: z.string().email("Invalid email format"),
            password: z.string().min(6, "The password must have at least 6 letters"),
            role: z.string().optional(),
            coins: z.number().optional()
        })

        try{
            const { username, email, password, role, coins } = userSchema.parse(req.body);
            CreateUserService.
        }
    }
}