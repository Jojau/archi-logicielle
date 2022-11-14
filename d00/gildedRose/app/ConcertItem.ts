import { Item } from './item'

export class ConcertItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }
  updateQuality() {
    if (this.sellIn === 0)
      this.setQuality(0)
    else
      this.increaseQualityForConcert()
    this.decreaseSellIn()
  }
  private increaseQualityForConcert() {
    this.increaseQuality()
    if (this.sellIn < 11)
      this.increaseQuality()
    if (this.sellIn < 6)
      this.increaseQuality()
    return this.quality
  }

}
