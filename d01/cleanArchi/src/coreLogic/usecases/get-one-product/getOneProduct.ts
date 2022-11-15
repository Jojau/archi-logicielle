import { ProductGateway } from '../../gateways/productGateway'

export const getOneProductById = async (id, productGateway: ProductGateway) => {
  const res = await productGateway.getOneById(id)
  return res
}
