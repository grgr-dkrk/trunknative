import { TagListType } from './Tag'
import { LocationType } from './Location'

export type ArticleType = {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string | undefined
  location: LocationType | undefined
  tags: TagListType[]
  isHomeContent?: boolean
}

export type ArticleListType = ArticleType[]
