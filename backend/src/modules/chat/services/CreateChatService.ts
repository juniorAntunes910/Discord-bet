import { prisma } from '../../../database/client.js'
import { io } from '../../../server.js'

interface IChatRequest{
    content: string,
    userID: string,
}

class CreateChatService{ 
    constructor(){}

    async execute({ content, userID }: IChatRequest){

        const chat = await prisma.message.create({
            data: {
                content,
                userID
            },
            include:{
                user: {
                    select: {username: true}
                }
            }
        });

        io.emit("New message", {
            id: chat.id,
            content: chat.content,
            username: chat.user.username,
            userID: chat.userID
        })

        return chat;
    }
}
export const createChatService = new CreateChatService();