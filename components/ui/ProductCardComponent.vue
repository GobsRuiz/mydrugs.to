<template>
  <div class="productCard w-full flex items-center justify-center border-2 border-customBorderColor-default rounded-lg py-4 px-5">
    <img class="max-w-[80px] max-h-[80px] h-max mr-7" :src="`/images/drugs/${props.product.img}`" alt="Imagem ilustrativa">

    <div class="productCard__infos">
      <h3 class="text-customWhite-100 text-lg leading-5 font-bold mb-2" v-html="props.product.name.split(' ').join('<br>')">
      </h3>

      <p class="text-customWhite-400 text-sm font-semibold italic">
        {{ props.product.btc }} BTC
      </p>
      
      <UiRatingComponent class="max-w-[70px] -mt-1" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: Object,
})
</script>

<style lang="scss" scoped>
.productCard{

}
</style>