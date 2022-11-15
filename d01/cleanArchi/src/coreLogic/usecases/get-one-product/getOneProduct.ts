import { ProductGateway } from '../../gateways/productGateway'

export const getOneProductById = async (id: string, productGateway: ProductGateway) => {
  const res = await productGateway.getOneById(id)
  return res
}
