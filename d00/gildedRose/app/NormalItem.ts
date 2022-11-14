import { Item } from './item'

export class NormalItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.decreaseQuality()
    if (this.sellIn <= 0)
      this.decreaseQuality()
    this.decreaseSellIn()
  }
}
