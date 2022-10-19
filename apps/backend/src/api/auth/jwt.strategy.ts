import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserService } from 'src/api/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT,
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
      ignoreExpiration: true,
      secretOrKey: configService.get('JWT.SECRET'),
      logging: true,
    });
  }

  private static extractJWT(req: Request): string | null {
    const token = req.cookies['auth-token'];

    if (!token) return null
    
    return token;
  }

  async validate(payload: any) {
    if(payload === null) throw new UnauthorizedException();

    const { password, ...user } = await this.userService.findByEmail(
      payload.email,
    );

    return user;
  }
}
