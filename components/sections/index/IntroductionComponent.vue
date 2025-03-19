<template>
  <section class="introduction flex flex-col justify-center text-center box-border pt-7 pb-7 relative">
    <p class="animateText text-customWhite-400 text-lg font-bold">The new myDrugs</p>
    
    <h1 class="introduction__title animateText text-customWhite-100 md:text-8xl sm:text-6xl text-5xl md:leading-[85px] sm:leading-[65px] leading-[50px] font-black">
      <span class="block">Best</span>
      <div class="introduction__dynamicText">
        <span class="introduction__dynamicText__text introduction__dynamicText__text--security bg-customBlue-500">Quality</span>
        <span class="introduction__dynamicText__text introduction__dynamicText__text--delivery bg-green-500">Delivery</span>
        <span class="introduction__dynamicText__text introduction__dynamicText__text--delivery bg-red-500">Security</span>
      </div>
    </h1>

    <p class="animateText text-customWhite-400 text-lg font-bold sm:mt-3">Prices as low as 0.0013 BTC</p>

    <div class="introduction__image">
      <img
        class="introduction__image__explosion"
        src="/images/backgrounds/powder.png"
        alt="Imagem ilustrativa"
      />
      <img
        class="introduction__image__drug"
        src="/images/banner/blue-pill-mydrugs.png"
        alt="Imagem ilustrativa"
      />
    </div>
  </section>
</template>

<script setup>
import { animate, stagger } from "motion-v"


function changeDynamicText()
{
  const length = 3;
  let oldIndex = 0;
  let index = 0;

  const texts = document.querySelectorAll(".introduction__dynamicText__text")

  if (texts[index]) {
    animate(texts[index], { opacity: [0, 1], y: [50, 0], x: '-50%', }, { duration: 0.2 })
  }
  
  setInterval(() => {
    oldIndex = index;
    index = index == (length - 1) ? 0 : index + 1;
    
    if (texts[oldIndex]) {
      animate(texts[oldIndex], { opacity: [1, 0], y: [0, -50], x: '-50%', }, { duration: 0.2 })
    }

    if (texts[index]) {
      animate(texts[index], { opacity: [0, 1], y: [50, 0], x: '-50%', }, { duration: 0.2, delay: stagger(.2) })
    }
  }, 3000);
}

function framerMotion()
{
  animate(".introduction .animateText", { opacity: [0, 1], y: [50, 0], }, { delay: stagger(.05) });
  animate(".introduction__image__drug", { rotate: [10, 10], scale: [.7, 1] }, { duration: 1.75, });
  animate(".introduction__image__explosion", { scale: [.4, 1], }, { duration: 1.75, });
}

onMounted(() => {
  framerMotion()
  changeDynamicText()
})
</script>

<style lang="scss" scoped>
.introduction{
  &__dynamicText{
    min-height: 100px;
    box-sizing: border-box;
    position: relative;
  
    @media(max-width: 768px){
      min-height: 65px;
    }
    
    &__text{
      height: 100px;
      line-height: 85px;
      display: block;
      max-width: max-content;
      border-radius: 8px;
      padding: 0 24px;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);

      @media(max-width: 768px){
        height: 65px;
        line-height: 55px;
        padding: 0 14px;
      }

      @media(max-width: 639px){
        height: 55px;
        line-height: 48px;
        padding: 0 14px;
      }
    }
  }

  &__image{
    min-height: 360px;
    display: block;
    object-fit: contain;
    margin: 50px auto 0 auto;
    position: relative;
    z-index: -1;

    &__explosion{
      min-width: 450px;
      position: absolute;
      top: -90px;
      left: -126px;
    }

    &__drug{
      max-width: 200px;
    }
  }
}
</style>
