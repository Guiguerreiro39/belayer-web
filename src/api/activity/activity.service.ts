import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { Activity } from '@prisma/client';

import { ActivityInput } from './dto/activity.input';

@Injectable()
export class ActivityService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Activity[]> {
    return await this.prisma.activity.findMany();
  }

  async findById(id: string): Promise<Activity> {
    return await this.prisma.activity.findUnique({
      where: { id },
    });
  }

  async create(activityInput: ActivityInput): Promise<Activity> {
    return await this.prisma.activity.create({
      data: {
        ...activityInput,
        location: {
          connect: {
            id: activityInput.location,
          },
        },
        users: {
          connect: activityInput.users.map((u) => ({ id: u })) || [],
        },
      },
    });
  }
}
