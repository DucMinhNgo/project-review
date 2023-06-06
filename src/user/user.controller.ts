import { Body, Controller, Post } from "@nestjs/common";
import { User as UserModule } from "@prisma/client";
import { UserService } from "./user.service";

@Controller('')
export class UsersController {
    constructor(
        private userService: UserService,
    ) { };

    @Post('user')
    async signupUser(
        @Body() userData: { name?: string; email: string },
    ): Promise<UserModule> {
        console.log(userData);

        return this.userService.createUser(userData);
    }
}