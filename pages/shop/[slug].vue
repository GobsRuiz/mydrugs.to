<template>
    <div class="productPage max-w-[1300px] mx-auto box-border px-5 relative">
      <div class="productPage__back">
          <NuxtLink to="/shop" class="hidden items-center text-customWhite-100 hover:text-customBlue-500 text-xs absolute top-0 left-5">
            <UIcon name="material-symbols:arrow-back-rounded" class="w-4 h-4 mr-1" />
            Voltar
          </NuxtLink>
      </div>
  
      <div class="productPage__product grid gap-10 lg:grid-cols-[minmax(200px,300px)_minmax(350px,400px)_300px] sm:grid-cols-[minmax(280px,400px)_minmax(250px,300px)] grid-cols-1 lg:items-center lg:justify-between md:justify-center mt-7">
          <div class="productPage__product__image lg:block hidden lg:col-start-auto md:col-start-1">
              <img class="w-full" :src="`/images/drugs/${product.img}`" alt="Droga">
          </div>
  
          <div class="productPage__product__about col-span-1 lg:col-start-2 md:col-start-1 md:row-start-1 sm:max-w-max max-w-[300px]">
              <p v-if="product.new" class="text-customBlue-500 text-xs font-bold ml-1 -m-1">NEW</p>
              
              <h1 class="text-customWhite-100 lg:text-6xl md:text-4xl sm:text-4xl text-3xl font-bold -mb-1" v-html="product.name.split(' ').join('<br>')">
              </h1>
              
              <p v-if="product.premiumLine" class="text-customWhite-400 text-2xl font-bold -mb-1">
                  Premium Line
              </p>
  
              <UiRatingComponent class="my-2 pt-1 pb-1" />
  
              <p class="text-customWhite-100 lg:text-6xl md:text-4xl sm:text-4xl text-3xl font-bold -m-1.5">
                  {{ product.btc }} BTC
              </p>
              <p class="text-customWhite-100 text-lg font-bold">
                  {{ product.euro }} €
              </p>
  
              <p class="text-customWhite-400 text-md font-semibold mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt blanditiis molestiae ad dolorum, eos numquam! Totam sint vitae inventore incidunt, mollitia culpa corrupti illum?
              </p>
          </div>
  
          <div class="productPage__product__buy border-2 border-customBorderColor-default rounded-lg box-border py-4 px-8 lg:h-full md:h-max lg:col-start-3 md:col-start-2 md:row-start-1 sm:max-w-max max-w-[300px]">
              <h3 class="text-customWhite-100 lg:text-3xl text-2xl font-bold mb-3">
                  Buy now
              </h3>
  
              <p class="text-customWhite-100 text-sm font-semibold mb-3">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate velit ea debitis incidun.
              </p>
  
              <p class="text-customWhite-400 text-xs font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p class="text-primary text-sm font-bold">
                  In Stock
              </p>
  
              <div class="flex items-center justify-between my-4 pb-1">
                  <button class="flex items-center border border-customBorderColor-default hover:border-customBlue-500 rounded-full p-2">
                      <svg class="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Remove_Minus"> <path id="Vector" d="M6 12H18" stroke="#f3efee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                  </button>
  
                  <button class="flex items-center border border-customBorderColor-default hover:border-customBlue-500 rounded-full p-2">
                      <UIcon name="lets-icons:add-round" class="w-[30px] h-[30px] text-customWhite-100" />
                  </button>
              </div>
  
              <UButton color="transparent" class="block w-full mb-3 text-lg">
                Add to Cart
              </UButton>
              <UButton color="primary" class="block w-full text-lg">
                  Check Out
              </UButton>
  
              <p class="text-customWhite-400 text-xs text-center font-semibold mt-3">
                  Lorem ipsum dolor sit.
              </p>
          </div>
      </div>
  
      <div v-if="otherProducts && otherProducts.length > 0" class="h-[2px] bg-customBorderColor-default my-8"></div>
  
      <div v-if="otherProducts && otherProducts.length > 0" class="grid lg:grid-cols-4 grid-cols-1 gap-6 px-6">
          <NuxtLink
              v-for="(otherProduct, index) in otherProducts"
              :key="index"
              :to="`/shop/${otherProduct.slug}`"
          >
              <UiProductCardComponent 
                  class="max-w-[300px]"
                  :product="otherProduct" 
              />
          </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useProduct } from '~/composables/useProduct.js'
  
  const route = useRoute()
  const product = ref(null)
  const products = ref(null)
  const otherProducts = computed(() => products.value.filter((p) => p.new).slice(0, 4))
  const reqError = ref(null)
  
  try {
      product.value = await useProduct(`/api/products/${route.params.slug}`)
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
  </script>
  
  <style lang="scss" scoped>
  
  </style>