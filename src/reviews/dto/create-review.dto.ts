import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, MinLength, IsDate } from "class-validator";

export class CreateReviewDto {
    @ApiProperty({ example: 'Comment', description: 'Comments review'})
    @IsNotEmpty()
    @IsString()
    readonly comment: string;
}
