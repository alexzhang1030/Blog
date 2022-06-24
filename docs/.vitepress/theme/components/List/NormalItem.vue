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
      <div text-18px w-full class="title">
        {{ props.name }}
      </div>
    </div>
  </item-container>
</template>

<style scoped>
.title {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
