"use client"

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar, Youtube, BookOpen } from "lucide-react"

const blogPosts = [
  {
    title: "Understanding Modern Web Architecture",
    description: "A deep dive into contemporary web development patterns...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development"
  },
  // Add more blog posts
]

const videos = [
  {
    title: "Building with Next.js 13",
    description: "Learn how to create modern web applications...",
    thumbnail: "/video1-thumb.jpg",
    videoId: "xyz123",
    views: "1.2K views"
  },
  // Add more videos
]

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
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                    <CardHeader>
                      <div className="flex items-center text-gray-400 text-sm mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {post.date} • {post.readTime}
                      </div>
                      <CardTitle className="text-gray-200">{post.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
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
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-gray-600 transition-all">
                    <CardHeader>
                      <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${video.videoId}`}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0"
                        />
                      </div>
                      <CardTitle className="text-gray-200">{video.title}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {video.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
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