import { defineStore } from 'pinia'

export const useCartStore = defineStore('CartStore', {
  state: () => {
    return {
      products: [] as Array<any>
    }
  },
  actions: {
    setProducts(products: Array<any>) {
      this.products = products
    }
  }
})
