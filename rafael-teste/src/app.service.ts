import { Injectable } from '@nestjs/common';
import Item from './item.type';



@Injectable()
export class AppService {
  items: Array<Item> = []

  addItem(item: Item): Item {
    //TODO: auto increment
    const id = 1;
    const newItem = { ...item, id };
    this.items.push(newItem)
    return newItem
  }
  
  getItems(): Array<Item> {
    return this.items
  }

  getItem(id: number): Item {
    const item = this.items.find((item) => item.id === id)
    return item
  }

  deleteItem(id: number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id)
    this.items.splice(itemIndex,1)
  }
}
