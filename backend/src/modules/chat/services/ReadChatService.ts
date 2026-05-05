import { prisma } from '../../../database/client.js'
import { io } from '../../../server.js'



class ReadChatService{
    constructor(){}

    async execute(){
        const messages = await prisma.message.findMany({
        take: 50, 
        orderBy: { createdAt: 'asc'
        },

        select:{
            id: true,
            content: true,
            userID: true,            
            user: {
                select: {username : true}
            }
        }
        })
        return messages;
    };
}

export const readchatService = new ReadChatService();