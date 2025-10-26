import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import WhySkippy from "@/components/WhySkippy";
import Testimonials from "@/components/Testimonials";
import Community from "@/components/Community";
import HeroSlider from "@/components/HeroSlider";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <HeroSlider />
      <HowItWorks />
      <WhySkippy />
      <Testimonials />
      <Community />
    </main>
  );
};

export default Home;
