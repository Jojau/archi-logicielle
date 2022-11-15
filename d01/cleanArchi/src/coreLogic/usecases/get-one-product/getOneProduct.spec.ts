import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway"
import { getOneProductById } from "./getOneProduct"

describe('Get one product', () => {
  it('should return the product corresponding to the given id', async () => {
    // Given
    const guitare = { id: 'abc123', name: 'Guitare' }
    const basse = { id: 'de456', name: 'Basse' }
    const productGateway = new InMemoryProductGateway()
    productGateway.feedWith([guitare, basse])

    const id = 'abc123'

    // When
    const res = await getOneProductById(id, productGateway)

    // Then
    expect(res.id).toEqual(id)
  })

  it('should return an error if the given id is not found', async () => {
    // Given
    const guitare = { id: 'abc123', name: 'Guitare' }
    const basse = { id: 'de456', name: 'Basse' }
    const productGateway = new InMemoryProductGateway()
    productGateway.feedWith([guitare, basse])

    const id = 'pouet'

    // When
    // const res = await getOneProductById(id, productGateway)

    // Then
    await expect(getOneProductById(id, productGateway)).rejects.toThrow('404 product not found');
  })
})
