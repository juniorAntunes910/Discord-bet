import { use } from 'react';
import { prisma } from '../../../database/client.js'
import bcrypt from 'bcrypt'

/*
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'USER',
    "coins" DOUBLE PRECISION NOT NULL DEFAULT 1000.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
*/


interface IUserRequest {
    username: string,
    email: string, 
    password: string,
    role?: string,
    coins?: number,
}

export class CreateUserService {
    constructor(){}

    async execute( {username, email, password, role, coins}: IUserRequest){

        const userExist = await prisma.user.findUnique({
            where: { email}
        });

        if(userExist){
            throw new Error("This email is already registered in our system!")
        }  
        const hashedPassword = await bcrypt.hash(password, 8);

        const user = await prisma.user.create({
            data: {
                username, 
                email,
                password: hashedPassword,
                role: role || "USER",
                coins: coins || 1000.0
            }
        });
        return user
    }
}

