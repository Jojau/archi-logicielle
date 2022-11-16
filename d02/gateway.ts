import { InMemoryProductGateway } from '~/src/adapters/secondary/InMemoryProductGateway'
import { InMemoryWithDelayProductGateway } from '~/src/adapters/secondary/InMemoryWithDelayProductGateway'

// export const productGateway = new InMemoryProductGateway()
export const productGateway = new InMemoryWithDelayProductGateway()
const guitare: any = { id: 'abc123', name: 'Guitare', price: 10000 }
const basse: any = { id: 'def456', name: 'Basse', price: 29999 }
productGateway.feedWith(guitare, basse)
