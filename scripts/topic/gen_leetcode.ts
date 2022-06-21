import { readFileSync, writeFileSync } from 'fs'
import fg from 'fast-glob'
import { getLeetcodePath, getTargetDir, getTargetPath } from '../helper'
import type { Leetcode } from '../../types'

const files = fg.sync(['docs/Topic/Leetcode/Problems/*.md'], { dot: true })
const heading1 = /^#\s+(.*)?/
const names: string[] = []

const getBaseFile = () => {
  const file = readFileSync(files[0], 'utf8')
  const name = heading1.exec(file)![1]
  names.push(name)
}

getBaseFile()

const writeFile = (names: string[]) => {
  const finalResult: Leetcode[] = []
  for (const item of names) {
    const count = item.split('.')[0]
    const path = getTargetPath(getLeetcodePath(count))
    finalResult.push({
      name: item,
      path,
    })
  }
  writeFileSync(getTargetDir('leetcode.json'), JSON.stringify(finalResult, null, 2))
}

writeFile(names)

console.error('done...')
