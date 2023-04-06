import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsPhoneNumber, IsString } from "class-validator";

export class CreateOwnerDto {
    @ApiProperty({ example: 'Joe', description: 'Owner store'})
    @IsString()
    readonly name: string;

    @ApiProperty({ example: '+998901234567', description: 'Owner store phone number'})
    @IsPhoneNumber()
    readonly phoneNumber: string;

    @ApiProperty({ example: 'owner@mail.uz', description: 'Owner store email'})
    @IsEmail()
    readonly email: string;
}