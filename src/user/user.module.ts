import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { User, UserSchema } from './models/user.model';

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])],
    exports: [UserService],
    providers: [UserService, UserResolver],
})
export class UserModule {}
