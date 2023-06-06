import { Body, Controller, Post } from "@nestjs/common";
import { PostService } from "./post.service";
import { Post as PostModel } from "@prisma/client";

@Controller()
export class PostController {
    constructor(private postService: PostService) { };

    @Post('post')
    async createDraft(
        @Body() postData: { title: string; content?: string; authorEmail: string },
    ): Promise<PostModel> {

        const { title, content, authorEmail } = postData;

        return this.postService.createPost({
            title,
            content,
            author: {
                connect: { email: authorEmail },
            },
        });
    }
}