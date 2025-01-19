<template>
  <div id="container"></div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue';
import GMap from '@/utils/GaodeMap/index'

onMounted(() => {
  setTimeout(() => {
    const map = new GMap({ container: 'container' })
  }, 3000)
  nextTick(() => {
    
  })
})

</script>

<style lang="css">
#container {
  width: 100%;
  height: 100%;
}
</style>