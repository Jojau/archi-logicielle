<template lang="pug">
.index
  div(v-if="isLoading") Loading ...
  div(v-else v-for="(product) in productsVM" :key="product.id")
    div {{ product.name }}
    div {{ product.price }}
</template>

<script lang="ts" setup>
import { computed, onMounted } from '#imports'
import { listProducts } from '~/src/coreLogic/usecases/product-listing/listProducts'
import { listProductsVM } from '~/src/adapters/primary/view-models/list-products/listProductsViewModel'
import { productGateway } from '~/gateway'
import { useProductStore } from '~/src/store/product'

onMounted(() => {
  listProducts(productGateway)
})

const productsVM = computed(() => {
  return listProductsVM().items
})

const isLoading = computed(() => {
  const productStore = useProductStore()
  return productStore.isLoading
})

</script>
