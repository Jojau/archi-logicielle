import { Product } from "../types/product"

export interface ProductGateway {
  listAll(): Promise<Array<Product>>
  getOneById(id: string): Promise<Product>
  add(newProduct: Product): Promise<Product>
}
