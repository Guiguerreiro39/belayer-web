import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User, UserSchema } from './models/user.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])],
    providers: [MongooseModule, UsersService, UsersResolver],
})
export class UsersModule {}
