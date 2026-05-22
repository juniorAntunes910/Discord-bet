import { prisma } from '../../../database/client.js'

interface IRequest {
    title: string;
    description?: string;
    options: string[];
}

class CreatMarketService{
  async execute({title, description, options}: IRequest){
    const market = await prisma.market.create({
      data: {
        title, 
        description,
        status: "OPEN"
      }
    });

    await prisma.outcome.createMany({
      data: options.map((optionName) => ({
        name: optionName,
        price: 0.5,
        marketId: market.id
      }))
    });
  }  
}




/* 
model Market {
  id String @id @default(uuid())
  title String 
  description String?
  status String @default("OPEN")
  resolvedAt DateTime?
  winnerID String? 
  outcomes Outcome[]
  createdAt DateTime @default(now())
}*/