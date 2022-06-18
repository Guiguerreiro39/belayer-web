import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

import { hashPassword } from "src/common/crypt/hash.crypt"
import { UserInput } from "./dto/user.input"
import { User, UserDocument } from "./models/user.model"

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find().lean()
    }

    async findByUsername(username: string): Promise<User | undefined>{
        return await this.userModel.findOne({username}).lean()
    }

    async create(userInput: UserInput): Promise<User> {
        const hash = await hashPassword(userInput.password)
        return await this.userModel.create({...userInput, password: hash})
    }
}