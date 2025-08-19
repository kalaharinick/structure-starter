import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, Badge, Button, Flex, Text, Box } from "@radix-ui/themes";
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
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden" size="3">
                  {product.bestseller && (
                    <Box className="absolute top-4 right-4 z-10">
                      <Badge color="red" variant="solid">
                        Bestseller
                      </Badge>
                    </Box>
                  )}
                  
                  <Flex direction="column" gap="4" className="p-6">
                    <Flex align="center" gap="4">
                      <Box className={`w-16 h-16 rounded-full bg-gradient-to-r ${product.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {product.icon}
                        </div>
                      </Box>
                      <Box className="flex-1">
                        <Text size="5" weight="bold" className="block mb-2">{product.name}</Text>
                        <Flex align="center" justify="between">
                          <Text size="6" weight="bold" color="teal">{product.price}</Text>
                          <Badge variant="outline" color="gray">
                            {product.size}
                          </Badge>
                        </Flex>
                      </Box>
                    </Flex>
                    
                    <Text color="gray" className="text-sm">{product.description}</Text>
                    
                    <Box>
                      <Text size="2" weight="bold" className="block mb-2">Features:</Text>
                      {product.features.map((feature, featureIndex) => (
                        <Flex key={featureIndex} align="center" gap="3" className="mb-1">
                          <Box className="w-2 h-2 bg-teal-500 rounded-full" />
                          <Text size="2">{feature}</Text>
                        </Flex>
                      ))}
                    </Box>
                    
                    <Button 
                      className="w-full"
                      variant="solid"
                      color="teal"
                      size="3"
                    >
                      Add to Cart
                    </Button>
                  </Flex>
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
            <Flex direction="column" gap="4" align="center" className="sm:flex-row">
              <Button 
                size="4" 
                variant="solid"
                color="teal"
              >
                Contact Sales
              </Button>
              <Button variant="outline" size="4" color="gray">
                Download Catalog
              </Button>
            </Flex>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;