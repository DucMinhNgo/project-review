import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'exceptions/forbidden.exception';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { };

    @Get()
    async findAll(@Req() request: Request): Promise<Cat[]> {
        console.log('here');

        // console.log({ request });


        // return 'This action returns all cats';
        // res.status(HttpStatus.OK).json([]);
        // res.status(HttpStatus.OK);


        try {
            return await this.catsService.findAll();
        } catch (error) {
            // throw new HttpException({ status: 'Forbidden', error: 'This is a custom message' }, HttpStatus.FORBIDDEN, { cause: error });
            throw new ForbiddenException;
        }

    }

    @Get(':id')
    findOne(@Param() params: any): string {
        console.log(params.id);
        return `This action returns a #${params.id} cat`;
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        console.log({ createCatDto });

        // return 'action add new cat';
        // res.status(HttpStatus.CREATED).send();

        return this.catsService.create(createCatDto);
    }
}
