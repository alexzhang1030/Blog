import { writeFileSync } from 'fs'
import inquirer from 'inquirer'
import fg from 'fast-glob'
import topic from '../data/topic.json'
import { padStart, taskLogger, withRoot } from './helper'
import { main as generatePageData } from './generate_data'

const question = [{
  type: 'list',
  name: 'topic_type',
  message: 'choose a topic type',
  choices: topic.map(item => item.name),
}] as inquirer.ListQuestion[]

async function main() {
  const { topic_type } = await inquirer.prompt(question)
  const { path_name: path, questions } = topic.find(item => item.name === topic_type)!
  const answers = await inquirer.prompt(questions) as Record<string, string>
  const files = fg.sync([`./docs/Topic/${path}/*.md`], { dot: true })
  const name = padStart((answers.specify_number ? answers.specify_number : files.length + 1).toString(), 5, '0')
  const fullCreatePath = withRoot(`./docs/Topic/${path}/${name}.md`)
  writeFileSync(fullCreatePath, getInitFileContent(answers))
  taskLogger.end(`${topic_type} 创建完毕`)
  await generateData(topic_type)
}

function getInitFileContent(args: Record<string, string>) {
  let content = ''
  const keys = Object.entries(args)
  if (keys.length) {
    content += '---\n'
    for (const [key, value] of keys)
      content += `${key}: ${value}\n`
    content += '---\n\r'
    content += `# ${args.name}\n`
  }
  return content
}

async function generateData(type: string) {
  taskLogger.info(`开始生成${type}数据`)
  generatePageData(type)
}

main()

