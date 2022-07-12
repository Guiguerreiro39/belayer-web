import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    exports: [UserService],
    providers: [UserService, UserResolver, PrismaService],
})
export class UserModule {}
