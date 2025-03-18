<template>
  <div class="productPage max-w-[1300px] mx-auto box-border px-5">
    <div class="productPage__product grid gap-10 lg:grid-cols-[minmax(200px,300px)_minmax(350px,400px)_300px] sm:grid-cols-[minmax(280px,400px)_minmax(250px,300px)] grid-cols-1 lg:items-center lg:justify-between md:justify-center mt-7">
        <div class="productPage__product__image lg:block hidden lg:col-start-auto md:col-start-1">
            <img class="w-full" src="/images/drugs/grenade-pill.png" alt="Droga">
        </div>

        <div class="productPage__product__about col-span-1 lg:col-start-2 md:col-start-1 md:row-start-1 sm:max-w-max max-w-[300px]">
            <p class="text-customBlue-300 text-xs font-bold ml-1 -m-1">NEW</p>
            <h1 class="text-customWhite-100 lg:text-6xl md:text-4xl sm:text-4xl text-3xl font-bold -mb-1">
                GRENADE <br>
                PILL
            </h1>
            <p class="text-customWhite-400 text-2xl font-bold mb-2">
                Premium Line
            </p>
            <img class="max-w-[120px] mb-2 pb-1" src="/images/ratings.png" alt="rating">
            <p class="text-customWhite-100 lg:text-6xl md:text-4xl sm:text-4xl text-3xl font-bold -m-1.5">
                0.0024 BTC
            </p>
            <p class="text-customWhite-100 text-lg font-bold">
                24.06 €
            </p>

            <p class="text-customWhite-400 text-md font-semibold mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt blanditiis molestiae ad dolorum, eos numquam! Totam sint vitae inventore incidunt, mollitia culpa corrupti illum?
            </p>
        </div>

        <div class="productPage__product__buy border-2 border-customWhite-600 rounded-lg box-border py-4 px-8 lg:h-full md:h-max lg:col-start-3 md:col-start-2 md:row-start-1 sm:max-w-max max-w-[300px]">
            <h3 class="text-customWhite-100 lg:text-3xl text-2xl font-bold mb-3">
                Buy now
            </h3>

            <p class="text-customWhite-100 text-sm font-semibold mb-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate velit ea debitis incidun.
            </p>

            <p class="text-customWhite-400 text-xs font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p class="text-primary text-sm font-bold">
                In Stock
            </p>

            <div class="flex items-center justify-between my-4 pb-1">
                <button class="flex items-center border border-customWhite-100 rounded-full p-2">
                    <svg class="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Remove_Minus"> <path id="Vector" d="M6 12H18" stroke="#f3efee" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
                </button>

                <button class="flex items-center border border-customWhite-100 rounded-full p-2">
                    <UIcon name="lets-icons:add-round" class="w-[30px] h-[30px] text-customWhite-100" />
                </button>
            </div>

            <UButton color="transparent" class="block w-full mb-3 text-lg">
                Add to Cart
            </UButton>
            <UButton color="primary" class="block w-full text-lg">
                Check Out
            </UButton>

            <p class="text-customWhite-400 text-xs text-center font-semibold mt-3">
                Lorem ipsum dolor sit.
            </p>
        </div>
    </div>

    <div class="h-[1px] bg-customWhite-400 my-8"></div>

    <div class="grid lg:grid-cols-4 grid-cols-1 gap-6 px-6">
        <UiProductCardComponent class="max-w-[300px]" />
        <UiProductCardComponent class="max-w-[300px]" />
        <UiProductCardComponent class="max-w-[300px]" />
        <UiProductCardComponent class="max-w-[300px]" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

console.log(route)
</script>

<style lang="scss" scoped>

</style>