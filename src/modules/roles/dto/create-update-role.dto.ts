import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUpdateRoleDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string

  @IsNotEmpty({ message: 'You to select atleast 1 permission' })
  @ApiProperty()
  permissions: string[]
}
