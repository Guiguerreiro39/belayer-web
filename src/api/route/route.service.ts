import { Injectable } from "@nestjs/common"

import { PrismaService } from 'src/prisma.service';
import { Route } from '@prisma/client';

import { RouteInput } from "./dto/route.input"

@Injectable()
export class RouteService {
    constructor(private prisma: PrismaService) {}

    async findAll(): Promise<Route[]> {
        return await this.prisma.route.findMany()
    }

    async findById(id: string): Promise<Route>{
        return await this.prisma.route.findUnique({
            where: { id }
        })
    }

    async create(routeInput: RouteInput): Promise<Route> {
        return await this.prisma.route.create({
            data: {
                ...routeInput,
                location: {
                    connect: {
                        id: routeInput.location
                    }
                }
            }
        })
    }
}