import { Controller, Body, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto } from 'src/dto/signup.dto';
import { LoginDto } from 'src/dto/login.dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('sign-up')
  async signup(@Body() SignupDto: SignupDto) {
    return this.UserService.signup(SignupDto);
  }

  @Post('log-in')
  async login(@Body() LoginDto: LoginDto) {
    return this.UserService.login(LoginDto);
  }
}
