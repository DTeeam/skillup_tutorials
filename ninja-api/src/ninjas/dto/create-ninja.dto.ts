import { MinLength, IsEnum } from 'class-validator';

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['Sai', 'Stick'], { message: 'Use correct weapons' })
  weapon: 'Sai' | 'Stick';
}
