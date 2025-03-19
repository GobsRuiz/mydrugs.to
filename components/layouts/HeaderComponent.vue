<template>
  <header class="header max-w-[1300px] mx-auto flex items-center justify-between box-border px-5 py-4">
    <NuxtLink class="animateText" to="/">
        <img src="/images/logos/mydrugs.png" alt="Logo MyDrug" class="max-w-[40px]">
    </NuxtLink>
    
    <nav class="hidden sm:flex header__nav">
        <NuxtLink class="animateText header__nav__link" to="/">
            Home
        </NuxtLink>

        <NuxtLink class="animateText animateText header__nav__link" to="/shop">
            Shop
        </NuxtLink>

        <NuxtLink class="animateText header__nav__link" to="/faq">
            Faq
        </NuxtLink>

        <NuxtLink class="animateText header__nav__link" to="/contact">
            Contact
        </NuxtLink>
    </nav>

    <div class="animateText header__rightContent">
        <UButton color="transparent">
            LOGIN
        </UButton>
    </div>
  </header>
</template>

<script setup>
import { animate, stagger } from "motion-v"

function framerMotion()
{
  animate(".header .animateText", { opacity: [0, 1], y: [-20, 0], }, { delay: stagger(.05) });
}

onMounted(() => {
  framerMotion()
})
</script>

<style lang="scss" scoped>
.header{
    position: relative;
    z-index: 9;

    &__nav{
        &__link{
            @apply text-customWhite-400;
            font-size: 14px;
            cursor: pointer;
            margin-right: 30px;

            &:last-child{
                margin-right: 0;
            }

            &:hover{
                @apply text-customWhite-100;
            }
        }
    }
}
</style>