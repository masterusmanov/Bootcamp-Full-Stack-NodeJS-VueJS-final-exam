import { IsString } from "class-validator";

export class UpdateDeliveryMethodDto{
    @IsString()
    name?: string;
}