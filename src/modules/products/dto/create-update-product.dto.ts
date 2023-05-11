import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsOptional } from 'class-validator'

export class CreateUpdateProductDto {
  @IsNotEmpty()
  @ApiProperty()
  title: string

  @IsNotEmpty()
  @ApiProperty()
  description: string

  @IsNotEmpty()
  @ApiProperty()
  price: number

  @IsOptional()
  @ApiProperty()
  image: string
}
