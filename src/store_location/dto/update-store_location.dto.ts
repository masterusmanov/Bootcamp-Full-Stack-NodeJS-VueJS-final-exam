import { IsString } from "class-validator";


export class UpdateStoreLocationDto {
    @IsString()
    name?: string;
    
    @IsString()
    region?: string;

    @IsString()
    district?: string;
    
    @IsString()
    address?: string;

    @IsString()
    location: string;
}