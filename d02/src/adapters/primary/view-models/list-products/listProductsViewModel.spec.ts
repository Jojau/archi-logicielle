import { useProductStore } from '~/src/store/product'
import { createPinia, setActivePinia } from 'pinia'
import { listProductsVM, ProductsVM } from '~/src/adapters/primary/view-models/list-products/listProductsViewModel'

describe('List products view model', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should format price', () => {
    // Given
    const guitare: any = { id: 'abc123', name: 'Guitare', price: 10000 }
    const basse: any = { id: 'def456', name: 'Basse', price: 30099 }
    const productStore = useProductStore()
    productStore.list([guitare, basse])
    // When
    const productsVM = listProductsVM()
    // Then
    const expectedProducts: ProductsVM = {
      items: [
        {
          name: 'Guitare',
          price: '100$'
        },
        {
          name: 'Basse',
          price: '300.99$'
        }
      ]
    }
    expect(productsVM).toEqual(expectedProducts)
  })
})
