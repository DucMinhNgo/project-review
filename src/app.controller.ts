import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    // private readonly userService: UserService,
    // private readonly postService: PostService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('post/:id')
  // async getPostById(@Param('id') id: string): Promise<PostModel> {
  //   return this.postService.post({ id: Number(id) });
  // }
}
