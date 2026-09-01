import Navbar from '@/components/Navbar';
import FloatingParticles from '@/components/FloatingParticles';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ProjectGallery from '@/components/ProjectGallery';
import AwardsSection from '@/components/AwardsSection';
import VolunteeringSection from '@/components/VolunteeringSection';
import LanguagesSection from '@/components/LanguagesSection';
import ContactBanner from '@/components/ContactBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <FloatingParticles />
      
      <main className="relative z-10">
        <div id="home" className="scroll-mt-24">
          <HeroSection />
        </div>
        <StatsSection />
        <div id="experience" className="scroll-mt-24">
          <ExperienceSection />
        </div>
        <div id="projects" className="scroll-mt-24">
          <ProjectsSection />
          <ProjectGallery />
        </div>
        <div id="skills" className="scroll-mt-24">
          <SkillsSection />
        </div>
        <div id="education" className="scroll-mt-24">
          <EducationSection />
        </div>
        <AwardsSection />
        <VolunteeringSection />
        <LanguagesSection />
        <ContactBanner />
      </main>
    </div>
  );
};

export default Index;