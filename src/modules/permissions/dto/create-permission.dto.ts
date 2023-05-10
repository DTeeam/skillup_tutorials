import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreatePermissionDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string
}
