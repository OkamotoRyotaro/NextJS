const ArticleContentsType = {
  Title: "Title",
  Text: "Text",
  Image: "Image",
  Chapter: "Chapter",
} as const

export type ArticleContentsType = typeof ArticleContentsType[keyof typeof ArticleContentsType];