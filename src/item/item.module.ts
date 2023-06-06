import { Module } from '@nestjs/common';
import { ItemResolver } from './item.resolver';
import { ItemService } from './item/item.service';
import { ItemEntity } from './item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemResolver, ItemService],
})
export class ItemModule {}
