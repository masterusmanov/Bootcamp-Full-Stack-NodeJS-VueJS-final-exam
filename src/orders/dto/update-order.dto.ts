import { IsString, IsDate, IsNumber } from "class-validator";

export class UpdateOrderDto {
    @IsDate()
    delivery_date?: Date;

    @IsString()
    status?: string;
    
    @IsNumber()
    amount?: number;

    @IsString()
    totalPrice?: string;

    @IsString()
    address?: string;
    
    @IsString()
    zipCode?: string;
}
