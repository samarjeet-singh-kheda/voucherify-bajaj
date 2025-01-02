import { IsString } from 'class-validator';

export class SignupDto {
  @IsString()
  email: string;
  @IsString()
  username: string;
  @IsString()
  password: string;
}
