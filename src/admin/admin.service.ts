import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { Admin } from 'src/schema/Admin.schema';
import { CreateAdminDto } from './Dto/admin.dto';

@Injectable()
export class AdminService {
   
    constructor(@InjectModel(Admin.name) private adminModel:Model<Admin>){}


    async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
        const { adminName, adminPassword } = createAdminDto; // Extract properties from the DTO instance
        
        const newAdmin = new this.adminModel({ adminName, adminPassword }); // Create a new Admin document object
        return await newAdmin.save(); // Save the document to the database
    }
    
}
