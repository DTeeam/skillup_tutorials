import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsNotEmpty, IsEmail, Matches } from 'class-validator'
import { Match } from 'decorators/match.decorator'

export class CreateUserDto {
  @IsOptional()
  @ApiProperty()
  first_name?: string

  @IsOptional()
  @ApiProperty()
  last_name?: string

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string

  @IsNotEmpty()
  @ApiProperty()
  role_id: string

  @IsNotEmpty()
  @Matches(/^(?=.*\d)[A-Za-z.\s_-]+[\w~@#$%^&*+=`|{}:;!.?"()[\]-]{6,}/, {
    message:
      'Password must have at least one number, lower or upper case letter and it has to be longer than 5 characters',
  })
  @ApiProperty()
  password: string

  @IsNotEmpty()
  @Match(CreateUserDto, (field) => field.password, { message: 'Passwords do not match' })
  @ApiProperty()
  confirm_password: string
}
