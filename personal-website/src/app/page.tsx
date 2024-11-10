import HeroSection from "@/components/sections/HeroSection"
import CurrentlyBuildingSection from "@/components/sections/CurrentlyBuildingSection"
import ServicesSection from "@/components/sections/ServicesSection"
import ProjectsSection from "@/components/sections/ProjectsSection"
import ContentSection from "@/components/sections/ContentSection"

export default function Home() {
  return (
    <>
      <HeroSection />
      <CurrentlyBuildingSection />
      <ServicesSection />
      <ProjectsSection />
      <ContentSection />
    </>
  )
}
