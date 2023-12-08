import { Prisma } from "@prisma/client";


export class Book implements Prisma.PostCreateInput{
     id: number;
     title: string;
     description?: string;
}