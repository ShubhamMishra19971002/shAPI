import { IsNotEmpty } from "class-validator"

export class CreateAdminDto {
    @IsNotEmpty()
    adminName: string
    @IsNotEmpty()

    adminPassword: string
}




export class Image {
    id: string;
    name: string;
    path: string;
}