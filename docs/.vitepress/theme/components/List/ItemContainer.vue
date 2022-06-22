<script setup lang="ts">
import { useRouter } from 'vitepress'

const props = defineProps<{
  path: string
}>()

const router = useRouter()

const goTo = () => {
  router.go(props.path)
}
</script>

<template>
  <div
    w="30%" rounded h-120px bg-gray-200 dark="bg-gray-300"
    hover="translate-y--2px" transition="duration-200" cursor="pointer"
    relative p-4 box-border
    @click="goTo"
  >
    <slot />
    <img src="../../img/leetcode.png" w-50px absolute right-0 bottom-0>
  </div>
</template>

<style scoped></style>
