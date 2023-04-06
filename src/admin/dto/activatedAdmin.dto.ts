import { ApiProperty } from "@nestjs/swagger";

export class ActivateAdminDto{
  @ApiProperty({ example: 'adminId', description: 'Admin id number'})
    readonly adminId: number;
}