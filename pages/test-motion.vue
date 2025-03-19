<template>
  <div class="container relative overflow-hidden" style="height: 50px;">
    <div
      v-for="(item, index) in texts"
      :key="index"
      class="text absolute w-full text-center flex items-center justify-center"
      :ref="setTextRef"
      :style="{
        opacity: currentTextIndex === index ? 1 : 0,
        background: item.background
      }"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { animate } from 'motion-v'

// Lista de textos com background
const texts = [
  { text: 'Texto 1', background: 'red' },
  { text: 'Texto 2', background: 'green' },
  { text: 'Texto 3', background: 'blue' }
]
const currentTextIndex = ref(0)

// Array para armazenar referências dos elementos de texto
const textRefs = ref([])

function setTextRef(el) {
  if (el && !textRefs.value.includes(el)) {
    textRefs.value.push(el)
  }
}

let intervalId = null

function animateTransition(oldIndex, newIndex) {
  // Anima o elemento atual saindo para cima (200ms)
  if (textRefs.value[oldIndex]) {
    animate(textRefs.value[oldIndex], { opacity: 0, y: -50 }, { duration: 0.2 })
  }

  // Prepara o novo elemento: posiciona abaixo com opacidade 0
  const newEl = textRefs.value[newIndex]
  if (newEl) {
    newEl.style.opacity = 0
    newEl.style.transform = 'translateY(50px)'
    // Anima o novo elemento entrando (200ms com delay de 150ms)
    animate(newEl, { opacity: 1, y: 0 }, { duration: 0.2, delay: 0.15 })
  }
}

onMounted(() => {
  // Alterna os textos a cada 2 segundos
  intervalId = setInterval(() => {
    const oldIndex = currentTextIndex.value
    const newIndex = (currentTextIndex.value + 1) % texts.length
    animateTransition(oldIndex, newIndex)
    currentTextIndex.value = newIndex
  }, 20000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
}
.text {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  color: white;
  font-weight: bold;
}
</style>
