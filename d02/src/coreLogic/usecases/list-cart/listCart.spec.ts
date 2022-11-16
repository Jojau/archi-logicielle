import { setActivePinia, createPinia } from "pinia"
import { InMemoryProductGateway } from "~/src/adapters/secondary/gateways/product/InMemoryProductGateway"
import { useProductStore } from "~/src/store/product"
import { InLocalStorageCartGateway } from "~/src/adapters/secondary/gateways/cart/InLocalStorageCartGateway"
import { listCart } from "./listCart"
import { useCartStore } from "~/src/store/cart"

describe('List the products in the cart', () => {
    let productStore: any
    let cartStore: any
    let productGateway: InMemoryProductGateway
    let cartGateway: InLocalStorageCartGateway
    beforeEach(() => {
      setActivePinia(createPinia())
      productStore = useProductStore()
      cartStore = useCartStore()
      productGateway = new InMemoryProductGateway()
      cartGateway = new InLocalStorageCartGateway()
    })

    describe('The cart is empty', () => {
        it('should list nothing', () => {
            listCart(cartGateway)
            expect(cartStore.products).toEqual([])
        })
    })

    describe('The cart has products', () => {
        it('should list the products of the cart', () => {
            const myTestCart = [
                {
                    id: 'abc123',
                    quantity: 1
                },
                {
                    id: 'def456',
                    quantity: 2
                }
            ]
            cartGateway.setProducts(myTestCart)

            listCart(cartGateway)
            expect(cartStore.products).toEqual(myTestCart)
        })
    })
})