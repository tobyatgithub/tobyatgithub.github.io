"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar, Youtube, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    title: "Building Scalable IoT Architectures",
    description: "Learn how to design and implement scalable architectures for IoT applications, including best practices for data collection, processing, and storage.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "IoT",
    slug: "building-scalable-iot-architectures"
  },
  {
    title: "Modern State Management in React",
    description: "A comprehensive guide to state management in React applications, comparing different approaches like Redux, Zustand, and Jotai with practical examples.",
    date: "2024-03-01",
    readTime: "10 min read",
    category: "React",
    slug: "modern-state-management-react"
  },
  {
    title: "Hardware Integration with Node.js",
    description: "Explore how to integrate hardware devices with Node.js applications using serial communication, USB protocols, and native modules.",
    date: "2024-02-15",
    readTime: "12 min read",
    category: "Hardware",
    slug: "hardware-integration-nodejs"
  },
  {
    title: "Optimizing Next.js Applications",
    description: "Deep dive into performance optimization techniques for Next.js applications, including image optimization, code splitting, and caching strategies.",
    date: "2024-02-01",
    readTime: "15 min read",
    category: "Performance",
    slug: "optimizing-nextjs-applications"
  }
]

const videos = [
  {
    title: "Building a Smart Home Dashboard",
    description: "Learn how to create a real-time dashboard for IoT devices using Next.js, WebSocket, and MongoDB.",
    thumbnail: "/videos/smart-home-thumb.jpg",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    views: "2.3K views",
    duration: "32:15"
  },
  {
    title: "Hardware Monitoring with Electron",
    description: "Tutorial on building a cross-platform hardware monitoring application using Electron and system APIs.",
    thumbnail: "/videos/hardware-monitor-thumb.jpg",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    views: "1.8K views",
    duration: "28:45"
  },
  {
    title: "Next.js 13 App Router Deep Dive",
    description: "Comprehensive guide to Next.js 13's new app router, server components, and data fetching patterns.",
    thumbnail: "/videos/nextjs-thumb.jpg",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    views: "3.1K views",
    duration: "45:20"
  }
]

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
  <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
    <CardHeader>
      <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          {post.date}
        </div>
        <Badge variant="secondary">{post.category}</Badge>
      </div>
      <CardTitle className="text-gray-200 hover:text-blue-400 transition-colors">
        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
      </CardTitle>
      <CardDescription className="text-gray-400">
        {post.description}
      </CardDescription>
    </CardHeader>
  </Card>
)

const VideoCard = ({ video }: { video: typeof videos[0] }) => (
  <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
    <CardHeader>
      <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden group">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Youtube className="h-12 w-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
          {video.duration}
        </div>
      </div>
      <CardTitle className="text-gray-200 hover:text-blue-400 transition-colors">
        {video.title}
      </CardTitle>
      <CardDescription className="text-gray-400">
        {video.description}
      </CardDescription>
      <div className="text-sm text-gray-400 mt-2">
        {video.views}
      </div>
    </CardHeader>
  </Card>
)

const ContentSection = () => {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-200 mb-4">Content</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Articles, tutorials, and video content about software development
          </p>
        </motion.div>

        <Tabs defaultValue="blog" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="blog" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Youtube className="h-4 w-4" />
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blog">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VideoCard video={video} />
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default ContentSection 