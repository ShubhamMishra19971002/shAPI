import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()

export class Admin {

@Prop({required:true})
    adminName:string


    @Prop({required:true})
    adminPassword:string
    
}


export const AdminSchema=SchemaFactory.createForClass(Admin)