import { IsString, IsNumber, IsEmail } from "class-validator";


export class UpdateSupplierDto {
    @IsEmail()
    email?: string;
    
    @IsString()
    phoneNumber?: string;

    @IsString()
    address?: string;

    @IsNumber()
    zipCode?: number;

}
