import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ImageCarousel } from "@/components/ImageCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImageCarousel />
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
