<script setup lang="ts">
import { getTopicData } from '../data'
import TopicContainer from './Topic/Container.vue'
import Cate from './Cate.vue'

const TopicData = getTopicData()
</script>

<template>
  <div class="container" px-4 md:px-0 box-border m="0 auto">
    <cate title="Topic">
      <topic-container
        v-for="(topic, i) of TopicData" :key="i" text="24px"
        :style="{ color: topic.color.text, backgroundColor: topic.color.bg }"
        :name="topic.name" :link="topic.path"
      />
    </cate>
  </div>
</template>

<style scoped>
.container {
  max-width: calc(var(--vp-layout-max-width) - 64px);
}
</style>
