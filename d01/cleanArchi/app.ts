import express = require('express')
import { listProducts } from './src/coreLogic/usecases/products-listing/listProducts'
import { InMemoryProductGateway } from './src/adapters/secondary/inMemoryProductGateway'

const app = express()

const guitare = { id: 'abc123', name: 'Guitare' }
const basse = { id: 'de456', name: 'Basse' }
const productGateway = new InMemoryProductGateway()
productGateway.feedWith([guitare, basse])

app.get('/products', async (req, res) => {
  const products = await listProducts(productGateway)
  res.send(JSON.stringify(products))
})

export default app
