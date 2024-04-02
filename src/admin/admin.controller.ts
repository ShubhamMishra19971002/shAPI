import { Body, Controller, Get ,Param,Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import { AppService } from 'src/app.service';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './Dto/admin.dto';
import { Admin } from 'src/schema/Admin.schema';
import { Model } from 'mongoose';
import * as path from 'path';
import { InjectModel } from '@nestjs/mongoose';
import { EncryptionService } from 'src/encrypytion.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ImageService } from 'src/image-service/image-service.service';
@Controller('admin')


export class AdminController {
 adminData:CreateAdminDto
   // constructor(private adminService:AdminService) {
        constructor() {}
      // this.admin=new CreateAdminDto()
   // }

    //  @Post()
    //  async makeAdmin(): Promise<string> {
    //      this.adminData = {
    //          adminName: 'admin_satwa_homes_admin_staging_4',
    //          adminPassword: this.encryptionService.encrypt('admin_satwa_homes_admin_staging')
    //      };

    //      console.log(this.adminData)
    //      await this.adminService.createAdmin(this.adminData);
        
    //      return "Admin created successfully";
    //  }

//     @Post('upload')
//     @UseInterceptors(FileInterceptor('image', {
//         storage: diskStorage({
//             destination: './uploads',
//             filename: (req, file, cb) => {
//                 const filename = `${Date.now()}${path.extname(file.originalname)}`;
//                 cb(null, filename);
//             },
//         }),
//     }))
//     async uploadImage(@UploadedFile() file: Express.Multer.File) {
//         // Handle the uploaded file here, such as saving it to the database
//         const imageBuffer = file.buffer; // Assuming the file buffer contains the image data

//         // Save the image to the database
//         const savedImage = await this.imageService.uploadImage(imageBuffer);

//         return { imagePath: savedImage.path }; // Return the path or any other identifier of the saved image
    

//     @Get('image/:filename')
//     // async getImage(@Param('filename') filename: string, @Res() res: any) {
//     //     // Retrieve the image and send it as a response
//     //     const imagePath = path.join(__dirname, '..', 'uploads', filename);
    
//     }
//         //res.sendFile(imagePath);}

//     @Post('/verify-admin')
//     // async verifyAdmin(@Body() req:CreateAdminDto): Promise<any> {
//     //     let adminName=req.adminName
//     //     let adminPassword=req.adminPassword
//     //     const admin = await this.adminModel.findOne({adminName}).exec();

//     //     console.log(admin)
//     //     if (!admin) {
//     //         return {message:'no Admin Found'}; // Admin with the provided name doesn't exist
//     //     }
//     //     if(admin){
//     //       //  let password=this.encryptionService.decrypt(adminPassword)
//     //       //  if(admin.adminPassword===password)
//     //         return{message:'Admin Logged In Successfully '};
//     //     }
//     //     else   return{message:'Wrong ID PW '};
//     //     // Compare the provided password with the hashed password stored in the database
//     //     return false
//     // }
 }