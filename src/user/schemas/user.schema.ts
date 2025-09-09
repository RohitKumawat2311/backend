import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocment = HydratedDocument<User>;

@Schema({timestamps: true})
export class User{
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop()
    age: string;
}

export const UserSchema = SchemaFactory.createForClass(User);