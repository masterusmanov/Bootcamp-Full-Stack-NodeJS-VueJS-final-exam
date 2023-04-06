import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsStrongPassword, MinLength } from "class-validator";

export class LoginAdminDto {
    @ApiProperty({ example: 'Jocker', description: 'Admin login'})
    @IsString()
    login: string;
    
    @ApiProperty({ example: 'P@$$w0rdd', description: 'Admin login password'})
    @IsStrongPassword()
    @MinLength(8, {})
    password: string;
}
