<template>
  <section class="newLineup overflow-hidden">
    <div class="max-w-[1300px] mx-auto box-border py-5 px-5">
      <h1 class="animateText text-center text-customBunker-950 sm:text-4xl text-2xl  font-black relative z-10">
        Our explosive <br class="hidden sm:block" />
        new lineup.
      </h1>
      <p class="animateText text-center text-customBunker-950 text-sm font-bold mt-2 relative z-10">
        For the best MDMA experience Ever
      </p>

      <div class="newLineup__image flex items-center justify-center mt-10 mb-5">
        <img
          class="newLineup__image__donaldPill"
          src="/images/drugs/donald-pill.png"
          alt="Imagem ilustrativa"
        />
        <img
          class="newLineup__image__grenadePill"
          src="/images/drugs/grenade-pill.png"
          alt="Imagem ilustrativa"
        />
        <img
          class="newLineup__image__pinkPill"
          src="/images/drugs/face-pill.png"
          alt="Imagem ilustrativa"
        />
        
        <img id="gif" class="newLineup__image__explosion" src="/images/backgrounds/explosion-gif.gif">
        <img class="newLineup__image__explosion newLineup__image__explosion--image" src="/images/backgrounds/explosion-img.png">
      </div>

      <NuxtLink to="/shop">
        <UButton
          color="link"
          trailing-icon="i-lucide-arrow-right"
          class="animateText shopNowBtn flex mx-auto relative z-10 sm:mt-24 mt-16"
        >
          Shop now
        </UButton>
      </NuxtLink>

      <p class="animateText text-center text-customBunker-950 text-sm font-bold relative z-10 pb-1">
        Save 20% off your first order.
      </p>
    </div>
  </section>
</template>

<script setup>
import { animate, stagger } from "motion-v"

function framerMotion()
{
  animate(".newLineup .animateText", { opacity: [0, 1], y: [50, 0], }, { delay: stagger(.05) });
  animate(".newLineup__image__donaldPill", { rotate: [10, -10], scale: [.4, 1] }, { duration: 1.75, });
  animate(".newLineup__image__grenadePill", { rotate: [10, -10], scale: [.4, 1.25] }, { duration: 2.15 });
  animate(".newLineup__image__pinkPill", { rotate: [10, -10], scale: [.4, 1] }, { duration: 1.75 });
}

onMounted(() => {
  framerMotion()

  const gif = document.getElementById('gif');
  
  setTimeout(() => {
    gif.style.display = 'none'
  }, 2450);
})
</script>

<style lang="scss" scoped>
.newLineup {
  background-color: #fff;

  &__image {
    position: relative;

    &__donaldPill,
    &__grenadePill,
    &__pinkPill {
      max-width: 110px;
      position: relative;
      z-index: 3;
      
      @media(max-width: 639px){
        max-width: 70px;
      }
    }

    &__donaldPill {
      top: 8px;
    }

    &__grenadePill {
      z-index: 4;
    }

    &__pinkPill {
      max-width: 120px;

      @media(max-width: 639px){
        max-width: 80px;
      }
    }

    &__explosion {
      min-width: 800px;
      height: 350px;
      position: absolute;
      top: -110px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;

      @media(max-width: 639px){
        min-width: 500px;
        height: 250px;
        top: -80px;
      }
      @media(max-width: 370px){
        // max-width: 500px;
        // width: 100%;
        // height: 250px;
        // top: -80px;
      }
      
      &--image{
        z-index: 1 !important;
      }
    }
  }
}
</style>
