// services/CreateChatService.ts
import { io } from "../../../server.js";
import { prisma } from "../../../database/client.js"; 

interface CreateChatDTO {
    content: string;
    userID: string;
}

class CreateChatService {
    async execute({ content, userID }: CreateChatDTO) {
        
        const chat = await prisma.message.create({
            data: {
                content: content,
                userID: userID // Relacionamento
            },
            include: {
                user: true 
            }
        });

        io.emit("newMessage", chat);

        return chat;
    }
}

export const createChatService = new CreateChatService();