import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Star, Droplets, Apple, Grape } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Apple Juice with Honey",
      description: "92% pure apple juice enriched with natural honey for perfect sweetness and nutrition",
      price: "$12.99",
      size: "1000ml",
      features: ["No Artificial Colors", "No Preservatives", "Rich in Vitamins", "Natural Honey"],
      color: "from-[hsl(var(--juice-yellow))] to-[hsl(var(--juice-orange))]",
      icon: <Apple className="w-6 h-6" />,
      bestseller: true
    },
    {
      name: "100% Tangerine Orange",
      description: "Fresh tangerine juice packed with Vitamin C and natural citrus goodness",
      price: "$10.99",
      size: "1000ml",
      features: ["100% Natural", "High Vitamin C", "Cold Pressed", "No Added Sugar"],
      color: "from-[hsl(var(--juice-orange))] to-[hsl(var(--juice-green))]",
      icon: <Star className="w-6 h-6" />,
      bestseller: false
    },
    {
      name: "Cold Pressed Watermelon",
      description: "Refreshing watermelon juice with no added sugars or artificial flavors",
      price: "$11.99",
      size: "650ml",
      features: ["Cold Pressed", "No Added Sugar", "Hydrating", "Natural Electrolytes"],
      color: "from-[hsl(var(--juice-red))] to-[hsl(var(--accent))]",
      icon: <Droplets className="w-6 h-6" />,
      bestseller: false
    },
    {
      name: "Mixed Berry Blend",
      description: "A delicious blend of strawberries, blueberries, and raspberries",
      price: "$13.99",
      size: "750ml",
      features: ["Antioxidant Rich", "Mixed Berries", "Natural Flavor", "Vitamin Packed"],
      color: "from-[hsl(var(--accent))] to-purple-500",
      icon: <Grape className="w-6 h-6" />,
      bestseller: false
    },
    {
      name: "Green Power Juice",
      description: "Nutrient-dense green juice with spinach, kale, and green apple",
      price: "$14.99",
      size: "500ml",
      features: ["Superfood Blend", "Detox Support", "Energy Boost", "Vitamin K Rich"],
      color: "from-[hsl(var(--juice-green))] to-emerald-600",
      icon: <Heart className="w-6 h-6" />,
      bestseller: false
    },
    {
      name: "Tropical Paradise",
      description: "Exotic blend of mango, pineapple, and passion fruit",
      price: "$12.49",
      size: "750ml",
      features: ["Tropical Fruits", "Natural Enzymes", "Immune Support", "Refreshing"],
      color: "from-yellow-400 to-orange-500",
      icon: <Star className="w-6 h-6" />,
      bestseller: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--juice-green))] via-[hsl(var(--juice-orange))] to-[hsl(var(--juice-red))] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Premium Juice Collection
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Discover our full range of naturally crafted fruit juices, 
              each one bursting with flavor and packed with nutrients.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {product.bestseller && (
                    <Badge className="absolute top-4 right-4 z-10 bg-[hsl(var(--juice-red))] hover:bg-[hsl(var(--juice-red))]">
                      Bestseller
                    </Badge>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {product.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      <Badge variant="outline" className="text-muted-foreground">
                        {product.size}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{product.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Features:</h4>
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-[hsl(var(--juice-orange))] to-[hsl(var(--juice-yellow))] hover:opacity-90 transition-opacity"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for bulk orders, custom blends, or to learn more about our products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[hsl(var(--juice-orange))] to-[hsl(var(--juice-yellow))] hover:opacity-90 transition-opacity"
              >
                Contact Sales
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;