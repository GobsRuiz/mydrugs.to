<template>
  <div class="productCard group w-full flex items-center justify-center border-2 border-customBorderColor-default rounded-lg py-4 px-5 transition hover:scale-105 hover:bg-customBlue-500">
    <img class="max-w-[80px] max-h-[80px] h-max mr-7" :src="`/images/drugs/${props.product.img}`" alt="Imagem ilustrativa">

    <div class="productCard__infos">
      <h3 class="text-customWhite-100 group-hover:text-customBunker-950 text-lg leading-5 font-black mb-2 transition" v-html="props.product.name.split(' ').join('<br>')">
      </h3>

      <p class="text-customWhite-400 group-hover:text-customBunker-950 text-sm font-semibold italic transition">
        {{ props.product.btc }} BTC
      </p>
      
      <UiRatingComponent class="max-w-[70px] -mt-1 group-hover:text-customBunker-950 transition" />
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