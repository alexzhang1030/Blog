import type { DefaultTheme } from 'vitepress'
import type { Leetcode, Topic } from '../../../../types'
import TopicData from '../../../../data/topic.json'
// import data
import LeetcodeData from '../../../../data/topic/leetcode.json'
import EngineeringData from '../../../../data/topic/engineering.json'
import BrowserData from '../../../../data/topic/browser.json'
import NavData from './nav'

export const TOPIC_PATH_PREFIX = '/Topic'

export function getTopicData(): Topic[] {
  return TopicData.map(t => ({
    name: t.display_name,
    path: `${TOPIC_PATH_PREFIX}${t.home_page}`,
    color: {
      bg: t.color.bg,
      text: t.color.text,
    },
  }))
}

export function getNav(): DefaultTheme.NavItem[] {
  return [...TopicData.map(t => ({
    text: t.display_name,
    link: `${TOPIC_PATH_PREFIX}${t.home_page}`,
  })), ...NavData]
}

const mapping: Record<string, any> = {
  leetcode: LeetcodeData,
  engineering: EngineeringData,
  browser: BrowserData,
}

export async function getSidebar(): Promise<DefaultTheme.Sidebar> {
  const result: DefaultTheme.Sidebar = {}
  for (let i = 0; i < TopicData.length; i++) {
    const t = TopicData[i]
    result[`${TOPIC_PATH_PREFIX}/${t.path_name}`] = [{
      text: t.display_name,
      items: mapping[t.name].map((item: any) => ({
        text: item.name,
        link: item.path,
      })),
    }]
  }
  return result
}

export function getLeetcode(): Leetcode[] {
  return LeetcodeData
}

export function getEngineering() {
  return EngineeringData
}

export function getBrowserData() {
  return BrowserData
}
