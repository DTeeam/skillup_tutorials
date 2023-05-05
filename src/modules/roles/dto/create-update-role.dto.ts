import { IsNotEmpty } from 'class-validator'

export class CreateUpdateRoleDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty({ message: 'You to select atleast 1 permission' })
  permissions: string[]
}
