# Toby Huang - Personal Website

A modern, responsive personal website built with Next.js, showcasing professional experience, services, and content creation. The site serves as a hub for professional presence and client engagement.

## 🎯 Project Goals

- Create a professional landing page highlighting technical expertise and services
- Showcase project portfolio and content creation
- Provide easy contact methods for potential clients and collaborators
- Signal future direction in smart hardware while maintaining current service offerings
- Implement responsive design with optimal performance

## 🏗️ Technical Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics
- **Content Management**: MDX for blog posts

## 📋 Core Features

### Landing Page
- Hero section with professional introduction
- Currently building section with latest projects
- Services overview with detailed descriptions
- Featured projects showcase
- Content creation hub
- Contact information and social links

### Project Showcase
- Project cards with:
  - Project thumbnail
  - Brief description
  - Technologies used
  - Live demo link (if applicable)
  - GitHub repository link (if applicable)

### Content Hub
- Blog posts section
- YouTube video embeddings
- Technical writing samples
- Filter and search functionality

### Contact Section
- Professional social media links
- Contact form
- Booking system for consultations

## 📂 Project Structure

```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── lib/                # Utility functions
├── styles/            # Global styles
└── content/           # MDX content
```

## 🎨 Design Guidelines

### Color Palette
- Primary: #3B82F6 (Blue)
- Secondary: #10B981 (Green)
- Accent: #6366F1 (Indigo)
- Background: #0F172A (Dark blue)
- Text: #F8FAFC (Light)

### Typography
- Headings: Inter
- Body: System font stack
- Code: JetBrains Mono

## 📱 Responsive Design

The website will be fully responsive with breakpoints:
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Large Desktop: 1280px

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Content Management

Content for the blog and projects will be managed through MDX files in the `content` directory. This allows for easy updates and version control of all content.

## 🔍 SEO

- Implemented with Next.js metadata API
- OpenGraph images for social sharing
- Structured data for better search engine visibility
- Sitemap generation
- robots.txt configuration

## 📈 Performance Targets

- Lighthouse score > 90 in all categories
- Core Web Vitals within Google's recommended ranges
- First Contentful Paint < 1.2s
- Time to Interactive < 2.4s

## 🔜 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Newsletter subscription
- [ ] Project filtering system
- [ ] Automated project card generation from GitHub
- [ ] Integration with YouTube API for auto-updating content
- [ ] Interactive hardware project showcase section

## 📄 License

MIT License - feel free to use this code for your own personal website!

## 👤 Author

**Toby Huang**
- Website: [YourWebsite.com]
- GitHub: [@YourGitHub]
- LinkedIn: [Your LinkedIn]