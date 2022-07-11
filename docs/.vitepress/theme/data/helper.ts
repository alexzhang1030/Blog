import type { DefaultTheme } from 'vitepress'
import type { Topic } from '../../../../types'
import TopicData from '../../../../data/topic.json'
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

export async function getSidebar(): Promise<DefaultTheme.Sidebar> {
  const result: DefaultTheme.Sidebar = {}
  for (let i = 0; i < TopicData.length; i++) {
    const t = TopicData[i]
    const { default: topicArticleData } = await import(`../../data/topic/${t.name}.json`, { assert: { type: 'json' } })
    result[`${TOPIC_PATH_PREFIX}/${t.path_name}`] = [{
      text: t.display_name,
      items: topicArticleData.map((item: any) => ({
        text: item.name,
        link: item.path,
      })),
    }]
  }
  return result
}

export async function getDataByTopicName(topicName: string) {
  return await import(`../../data/topic/${topicName}.json`, { assert: { type: 'json' } })
}
