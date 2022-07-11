---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import LeetcodeItem from "/@theme/components/List/LeetcodeItem.vue"
import { getDataByTopicName } from '/@theme/data'

const props = {
  title: "Leetcode CN",
  subTitle: "Solved Problems"
}

const LeetcodeData = getDataByTopicName("leetcode")
</script>

<Container v-bind="props">
  <leetcode-item v-for="item in LeetcodeData" v-bind="item" />
</Container>
