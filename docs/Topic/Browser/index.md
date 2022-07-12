---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import NormalItem from "/@theme/components/List/NormalItem.vue"
import { getDataByTopicName } from '/@theme/data'

const props = {
  title: "浏览器",
  subTitle: "Articles"
}

const data = getDataByTopicName("browser")
</script>

<Container v-bind="props">
  <NormalItem v-for="item in data" :key="item.id" v-bind="item" />
</Container>
