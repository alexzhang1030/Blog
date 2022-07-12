---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import NormalItem from "/@theme/components/List/NormalItem.vue"
import { getDataByTopicName } from '/@theme/data'
import { ref } from 'vue'

const props = {
  title: "浏览器",
  subTitle: "Articles"
}

const data = ref([])

getDataByTopicName("browser").then(res => {
  data.value = res
})
</script>

<Container v-bind="props">
  <NormalItem v-for="item in data" :key="item.id" v-bind="item" />
</Container>
