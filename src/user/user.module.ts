import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "src/prisma.service";
UserService
@Module(
    {
        controllers: [UsersController],
        providers: [UserService, PrismaService],
        exports: [UserService],
    }
)
export class UserModule { };