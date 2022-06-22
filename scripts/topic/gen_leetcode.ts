import { readFileSync, writeFileSync } from 'fs'
import fg from 'fast-glob'
import matter from 'gray-matter'
import { getLeetcodePath, getTargetDir, getTargetPath, taskLogger, withRoot } from '../helper'
import type { Leetcode } from '../../types'

const files = fg.sync(['./docs/Topic/Leetcode/Problems/*.md'], { dot: true })

const heading1 = />?\n#\s+(.*)?/
const names: { name: string; cate: string; origin: string }[] = []

const getBaseFile = () => {
  taskLogger.loadingStart('Leetcode 数据生成中...')
  const file = readFileSync(withRoot(files[0]), 'utf8')
  const name = heading1.exec(file)![1]
  const { cate, origin } = matter(file).data
  names.push({
    name,
    cate,
    origin,
  })
}

const writeFile = (names: { name: string; cate: string; origin: string }[]) => {
  const finalResult: Leetcode[] = []
  for (const item of names) {
    const { name, cate, origin } = item
    const count = name.split('.')[0]
    const path = getTargetPath(getLeetcodePath(count))
    finalResult.push({
      name,
      path,
      cate,
      origin,
    })
  }
  writeFileSync(getTargetDir('leetcode.json'), JSON.stringify(finalResult, null, 2))
  taskLogger.loadingEnd()
}

function main() {
  taskLogger.start('Leetcode 开始生成')
  getBaseFile()
  writeFile(names)
  taskLogger.end('Leetcode 生成完毕')
}

main()
