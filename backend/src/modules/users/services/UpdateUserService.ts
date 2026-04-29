import { prisma } from '../../../database/client.js'

interface IUserUpdate {
    id: string;
    username?: string;
    email?: string;
}

class UpdateUserService{
    
    async execute({id, username, email}: IUserUpdate){
        const existUser = await prisma.user.findUnique({
            where: {id}
        })
        if(!existUser){
            throw new Error("User not Found!")
        }

        if(email && email != existUser.email){
            const emailInUse = await prisma.user.findUnique({
                where: {email}
            })
            if(emailInUse){
                throw new Error("This email is already in use");
            }
        }
        const user = await prisma.user.update({
            where: {id},
            data: {username, email},
            select: {id: true, username: true, email: true}
        });
        return user;
    }
}

export const updateUserService = new UpdateUserService();