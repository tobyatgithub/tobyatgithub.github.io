"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/types/blog"
import Markdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { Components } from 'react-markdown'
import { type ReactElement } from 'react'

interface BlogPostProps {
  post: BlogPost
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Back button */}
        <Link 
          href="/content" 
          className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Content
        </Link>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold text-gray-200 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-400 gap-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Author */}
        <div className="flex items-center mb-8">
          <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-gray-200 font-medium">{post.author.name}</div>
            <div className="text-gray-400 text-sm">Author</div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <Markdown
            components={{
              code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || '')
                const inline = !className
                
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {post.content}
          </Markdown>
        </div>
      </motion.div>
    </article>
  )
}

export default BlogPost 