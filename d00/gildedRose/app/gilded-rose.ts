import { Item } from './item'

export class GildedRose {
  items: Item[]
  constructor(items = [] as Item[]) {
    this.items = items
  }
  updateQuality(): Item[]  {
    this.items.forEach(currentItem => {
      currentItem.updateQuality()
    })
    return this.items
  }
}


