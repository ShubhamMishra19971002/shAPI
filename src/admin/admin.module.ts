import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Admin, AdminSchema } from 'src/schema/Admin.schema';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { EncryptionService } from 'src/encrypytion.service';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Admin.name,
                schema:AdminSchema
            }
        ])
    ],
    providers: [AdminService,EncryptionService],
    controllers: [AdminController],
})
export class AdminModule {}
