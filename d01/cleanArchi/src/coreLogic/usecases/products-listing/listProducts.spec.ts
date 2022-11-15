import { listProducts } from './listProducts'
import { InMemoryProductGateway } from '../../../adapters/secondary/inMemoryProductGateway'

describe('List products', () => {
  it('should not list any product when no one is available', async () => {
    const productGateway = new InMemoryProductGateway()
    const res = await listProducts(productGateway)
    expect(res).toEqual([])
  })
  it('should list all products when there is available products', async () => {
    // Given
    const guitare = { id: 'abc123', name: 'Guitare' }
    const basse = { id: 'de456', name: 'Basse' }
    const productGateway = new InMemoryProductGateway()
    productGateway.feedWith([guitare, basse])
    // When
    const res = await listProducts(productGateway)
    // Then
    expect(res).toEqual([guitare, basse])
  })
})
