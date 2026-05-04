import { prisma } from '../../../database/client.js'

interface IChatRequest{
    content: string,
    userID: string,
}

class CreateChatService{ 
    constructor(){}

    async execute({ content, userID }: IChatRequest){

        const chat = prisma.message.create({
            data: {
                content,
                userID
            }
        });
        return chat;
    }
}
export const createChatService = new CreateChatService();