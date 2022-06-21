<script setup lang="ts">
import PageContainer from '../PageContainer.vue'
import TopicHeader from './TopicHeader.vue'

const props = defineProps<{
  title: string
  subTitle: string
}>()
</script>

<template>
  <page-container>
    <topic-header :title="props.title" :sub="props.subTitle" />
    <div flex="~ col wrap" gap="20px" mt-20px>
      <slot />
    </div>
  </page-container>
</template>

<style scoped></style>
