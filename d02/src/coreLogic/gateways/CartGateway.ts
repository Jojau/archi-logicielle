export interface CartGateway {
  getProducts(): Promise<Array<any>>
}
