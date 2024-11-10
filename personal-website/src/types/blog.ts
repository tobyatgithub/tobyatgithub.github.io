export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  content: string
  author: {
    name: string
    avatar: string
  }
} 