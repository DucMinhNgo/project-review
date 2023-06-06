import { Module } from '@nestjs/common';
import { TodoService } from './service/todo.service';

@Module({
  providers: [TodoService]
})
export class TodoModule {}
