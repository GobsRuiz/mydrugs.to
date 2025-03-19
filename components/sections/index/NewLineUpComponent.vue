<template>
  <section class="newLineup" style="background-color: #fff;">
    <div class="max-w-[1300px] mx-auto box-border py-5 px-5">
      <h1 class="animateText text-center text-customBunker-950 text-4xl font-black relative z-10">
        Our explosive <br class="hidden sm:block" />
        new lineup.
      </h1>
      <p class="animateText text-center text-customBunker-950 text-sm font-semibold mt-2 relative z-10">
        For the best MDMA experience Ever
      </p>

      <div class="newLineup__image flex items-center justify-center mt-6 mb-5">
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

      <UButton
        color="link"
        trailing-icon="i-lucide-arrow-right"
        class="animateText shopNowBtn flex mx-auto relative z-10 mt-10"
      >
        Shop now
      </UButton>

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
  }, 2400);
})
</script>

<style lang="scss" scoped>
.shopNowBtn{
  text-shadow: 
    0 0 1px rgba(0, 0, 0, 0.3), 
    0 1px 1px rgba(0, 0, 0, 0.3),
    0 -1px 1px rgba(0, 0, 0, 0.3),
    1px 0px 1px rgba(0, 0, 0, 0.3),
    -1px 0px 1px rgba(0, 0, 0, 0.3)
  ;
}

.newLineup {
  overflow: hidden;
  &__image {
    position: relative;

    &__donaldPill,
    &__grenadePill,
    &__pinkPill {
      position: relative;
      z-index: 3;
    }

    &__donaldPill {
      max-width: 110px;
      top: 8px;
    }

    &__grenadePill {
      max-width: 110px;
      z-index: 4;
    }

    &__pinkPill {
      max-width: 120px;
    }

    &__explosion {
      width: 800px;
      height: 400px;
      position: absolute;
      top: -140px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      
      &--image{
        z-index: 1 !important;
      }
    }
  }
}
</style>
