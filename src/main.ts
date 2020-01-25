import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }  ));

  const options = new DocumentBuilder()
    .setTitle('Keycash example')
    .setDescription('The keycash API description')
    .setVersion('1.0')
    .addTag('keycash')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 8500);
}
bootstrap();
