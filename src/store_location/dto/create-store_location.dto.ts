import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateStoreLocationDto {
    
    @ApiProperty({ example: 'Texno Park', description: 'Store name'})
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'Tashkent region', description: 'Region where the store is located'})
    @IsString()
    readonly region: string;
    
    @ApiProperty({ example: 'Chilanzar district', description: 'The district where the store is located'})
    @IsString()
    readonly district: string;
    
    @ApiProperty({ example: 'street Qatortol, house 6', description: 'The street where the shop is located'})
    @IsString()
    readonly address: string;

    @ApiProperty({ example: 'location', description: 'Store location'})
    @IsString()
    readonly location: string;
}