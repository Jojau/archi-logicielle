import { ProductGateway } from '../../coreLogic/gateways/productGateway'
import { Product } from '../../coreLogic/types/product'

export class InMemoryProductGateway implements ProductGateway {
  private products: Array<Product> = []

  feedWith(products: Array<Product>) {
    this.products = products
  }

  async listAll() {
    return Promise.resolve(this.products)
  }

  async getOneById(id: string): Promise<Product> {
    if (!this.products.find(x => x.id === id)){
      return Promise.resolve({
        id: 'NaN',
        name: 'Produit inconnu'
      })
    } else {
      return Promise.resolve(this.products.find(x => x.id === id))
    }
  }
}
