import About from "@/components/home-page/About";
import Business from "@/components/home-page/Business";
import HeroSection from "@/components/home-page/HeroSection";
import Testimonials from "@/components/home-page/Testimonials";
import Trending from "@/components/home-page/Trending";
import Work from "@/components/home-page/Work";

// Home page of the website
export default function Home() {
  return (
    <main>
      <HeroSection />
      <Work />
      <Trending />
      <Testimonials />
      <About />
      <Business />
    </main>
  );
}
