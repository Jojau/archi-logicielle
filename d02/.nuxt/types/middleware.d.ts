import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/jojob/Documents/IIM/M2/archi logicielle et projets/prof/archi-logicielle/d02/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}