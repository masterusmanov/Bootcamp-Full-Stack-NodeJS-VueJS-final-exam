import { IsNumber } from "class-validator";

export class UpdateCartItemDto{
    @IsNumber()
    amount?: number;
}
