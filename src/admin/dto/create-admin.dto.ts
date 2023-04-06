import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength } from "class-validator";

export class CreateAdminDto {
    @ApiProperty({ example: 'Joe', description: 'Admin name'})
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'joe@mail.uz', description: 'Admin email'})
    @IsEmail()
    readonly login: string;
    
    @ApiProperty({ example: 'P@$$w0rdd', description: 'Admin password'})
    @IsStrongPassword()
    @MinLength(8, {})
    readonly password: string;

    @ApiProperty({ example: 'P@$$w0rdd', description: 'Admin confirm password'})
    @IsStrongPassword()
    @MinLength(8, {})
    readonly confirmPassword: string;
}
