import { prisma } from "../../../database/client.js"

interface IUserRequest{
    id: string;
}

class DeleteUserService{
    async execute( {id}: IUserRequest){
        const existUser = await prisma.user.findUnique({
        where: { id}
        }
        );
        if(!existUser){
            throw new Error("User not found!")
        }
        const user = await prisma.user.delete({where: {id}});
    }
}

export const deleteUserService = new DeleteUserService();