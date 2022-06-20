import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
    @Field(type => ID, {description: "ID of the user", nullable: false})
    _id: string;

    @Prop({ required: [true, "The field 'name' is required"]})
    @Field()
    name: string

    @Prop({ required: [true, "The field 'username' is required"], unique: true})
    @Field()
    username: string

    @Prop({ required: [true, "The field 'password' is required"]})
    @Field()
    password: string

    @Prop({default: new Date()})
    @Field()
    createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User)