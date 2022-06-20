import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common'

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger(bootstrap.name)

  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const port = configService.get('PORT')

  // const httpAdapter = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new MongoExceptionFilter());

  await app.listen(port);
  logger.log(`Application listening on port ${port}`)
}
bootstrap();
