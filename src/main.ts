import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import { APIToolkit } from 'apitoolkit-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const apiToolkitClient = APIToolkit.NewClient({
    apiKey: configService.get<string>('API_TOOL_KIT_TOKEN'),
    debug: false,
    tags: ['environment: production'],
    serviceVersion: 'v2.0',
  });

  app.use(apiToolkitClient.expressMiddleware);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
