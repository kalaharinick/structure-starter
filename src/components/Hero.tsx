import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import appleJuiceHero from "@/assets/apple-juice-hero.jpg";
import orangeJuiceHero from "@/assets/orange-juice-hero.jpg";
import watermelonJuiceHero from "@/assets/watermelon-juice-hero.jpg";

export const Hero = () => {
  const featuredProducts = [
    {
      image: appleJuiceHero,
      title: "Apple Juice with Honey",
      subtitle: "92% Pure Natural Goodness"
    },
    {
      image: orangeJuiceHero,
      title: "100% Tangerine Orange",
      subtitle: "Fresh & Vitamin Rich"
    },
    {
      image: watermelonJuiceHero,
      title: "Cold Pressed Watermelon",
      subtitle: "Refreshing & Natural"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Fresh Juice
            <br />
            From The Heart
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Premium quality fruit juices made with 100% natural ingredients. 
            Taste the difference of authentic, cold-pressed goodness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 pb-6"
            >
              <div className="h-64 bg-muted relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{product.title}</h3>
                <p className="text-muted-foreground">{product.subtitle}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};