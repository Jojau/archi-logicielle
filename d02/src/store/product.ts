import { defineStore } from 'pinia'

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      items: [] as Array<any>,
      isLoading: false
    }
  },
  getters: {
    all: (state) => state.items
  },
  actions: {
    list(products: Array<any>) {
      this.items = products
      this.isLoading = false
    },
    startListing() {
      this.isLoading = true
    },
  }
})
