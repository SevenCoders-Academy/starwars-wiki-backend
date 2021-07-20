import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCharacterArgs {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  subtitle: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  image_url: string;
}
