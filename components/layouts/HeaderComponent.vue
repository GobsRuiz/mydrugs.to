<template>
  <header class="header max-w-[1200px] mx-auto flex items-center justify-between box-border px-5 py-4">
    <NuxtLink to="/">
        <img src="/assets/images/logos/mydrugs.png" alt="Logo MyDrug" class="max-w-[40px]">
    </NuxtLink>
    
    <nav class="hidden sm:flex header__nav">
        <NuxtLink class="header__nav__link" to="/">
            Home
        </NuxtLink>

        <NuxtLink class="header__nav__link" to="shop">
            Shop
        </NuxtLink>

        <NuxtLink class="header__nav__link" to="faq">
            Faq
        </NuxtLink>

        <NuxtLink class="header__nav__link" to="contact">
            Contact
        </NuxtLink>
    </nav>

    <div class="header__rightContent">
        <UButton color="transparent">
            LOGIN
        </UButton>
    </div>
  </header>
</template>

<script setup>

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