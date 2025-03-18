<template>
  <section class="newLineup bg-customWhite-100">
    <div class="max-w-[1300px] mx-auto box-border py-5 px-5">
      <h1 class="text-center text-4xl font-bold relative z-10">
        Our explosive <br class="hidden sm:block" />
        new lineup.
      </h1>
      <p class="text-center text-sm font-semibold mt-2 relative z-10">
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
          src="/images/drugs/pink-pill.png"
          alt="Imagem ilustrativa"
        />
        <img
          class="newLineup__image__explosion"
          src="/images/backgrounds/explosition-multicolor.png"
          alt="Imagem ilustrativa"
        />
      </div>

      <UButton
        color="link"
        trailing-icon="i-lucide-arrow-right"
        class="flex mx-auto relative z-10"
      >
        Shop now
      </UButton>

      <p class="text-center text-sm relative z-10">
        Save 20% off your first order.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.newLineup {
  &__image {
    position: relative;

    &__donaldPill,
    &__grenadePill,
    &__pinkPill {
      position: relative;
      z-index: 1;
      transform: rotate(-10deg);
    }

    &__donaldPill {
      max-width: 110px;
      top: 8px;
    }

    &__grenadePill {
      max-width: 150px;
      transform: rotate(-10deg) scale(1.25);
    }

    &__pinkPill {
      max-width: 160px;
    }

    &__explosion {
      width: 500px;
      height: 350px;
      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
