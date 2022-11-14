import { Item } from './item'

export class SulfurasItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    this.setQuality(80)
  }
}
