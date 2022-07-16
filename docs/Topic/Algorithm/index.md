---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import NormalItem from "/@theme/components/List/NormalItem.vue"
import { getDataByTopicName } from '/@theme/data'

const props = {
  title: "算法与数据结构",
  subTitle: "Articles"
}

const data = getDataByTopicName("algorithm")
</script>

<Container v-bind="props">
  <NormalItem v-for="item in data" :key="item.id" v-bind="item" />
</Container>
