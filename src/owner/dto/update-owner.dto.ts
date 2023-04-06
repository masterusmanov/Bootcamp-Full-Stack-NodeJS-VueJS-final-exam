import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class UpdateOwnerDto {
    
    @IsString()
    name?: string;

    @IsPhoneNumber()
    phoneNumber?: string;

    @IsEmail()
    email?: string;
}