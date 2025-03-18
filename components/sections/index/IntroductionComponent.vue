<template>
  <section class="introduction">
    <p>The new myDrugs</p>
    <h1>
      <span>Best</span>
      <span>Security</span>
    </h1>
    <p>Prices as low as 0.0013 BTC</p>

    <img
      class="introduction__image"
      src="/images/backgrounds/powder.png"
      alt="Imagem ilustrativa"
    />
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.introduction{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: relative;
    margin-top: 150px;

    p{
        @apply text-customWhite-400;
        font-size: 20px;
        font-weight: 600
    }
    
    h1{
        @apply text-customWhite-100;
        font-family: "Bebas Neue", sans-serif;
        font-size: 100px;
        line-height: 85px;
        margin-top: 18px;
        margin-bottom: 4px;
        
        span{
            display: block;
        }
    }

    &__image{
        max-width: 400px;
        display: block;
        object-fit: contain;
        position: absolute;
        top: 175px;
        left: 50%;
        transform: translateX(-50%) rotate(20deg);
        z-index: -1;
    }
}
</style>
