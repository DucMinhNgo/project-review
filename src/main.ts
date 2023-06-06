import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma.service';

async function bootstrap() {
  // NestFactory.create(AppModule, { abortOnError: false })
  const app = await NestFactory.create(AppModule);
  // const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app)
  await app.listen(3000);
}

bootstrap();
