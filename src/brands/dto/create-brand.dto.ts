import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBrandDto {
    @ApiProperty({ example: 'Hp or samsung', description: 'Brands'})
    @IsString()
    readonly brandName: string;
}
