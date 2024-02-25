import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
} from 'class-validator';

export class SignUpDto  {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
export class SignInDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
export class UserPayloadDto {
  username: string;

  password: string;
}
