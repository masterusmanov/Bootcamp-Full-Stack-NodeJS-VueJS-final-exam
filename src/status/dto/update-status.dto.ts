import { IsString } from "class-validator";

export class UpdateStatusDto {
    @IsString()
    name?: string;
}