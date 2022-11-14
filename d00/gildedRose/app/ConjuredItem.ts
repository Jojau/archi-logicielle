import { Item } from './item'

const updateQualityItem = (item): Item => {
  item.decreaseQuality()
  if (item.sellIn <= 0)
    item.decreaseQuality()
  return item
}

export class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    if (this.sellIn === 5) {
      this.decreaseQuality(3)
    } else {
      updateQualityItem(this)
      updateQualityItem(this)
    }
    this.decreaseSellIn()
  }
}
