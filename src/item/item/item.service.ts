import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from '../item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from '../item.dto';

@Injectable()
export class ItemService {
    constructor(
        // Khai báo Repository để kết nối db
        @InjectRepository(ItemEntity)
        private itemRepo: Repository<ItemEntity>,
    ) { }

    item():Promise<any> {
        
        return this.itemRepo.findOne({});
    }
}
