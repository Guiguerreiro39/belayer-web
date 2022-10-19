import { UseGuards } from "@nestjs/common"
import { Query, Resolver, Mutation, Args} from "@nestjs/graphql"

import { Activity } from '@prisma/client';

import { JwtGuard } from "src/api/auth/jwt.guard"
import { ActivityInput } from "./dto/activity.input";
import { ActivityResponse } from "./dto/activity.response";
import { ActivityService } from "./activity.service"

@Resolver(() => ActivityResponse)
export class ActivityResolver {
    constructor(private readonly activityService: ActivityService) {}

    @Query(() => [ActivityResponse], { name: "getAllActivities" })
    @UseGuards(JwtGuard)
    getAll(): Promise<Activity[]> {
        return this.activityService.findAll()
    }

    @Query(() => ActivityResponse, { name: "getActivity" })
    @UseGuards(JwtGuard)
    get(@Args("id") id: string): Promise<Activity> {
        return this.activityService.findById(id)
    }

    @Mutation(() => ActivityResponse, { name: "createActivity" })
    @UseGuards(JwtGuard)
    create(@Args("activityInput") activityInput: ActivityInput): Promise<Activity> {
        return this.activityService.create(activityInput)
    }
}