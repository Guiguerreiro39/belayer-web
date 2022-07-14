import { Injectable } from "@nestjs/common"

import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

import { hashPassword } from "src/common/crypt/hash.crypt"
import { UserInput } from "./dto/user.input"

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany()
    }

    async findByEmail(email: string): Promise<User>{
        return await this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }

    async create(userInput: UserInput): Promise<User> {
        const hash = await hashPassword(userInput.password)
        return await this.prisma.user.create({
            data: {...userInput, password: hash}
        })
    }
}