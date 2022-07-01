<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vitepress'
import LTag from '../Tag.vue'
import TagData from '../../../../../data/tag.json'
import ItemContainer from './ItemContainer.vue'

const props = defineProps<{
  path: string
  name: string
  cate: 'Easy' | 'Medium' | 'Hard'
  origin: string
}>()

const tag = computed(() => {
  const target = TagData.leetcode[props.cate]
  return {
    color: target.color,
    bg: target.bg,
  }
})

const router = useRouter()

const goTo = (path: string) => {
  router.go(path)
}

const open = (path: string) => {
  window.open(path, '_blank')
}
</script>

<template>
  <item-container leetcode :path="props.path" h-120px>
    <div dark="text-gray-800" w-full h-full flex="~ col" justify="between" items="start">
      <div text-18px class="title" w-full>
        {{ props.name }}
      </div>
      <div flex="~">
        <l-tag :content="props.cate" :bg="tag.bg" :color="tag.color" />
        <l-tag content="查看原题" bg="#0052cc" color="rgba(233, 236, 239)" ml-3 @click.stop="open(props.origin)" />
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
