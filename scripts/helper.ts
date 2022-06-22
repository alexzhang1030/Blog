import { resolve } from 'path'
import { NL } from '@alexzzz/nl'

export const root = process.cwd()

export const withRoot = (path: string) => resolve(root, path)

export function getTargetDir(targetFile: string): string {
  return resolve(root, './data/', targetFile)
}

export function getTargetPath(targetPath: string): string {
  return `/Topic/${targetPath}`
}

const LeetcodeBasePath = 'Leetcode/Problems/'

export function getLeetcodePath(count: string) {
  return `${LeetcodeBasePath}${padStart(count, 5, '0')}`
}

function padStart(source: string, count: number, padStr: string): string {
  for (let i = source.length; i < count; i++)
    source = padStr + source

  return source
}

export const taskLogger = new NL('任务', true)
