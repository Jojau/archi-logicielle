export interface CartGateway {
  getProducts(): Promise<Array<any>>
  setProducts(...products: Array<any>): Promise<Boolean>
}
