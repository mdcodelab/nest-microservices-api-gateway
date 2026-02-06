import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port: process.env.PORT ? Number(process.env.PORT) : 3000,
    },
  });

  await app.listen();
  console.log('User microservice is running on port 3000');
}
bootstrap();
