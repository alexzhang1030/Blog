export interface Topic {
  name: string
  // base by Topic/
  path: string
  color: {
    bg: string
    text: string
  }
}

export interface Leetcode {
  name: string
  path: string
  // "Easy", "Medium", "Hard"
  cate: string
  origin: string
}
