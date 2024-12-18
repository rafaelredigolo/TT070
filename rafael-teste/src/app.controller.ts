import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import Item from './item.type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addItem(@Body() body: Item): Item {
    return this.appService.addItem(body)
  }

  @Get()
  getItems(): Array<Item> {
    return this.appService.getItems();
  }

  @Get(':id')
  getItem(@Param('id') id: string): Item {
    return this.appService.getItem(Number(id))
  }

  @Delete(':id')
  deleteItem(@Param('id') id: string): void {
    this.appService.deleteItem(Number(id))
  }
}
