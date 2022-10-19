import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

import { ActivityResolver } from './activity.resolver';
import { ActivityService } from './activity.service';

@Module({
    exports: [ActivityService],
    providers: [ActivityService, ActivityResolver, PrismaService],
})
export class ActivityModule {}
