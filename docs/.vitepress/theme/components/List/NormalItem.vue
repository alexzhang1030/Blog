<script setup lang="ts">
import ItemContainer from './ItemContainer.vue'

const props = defineProps<{
  path: string
  name: string
}>()
</script>

<template>
  <item-container :path="props.path">
    <div dark="text-gray-800" w-full h-full flex="~ col" justify="between" items="start">
      <div text-24px>
        {{ props.name }}
      </div>
    </div>
  </item-container>
</template>

<style scoped></style>
