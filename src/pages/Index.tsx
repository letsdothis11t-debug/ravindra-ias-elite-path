import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ToppersSection from "@/components/ToppersSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DashboardPreview from "@/components/DashboardPreview";
import ResourcesSection from "@/components/ResourcesSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ToppersSection />
      <CoursesSection />
      <WhyChooseUs />
      <DashboardPreview />
      <ResourcesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
