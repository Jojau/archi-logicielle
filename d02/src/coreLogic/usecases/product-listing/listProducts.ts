import { ProductGateway } from '~/src/coreLogic/gateways/ProductGateway'
import { useProductStore } from '~/src/store/product'

export const listProducts = async (productGateway: ProductGateway) => {
  const productStore = useProductStore()
  productStore.startListing()
  const products = await productGateway.listAll()
  productStore.list(products)
}
