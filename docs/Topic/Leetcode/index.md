---
layout: page
---

<script setup lang="ts">
import Container from '/@theme/components/Topic/TopicPageContainer.vue'
import ItemContainer from '/@theme/components/List/ItemContainer.vue'
import { getLeetcode } from '/@theme/data'

const props = {
  title: "Leetcode CN",
  subTitle: "Problems"
}

const LeetcodeData = getLeetcode()
</script>


<Container v-bind="props">
  <item-container leetcode v-for="item in LeetcodeData" :path="item.path"></item-container>
</Container>
