import { Module } from "@nestjs/common";
import { BookmarkController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [BookmarkController],
  providers: [TodoService]
})
export class TodoModule {}
