import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import { UserInput } from "./dto/user.input"
import { User, UserDocument } from "./models/user.model"

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find().lean()
    }

    async findById(id: string): Promise<User>{
        return await this.userModel.findById(id).lean()
    }

    async create(data: UserInput): Promise<User> {
        return await this.userModel.create(data)
    }
}