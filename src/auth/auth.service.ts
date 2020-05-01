import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { UserLogin } from '../user/user.interfaces';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneForAuth(email);
    if (user && await argon2.verify(user.password, pass)) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: UserLogin) {
  const payload = { email: user.email, sub: user.id };
  return {
    token: this.jwtService.sign(payload),
  };
}
}
