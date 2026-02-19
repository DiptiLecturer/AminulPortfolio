import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TrainingSection from "@/components/TrainingSection";
import ProjectGrid from "@/components/ProjectGrid";
import SuccessStory from "@/components/SuccessStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsBar />
      <TrainingSection />
      <ProjectGrid />
      <SuccessStory />
      <Footer />
    </div>
  );
};

export default Index;
