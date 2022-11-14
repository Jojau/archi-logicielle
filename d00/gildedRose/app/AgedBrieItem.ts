import { Item } from './item'

export class AgedBrieItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.increaseQuality()
    if (this.sellIn < 0)
      this.increaseQuality()
    this.decreaseSellIn()
  }
}
