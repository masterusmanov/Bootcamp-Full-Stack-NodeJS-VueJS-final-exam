import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class CreateStatusDto {
    @ApiProperty({ example: 'status', description: 'Order status'})
    @IsString()
    readonly name: string;
}