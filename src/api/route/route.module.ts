import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { RouteResolver } from './route.resolver';
import { RouteService } from './route.service';

@Module({
    exports: [RouteService],
    providers: [RouteService, RouteResolver, PrismaService],
})
export class RouteModule {}
