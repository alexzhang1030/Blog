import { writeFileSync } from 'fs'
import Inquirer from 'inquirer'
import TopicData from '../data/topic.json'
import type { TopicDataItem, TopicDataItemWhenGenerate } from '../types/index'
import { withRoot } from './helper'

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What\'s the new topic name?',
  },
  {
    type: 'input',
    name: 'display_name',
    message: 'What\'s the new topic show name on website?',
  },
  {
    type: 'input',
    name: 'path_name',
    message: 'What\'s the new topic path on your disk?',
    default: ({ name }: { name: string }) =>
      `${name.replace(/(\w)/, (_, l) => l.toUpperCase())}/Articles`,
  },
  {
    type: 'input',
    name: 'home_page',
    message: 'What\'s the new topic home page path on your disk?',
    default: ({ name }: { name: string }) =>
      `/${name.replace(/(\w)/, (_, l) => l.toUpperCase())}/index`,
  },
  {
    type: 'input',
    name: 'background_color',
    message: 'What\'s the new topic panel background color?(default #0052cc)`',
    default: '#0052cc',
  },
  {
    type: 'input',
    name: 'text_color',
    message: 'What\'s the new topic panel text color?(default rgba(233, 236, 239))`',
    default: 'rgba(233, 236, 239)',
  },
] as Inquirer.Question[]

async function generateTopicData() {
  const {
    name, display_name,
    background_color, text_color,
    path_name, home_page,
  }
  = await Inquirer.prompt(questions) as TopicDataItemWhenGenerate
  const data = {
    name,
    display_name,
    path_name,
    home_page,
    color: {
      bg: background_color,
      text: text_color,
    },
    questions: [],
  } as TopicDataItem
  writeFileSync(withRoot('./data/topic.json'), JSON.stringify([...TopicData, data], null, 2))
  return data
}

// async function generateRealPath(data) {

// }

async function main() {
  // 1. generate topic data
  await generateTopicData()
  // 2. generate real path
}

main()
