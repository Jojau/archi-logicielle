import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway"

describe('Add one product', () => {
    it('should add a new object to the products list', async () => {
        // Given
        const guitare = { id: 'abc123', name: 'Guitare' }
        const basse = { id: 'de456', name: 'Basse' }
        const productGateway = new InMemoryProductGateway()
        productGateway.feedWith([guitare, basse])
        const initalLength = (await productGateway.listAll()).length

        const newProduct = { id: 'ghi789', name: 'Piano'}
  
        // When
        const res = await productGateway.add(newProduct)
        
        // Then
        expect((await productGateway.listAll()).length).toEqual(initalLength + 1)
    })
})