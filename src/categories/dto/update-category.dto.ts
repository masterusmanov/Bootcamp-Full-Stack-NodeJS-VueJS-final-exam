import { IsString } from "class-validator";


export class UpdateCategoryDto {
    @IsString()
    readonly productCategory?: string;

    @IsString()
    readonly description?: string;
}
