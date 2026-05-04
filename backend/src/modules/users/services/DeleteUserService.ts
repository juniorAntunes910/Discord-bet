import { prisma } from "../../../database/client.js"


class DeleteUserService{
    async execute( id: string){
        const existUser = await prisma.user.findUnique({
        where: { id }
        }
        );
        if(!existUser){
            throw new Error("User not found!")
        }
        const user = await prisma.user.delete({where: {id}});
    }
}

export const deleteUserService = new DeleteUserService();