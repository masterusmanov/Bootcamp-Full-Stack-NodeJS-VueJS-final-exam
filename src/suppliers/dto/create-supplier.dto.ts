import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsPhoneNumber, IsNumber } from "class-validator";

export class CreateSupplierDto {
    @ApiProperty({ example: 'supplier@mail.uz', description: 'Supplier email'})
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: '+998901234567', description: 'Supplier phone number'})
    @IsPhoneNumber()
    readonly phoneNumber: string;

    @ApiProperty({ example: 'State, region, district, street', description: 'Supplier address'})
    @IsString()
    readonly address: string;

    @ApiProperty({ example: '160900', description: 'Supplier zip code'})
    @IsNumber()
    readonly zipCode: number;
}
