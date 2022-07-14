import { config } from './config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DirectiveLocation, GraphQLDirective, GraphQLError, GraphQLFormattedError } from 'graphql';

import { join } from 'path'

import { UserModule } from './api/user/user.module';
import { LocationModule } from './api/location/location.module';
import { RouteModule } from './api/route/route.module';
import { ActivityModule } from './api/activity/activity.module';
import { DateScalar } from './common/scalars/date.scalar';
import { AuthModule } from './api/auth/auth.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: `${process.env.NODE_ENV}.env`, isGlobal: true, load: [config]}),
    UserModule,
    LocationModule,
    RouteModule,
    ActivityModule,
    AuthModule,
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
      },
      // formatError: (error: GraphQLError) => {
      //   if (error.extensions.exception.status === 404) throw new NotFoundException();
      //   const graphQLFormattedError: GraphQLFormattedError = {
      //     message:  error?.message,
      //   };
      //   return graphQLFormattedError;
      // },
    }),
  ],
  providers: [DateScalar]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
