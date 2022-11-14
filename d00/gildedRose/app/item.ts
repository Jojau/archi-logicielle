export class Item {
  private readonly _name: string
  private _sellIn: number
  private _quality: number
  private minimumQuality: number = 0
  private maximumQuality: number = 50

  constructor(name, sellIn, quality) {
    this._name = name
    this._sellIn = sellIn
    this._quality = quality
  }
  updateQuality() {}
  setQuality(n: number) {
    this._quality = n
  }
  increaseQuality() {
    if (this._quality < this.maximumQuality)
      this._quality += 1
  }
  decreaseQuality(n: number = 1) {
    if (this._quality > this.minimumQuality)
      this._quality -= n
  }
  decreaseSellIn() {
    this._sellIn -= 1
  }

  get sellIn() {
    return this._sellIn
  }
  get name() {
    return this._name
  }
  get quality() {
    return this._quality
  }
}
