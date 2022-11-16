import { useCartStore } from "~/src/store/cart"
import { CartGateway } from "../../gateways/CartGateway"

export const listCart = async (cartGateway: CartGateway) => {
  const cartStore = useCartStore()
  const products = await cartGateway.getProducts()
  cartStore.setProducts(products)
}
