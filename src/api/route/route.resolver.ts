import { UseGuards } from "@nestjs/common"
import { Query, Resolver, Mutation, Args} from "@nestjs/graphql"

import { Route } from '@prisma/client';

import { JwtGuard } from "src/api/auth/jwt.guard"
import { RouteInput } from "./dto/route.input";
import { RouteResponse } from "./dto/route.response";
import { RouteService } from "./route.service"

@Resolver(() => RouteResponse)
export class RouteResolver {
    constructor(private readonly routeService: RouteService) {}

    @Query(() => [RouteResponse], { name: "getAllRoutes" })
    @UseGuards(JwtGuard)
    getAll(): Promise<Route[]> {
        return this.routeService.findAll()
    }

    @Query(() => RouteResponse, { name: "getRoute" })
    @UseGuards(JwtGuard)
    get(@Args("id") id: string): Promise<Route> {
        return this.routeService.findById(id)
    }

    @Mutation(() => RouteResponse, { name: "createRoute" })
    @UseGuards(JwtGuard)
    create(@Args("routeInput") routeInput: RouteInput): Promise<Route> {
        return this.routeService.create(routeInput)
    }
}