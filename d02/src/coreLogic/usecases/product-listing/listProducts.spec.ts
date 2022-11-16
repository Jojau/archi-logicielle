import { createPinia, setActivePinia } from 'pinia'
import { useProductStore } from '~/src/store/product'
import { listProducts } from '~/src/coreLogic/usecases/product-listing/listProducts'
import { InMemoryProductGateway } from '~/src/adapters/secondary/InMemoryProductGateway'

describe('List products', () => {
  let productStore: any
  let productGateway: InMemoryProductGateway
  beforeEach(() => {
    setActivePinia(createPinia())
    productStore = useProductStore()
    productGateway = new InMemoryProductGateway()
  })
  describe('There is no available products', () => {
    it('should list nothing', async () => {
      await listProducts(productGateway)
      expect(productStore.all).toEqual([])
    })
  })
  describe('There is available products', () => {
    it('should list all products', async () => {
      const guitare: any = { id: 'abc123', name: 'Guitare', price: 10000 }
      const basse: any = { id: 'def456', name: 'Basse', price: 30000 }
      productGateway.feedWith(guitare, basse)
      await listProducts(productGateway)
      expect(productStore.all).toEqual([guitare, basse])
    })
  })
  describe('Loading', () => {
    it('should be aware during loading', async () => {
      const unsubscribe = productStore.$subscribe((mutation: any, state: any) => {
        expect(state.isLoading).toBeTruthy()
        unsubscribe()
      })
      await listProducts(productGateway)
    })
    it('should finish loading when done', async () => {
      await listProducts(productGateway)
      expect(productStore.isLoading).toBeFalsy()
    })
  })
})
