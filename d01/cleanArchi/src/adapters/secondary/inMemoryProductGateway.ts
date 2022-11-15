import { ProductGateway } from '../../coreLogic/gateways/productGateway'

export class InMemoryProductGateway implements ProductGateway {
  private products: Array<any> = []

  feedWith(products: Array<any>) {
    this.products = products
  }

  async listAll() {
    return Promise.resolve(this.products)
  }
}
