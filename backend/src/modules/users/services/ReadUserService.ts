import { prisma } from '.././../../database/client.js'

class ReadUserService{
    async execute(){
        const users = await prisma.user.findMany({
            select: {
                id: true,
                username: true,
                password: true, 
                role: true, 
                coins: true
            }
        });
        return users;
    }
}
export const readUserService = new ReadUserService();