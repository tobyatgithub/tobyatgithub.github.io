export const runtime = 'edge'

import { getBlogPost } from "@/data/blog-posts"
import BlogPost from "@/components/blog/BlogPost"
import { notFound } from "next/navigation"

interface BlogPostPageParams {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageParams) {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPost post={post} />
} 