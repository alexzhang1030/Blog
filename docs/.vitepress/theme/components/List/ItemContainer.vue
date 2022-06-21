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
    w-full rounded h-80px bg-gray-300
    hover="translate-y--5px" transition="duration-200" cursor="pointer"
    relative
    @click="goTo"
  >
    <img src="../../img/leetcode.png" w-50px absolute right-0 bottom-0>
  </div>
</template>

<style scoped></style>
