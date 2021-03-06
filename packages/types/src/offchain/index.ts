import CID from 'cids'
import { IpfsCid as RuntimeIpfsCid } from '../substrate/interfaces'

export { CID }

export type CommonContent =
  CommentContent |
  PostContent |
  SpaceContent |
  ProfileContent |
  SharedPostContent

export type Activity = {
  account: string
  block_number: string
  event_index: number
  event: EventsName
  /** Account id. */
  following_id?: string
  space_id?: string
  post_id?: string
  comment_id?: string
  /** Date of this activity. Example: "2020-12-03T19:22:36.000Z" */
  date: string
  aggregated: boolean
  agg_count: number
}

type FilterByTags = {
  data: string[]
}

type Url = {
  data: string
}

type NavTabContent = FilterByTags | Url

type ContentType = 'by-tag' | 'url'

export type NavTab = {
  id: number
  type: ContentType
  content: NavTabContent
  title: string
  description: string
  hidden: boolean
}

export type NamedLink = {
  name: string
  url?: string
}

export type SpaceContent = {
  name: string
  about: string
  image: string
  email: string
  tags: string[]
  links: string[] | NamedLink[]
  navTabs?: NavTab[]
}

export type SharedPostContent = {
  body: string
}

export type ProposalContent = {
  network: 'kusama' | 'polkadot'
  proposalIndex: number
}

export type PostExt = {
  proposal?: ProposalContent
}

export type PostContent = SharedPostContent & {
  title: string
  image: string
  tags: string[]
  canonical: string
  ext?: PostExt
}

export type CommentContent = {
  body: string
}

export type ProfileContent = {
  name: string
  avatar: string
  about: string
}

export type IpfsCid = string | CID | RuntimeIpfsCid

export type EventsName =
  'AccountFollowed' |
  'SpaceFollowed' |
  'SpaceCreated' |
  'CommentCreated' |
  'CommentReplyCreated' |
  'PostCreated' |
  'PostShared' |
  'CommentShared' |
  'PostReactionCreated' |
  'CommentReactionCreated'

export type Counts = {
  postsCount: number
  commentsCount: number
  reactionsCount: number
  followsCount: number
  spacesCount: number
  activitiesCount: number
}
