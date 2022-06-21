<script setup lang="ts">
import { useRouter } from 'vitepress'

const props = defineProps<{
  name: string
  link: string
}>()

const router = useRouter()

const goToLink = () => {
  router.go(props.link)
}
</script>

<template>
  <div
    w-full
    md:w="25%" h-80px flex="~"
    items="center" justify="flex-start"
    px-2 box-border rounded-md
    hover="translate-y--1" transition="all"
    cursor="pointer" @click="goToLink()"
  >
    {{ props.name }}
  </div>
</template>

<style scoped></style>
