import type { DefaultTheme } from 'vitepress'
import type { Topic } from '../types'
import TopicData from './topic'
import NavData from './nav'

export const TOPIC_PATH_PREFIX = '/Topic'

export function getTopicData(): Topic[] {
  return TopicData.map(t => ({
    name: t.name,
    path: `${TOPIC_PATH_PREFIX}${t.path}`,
    color: {
      bg: t.color.bg,
      text: t.color.text,
    },
  }))
}

export function getNav(): DefaultTheme.NavItem[] {
  return [...TopicData.map(t => ({
    text: t.name,
    link: `${TOPIC_PATH_PREFIX}${t.path}`,
  })), ...NavData]
}
