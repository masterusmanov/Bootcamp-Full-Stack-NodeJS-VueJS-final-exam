import { IsString } from "class-validator";

export class UpdatePaymentMethodDto {
    @IsString()
    name?: string;
}