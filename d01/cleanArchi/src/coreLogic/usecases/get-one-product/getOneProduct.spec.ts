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
})
