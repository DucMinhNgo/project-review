import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cat/cats.module';
import { LoggerMiddleware } from 'src/middlewares/logger.middleware';

@Module({
  imports: [CatsModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
