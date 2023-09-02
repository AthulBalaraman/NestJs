import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // To use this you have to install => npm i --save class-validator class-transformer
  app.useGlobalPipes(new ValidationPipe()) // Now we can use the validation pipe globally on all routes 

  await app.listen(3000);
}
bootstrap();
