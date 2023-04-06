import { IsString, IsEmail, IsPhoneNumber } from "class-validator";

export class UpdateUserDto {
    @IsString()
    readonly first_name?: string;

    @IsString()
    readonly last_Name?: string;

    @IsString()
    readonly username?: string;

    @IsEmail()
    readonly email?: string;

    @IsPhoneNumber()
    readonly phoneNumber?: string;
}