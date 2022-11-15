import express from 'express'
import { listProducts } from './src/coreLogic/usecases/products-listing/listProducts'
import { InMemoryProductGateway } from './src/adapters/secondary/inMemoryProductGateway'
import { getOneProductById } from './src/coreLogic/usecases/get-one-product/getOneProduct'

const app = express()

const guitare = { id: 'abc123', name: 'Guitare' }
const basse = { id: 'de456', name: 'Basse' }
const productGateway = new InMemoryProductGateway()
productGateway.feedWith([guitare, basse])

app.get('/products', async (req, res) => {
  const products = await listProducts(productGateway)
  res.send(JSON.stringify(products))
})

app.get('/products/:id', async (req, res) => {
  // Marche pas si le produit existe pas
  const product = await getOneProductById(req.params.id,  productGateway)
  res.send(JSON.stringify(product))
})

export default app
