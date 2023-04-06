import { IsNumber } from "class-validator";


export class UpdatePaymentDto {
    @IsNumber()
    paymentAmount?: number;
}

