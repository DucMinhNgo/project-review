import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cat/cats.module';
import { LoggerMiddleware } from 'middlewares/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { ItemEntity } from './item/item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "mauFJcuf5dhRMQrjj",
      "database": "quotes",
      "entities": [ItemEntity],
      "synchronize": true,
      // autoLoadEntities: true,
    }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql',
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      // autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      // sortSchema: true,
      // typePaths: ['./**/*.graphql'],
      // definitions: {
      //   path: join(process.cwd(), 'src/graphql.ts'),
      // },
    }),
    CatsModule, PostModule, UserModule, ItemModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule implements NestModule {
  constructor(private dataSource: DataSource) { }

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
