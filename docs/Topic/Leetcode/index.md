---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import LeetcodeItem from "/@theme/components/List/LeetcodeItem.vue"
import { getLeetcode } from '/@theme/data'

const props = {
  title: "Leetcode CN",
  subTitle: "Problems"
}

const LeetcodeData = getLeetcode()
</script>

<Container v-bind="props">
  <leetcode-item v-for="item in LeetcodeData" v-bind="item" />
</Container>
