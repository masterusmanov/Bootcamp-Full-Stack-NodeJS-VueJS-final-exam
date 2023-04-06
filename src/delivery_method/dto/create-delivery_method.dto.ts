import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateDeliveryMethodDto {
    @ApiProperty({ example: 'delivery name', description: 'Delivery method'})
    @IsString()
    readonly name: string;
}


