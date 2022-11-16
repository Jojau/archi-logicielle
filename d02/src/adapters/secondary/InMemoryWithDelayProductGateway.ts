import { InMemoryProductGateway } from '~/src/adapters/secondary/InMemoryProductGateway'

export class InMemoryWithDelayProductGateway extends InMemoryProductGateway {
  async listAll(): Promise<Array<any>> {
    await new Promise(r => setTimeout(r,2000))
    return super.listAll()
  }
}
