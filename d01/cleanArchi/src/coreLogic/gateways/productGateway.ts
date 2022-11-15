import { Product } from "../types/product"

export interface ProductGateway {
  listAll(): Promise<Array<Product>>
  getOneById(id): Promise<Product>
}
