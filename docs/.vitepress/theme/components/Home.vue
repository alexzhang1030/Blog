<script setup lang="ts">
import { getTopicData } from '../data'
import TopicContainer from './Topic/HomeItem.vue'
import Cate from './Header.vue'
import PageContainer from './PageContainer.vue'

const TopicData = getTopicData()
</script>

<template>
  <page-container>
    <cate title="Topic">
      <topic-container
        v-for="(topic, i) of TopicData" :key="i" text="24px"
        :style="{ color: topic.color.text, background: topic.color.bg }"
        :name="topic.name" :link="topic.path"
      />
    </cate>
  </page-container>
</template>

<style scoped>
.container {
  max-width: calc(var(--vp-layout-max-width) - 64px);
}
</style>
