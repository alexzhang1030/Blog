---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import NormalItem from "/@theme/components/List/NormalItem.vue"
import { getEngineering } from '/@theme/data'

const props = {
  title: "工程化",
  subTitle: "Articles"
}

const data = getEngineering()
</script>

<Container v-bind="props">
  <NormalItem v-for="item in data" :key="item.id" v-bind="item" />
</Container>
