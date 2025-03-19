<template>
  <header class="header max-w-[1300px] mx-auto sm:flex items-center justify-between grid grid-cols-[100px,40px,100px] box-border px-5 py-4">
    <div class="sm:hidden flex justify-start">
        <UDropdown
            :items="links"
        >
            <UButton icon="icon-park-outline:hamburger-button" color="transparent" variant="outline" />
        </UDropdown>
    </div>

    <NuxtLink class="animateText" to="/">
        <img src="/images/logos/mydrugs.png" alt="Logo MyDrug" class="sm:max-w-[40px] max-w-[30px] sm:mx-0 mx-auto">
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

    <div class="animateText header__rightContent flex justify-end">
        <UButton color="transparent" class="sm:text-sm text-xs">
            LOGIN
        </UButton>
    </div>
  </header>
</template>

<script setup>
import { animate, stagger } from "motion-v"



const links = ref([
    [
        {
            label: "Home",
            to: '/',
        },
        {
            label: "Shop",
            to: '/shop',
        },
        {
            label: "Faq",
            to: '/faq',
        },
        {
            label: "Contact",
            to: '/contact',
        },
    ],
    [
        {
            label: "GobsRuiz",
            to: 'https://gobsruiz.com.br/',
            target: '_blank'
        },
    ]
])



// Functions
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