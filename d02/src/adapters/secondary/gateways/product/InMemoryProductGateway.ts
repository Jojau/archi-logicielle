import { ProductGateway } from '~/src/coreLogic/gateways/ProductGateway'

export class InMemoryProductGateway implements ProductGateway {
  protected products: Array<any> = []

  listAll(): Promise<Array<any>> {
    return Promise.resolve(this.products)
  }
  feedWith(...products: Array<any>) {
    this.products = products
  }
}
