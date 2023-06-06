import { Resolver, Query } from '@nestjs/graphql';

import { ItemDTO } from './item.dto';
import { ItemService } from './item/item.service';

@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query(returns => ItemDTO)
  async item() {
    return await this.itemService.item();
  }
}
