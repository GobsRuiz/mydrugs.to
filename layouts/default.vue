<template>
  <div>
    <LayoutsHeaderComponent />

    <main 
      :class="['main', pageIsHome ? '' : 'my-7']" 
      :style="mainHeight"
    >
        <slot />
    </main>

    <LayoutsFooterComponent />
  </div>
</template>

<script setup>
const route = useRoute()
const pageIsHome = computed(() => route.name === 'index')

const screenWidth = ref(0)
const mainHeight = computed(() => screenWidth.value > 991 ? { minHeight: '747px' } : {} )

function setHeightToMainTag()
{
  const header = document.querySelector("header")
  const main = document.querySelector("main")
  const footer = document.querySelector("footer")

  if(header, main, footer){
    main.style.minHeight = (window.innerHeight - (header.offsetHeight + footer.offsetHeight + 56)) + "px"
  }
}

function eventResize()
{
  window.addEventListener("resize", () => {
    screenWidth.value = innerWidth
  })
}

onMounted(() => {
  screenWidth.value = innerWidth
  
  setHeightToMainTag()
  eventResize()
})
</script>
