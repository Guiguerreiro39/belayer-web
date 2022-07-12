import { UseGuards } from "@nestjs/common"
import { Query, Resolver, Mutation, Args} from "@nestjs/graphql"

import { Location } from '@prisma/client';

import { JwtGuard } from "src/auth/jwt.guard"
import { LocationInput } from "./dto/location.input";
import { LocationResponse } from "./dto/location.response";
import { LocationService } from "./location.service"

@Resolver(() => LocationResponse)
export class LocationResolver {
    constructor(private readonly locationService: LocationService) {}

    @Query(() => [LocationResponse], { name: "getAllLocations" })
    @UseGuards(JwtGuard)
    getAll(): Promise<Location[]> {
        return this.locationService.findAll()
    }

    @Query(() => LocationResponse, { name: "getLocation" })
    @UseGuards(JwtGuard)
    get(@Args("id") id: string): Promise<Location> {
        return this.locationService.findById(id)
    }

    @Mutation(() => LocationResponse, { name: "createLocation" })
    @UseGuards(JwtGuard)
    create(@Args("locationInput") LocationInput: LocationInput): Promise<Location> {
        return this.locationService.create(LocationInput)
    }
}