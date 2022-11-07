import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/prisma.service";
import { Location } from "@prisma/client";

import { LocationInput } from "./dto/location.input";

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Location[]> {
    return await this.prisma.location.findMany();
  }

  async findById(id: string): Promise<Location> {
    return await this.prisma.location.findUnique({
      where: { id },
    });
  }

  async create(locationInput: LocationInput): Promise<Location> {
    return await this.prisma.location.create({
      data: locationInput,
    });
  }
}
