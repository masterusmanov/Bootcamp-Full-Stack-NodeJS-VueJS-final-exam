import { IsString } from "class-validator";


export class UpdateBrandDto {
    @IsString()
    brandName?: string;
}
