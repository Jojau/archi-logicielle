import { CartGateway } from "~~/src/coreLogic/gateways/CartGateway";

export class InLocalStorageCartGateway implements CartGateway {
  getProducts(): Promise<any[]> {
    let products = JSON.parse(localStorage.getItem('cartProducts')!) as any[];
    if (!products)
      products = []
    return Promise.resolve(products)
  }

  setProducts(...products: any[]): Promise<Boolean> {
    localStorage.setItem('cartProducts', JSON.stringify(products))
    return Promise.resolve(true)
  }
}