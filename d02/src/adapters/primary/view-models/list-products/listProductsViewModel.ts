import { useProductStore } from '~/src/store/product'

export interface ProductsVM {
  items: Array<ProductItemVM>
}

export interface ProductItemVM {
  name: string
  price: string
}

export const listProductsVM = (): ProductsVM => {
  const productStore = useProductStore()
  const products = productStore.all
  return {
    items: products.map((p) => {
      return {
        name: p.name,
        price: p.price / 100 + '$'
      }
    })
  }
}
