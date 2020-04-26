import { NestFactory } from '@nestjs/core';
import { Transport, GrpcOptions } from '@nestjs/microservices';
import { join } from 'path';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5000',
      package: 'sample',
      protoPath: join(__dirname, 'proto/sample.proto'),
    },
  });
  await app.listenAsync();
}
bootstrap();
