import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";

import { LocationResolver } from "./location.resolver";
import { LocationService } from "./location.service";

@Module({
  exports: [LocationService],
  providers: [LocationService, LocationResolver, PrismaService],
})
export class LocationModule {}
