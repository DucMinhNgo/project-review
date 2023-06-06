import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cat/cats.module';
import { LoggerMiddleware } from 'middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [CatsModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    // .exclude(
    //   { path: 'cats', method: RequestMethod.GET },
    //   { path: 'cats', method: RequestMethod.POST },
    //   'cats/(.*)',
    // )
    .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
