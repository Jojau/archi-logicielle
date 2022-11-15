import { ProductGateway } from '../../gateways/productGateway'

export const listProducts = async (productGateway: ProductGateway) => {
  const res = await productGateway.listAll()
  return res
}
