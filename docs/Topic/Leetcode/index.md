---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import LeetcodeItem from "/@theme/components/List/LeetcodeItem.vue"
import { getDataByTopicName } from '/@theme/data'
import { ref } from 'vue'

const props = {
  title: "Leetcode CN",
  subTitle: "Solved Problems"
}

const leetcodeData = ref([])

getDataByTopicName("leetcode").then(res => {
  console.log({res});
  leetcodeData.value = res
})
</script>

<Container v-bind="props">
  <leetcode-item v-for="item in leetcodeData" v-bind="item" />
</Container>
