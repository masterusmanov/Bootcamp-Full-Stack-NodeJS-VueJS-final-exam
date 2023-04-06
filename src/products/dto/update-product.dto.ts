
import { IsString } from "class-validator";

export class UpdateProductDto {
    @IsString()
    readonly productName?: string;

    @IsString()
    readonly newOrDifferent?: string;

    @IsString()
    readonly price?: string;

    @IsString()
    readonly stock?: string;
}
