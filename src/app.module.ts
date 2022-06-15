import { config } from './config';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective } from 'graphql';
import { MongooseModule } from '@nestjs/mongoose';

import { join } from 'path'

import { UsersModule } from './users/users.module';
import { DateScalar } from './common/scalars/date.scalar';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: `${process.env.NODE_ENV}.env`, isGlobal: true, load: [config]}),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE.URI')
      }),
      inject: [ConfigService]
    }),
    UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        directives: [
          new GraphQLDirective({
            name: 'upper',
            locations: [DirectiveLocation.FIELD_DEFINITION]
          })
        ]
      }
    }),
  ],
  providers: [DateScalar]
})
export class AppModule {}
