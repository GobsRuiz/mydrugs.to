<template>
  <div class="shopPage max-w-[1300px] mx-auto box-border px-4">
    <h1 class="sm:text-left text-center text-customWhite-100 text-4xl font-black mb-8">
        Shop
    </h1>

    <div v-if="products.length > 0" class="shop__products grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <NuxtLink 
            v-for="(product, index) in products" 
            :key="index" 
            :to="`/shop/${product.slug}`"
            class="shop__products__product"
        >
            <UiProductCardComponent 
                class="sm:max-w-full max-w-[300px] mx-auto"
                :product="product" 
            />
        </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { animate, stagger } from "motion-v"

// Imports
import { useProducts } from '~/composables/useProducts.js'


// Global variables
const toast = useToast()


// Get products
const products = ref([])
const reqError = ref(null)

try {
    products.value = await useProducts('/api/products')
} 
catch (error) {
    reqError.value = error
    console.log(error)

    toast.add({
        title: 'error',
        description: error.statusMessage,
        color: 'red'
    })
}



// Hooks
onMounted(() => {
  animate(".shop__products__product", { opacity: [0, 1], y: [50, 0] }, { delay: stagger(.05) });
});
</script>

<style lang="scss" scoped>
.shop__products__product{
}
</style>