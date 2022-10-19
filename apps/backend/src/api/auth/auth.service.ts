import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import { comparePassword } from "src/common/crypt/hash.crypt";
import { LoginResponse } from "./dto/login.response";
import { UserInput } from "src/api/user/dto/user.input";
import { User } from "@prisma/client";
import { UserService } from "src/api/user/user.service";

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<User | undefined> {
    try {
      const user = await this.userService.findByEmail(email);

      if (!user) throw new NotFoundException(`User does not exist.`);

      if (await comparePassword(password, user.password)) {
        const { password, ...res } = user;
        return res as User;
      }

      this.logger.error(`Wrong password input for the user '${email}'.`);
      return undefined;
    } catch (error) {
      this.logger.error(`Failed to validate the user '${email}'.`, error.stack);
    }
  }

  async login(user: User): Promise<LoginResponse> {
    return {
      token: this.jwtService.sign({ email: user.email, sub: user.id }),
      user,
    };
  }

  async signup(userInput: UserInput): Promise<User> {
    return this.userService.create(userInput);
  }

  async me(token: string | undefined): Promise<User> {
    const payload = this.jwtService.decode(token);
    return this.userService.findByEmail(payload["email"]);
  }
}
