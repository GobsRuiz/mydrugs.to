<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <UModals />
  </div>
</template>

<script setup>
const useColor = useColorMode()
useColor.preference = 'light'
</script>

<style lang="scss">
body{
  @apply bg-customBunker-950;
}
</style>