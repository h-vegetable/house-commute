<template>
  <div class="index-page" id="index">
    <GaodeMap></GaodeMap>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import GaodeMap from '@/components/Map/map.vue'

defineComponent([GaodeMap])
</script>

<style>
.index-page {
  width: 100%;
  height: 100%;
}
</style>