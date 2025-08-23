import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Leaf, Heart, Star } from "lucide-react";
export const ProductShowcase = () => {
  const products = [{
    name: "Apple Juice with Honey",
    description: "92% pure apple juice enriched with natural honey for perfect sweetness",
    features: ["No Artificial Colors", "No Preservatives", "Rich in Vitamins"],
    icon: <Heart className="w-5 h-5" />
  }, {
    name: "100% Tangerine Orange",
    description: "Fresh tangerine juice packed with Vitamin C and natural goodness",
    features: ["100% Natural", "High Vitamin C", "Cold Pressed"],
    icon: <Star className="w-5 h-5" />
  }, {
    name: "Cold Pressed Watermelon",
    description: "Refreshing watermelon juice with no added sugars or artificial flavors",
    features: ["Cold Pressed", "No Added Sugar", "Hydrating"],
    icon: <Droplets className="w-5 h-5" />
  }];
  const benefits = [{
    icon: <Leaf className="w-8 h-8 text-[hsl(var(--juice-green))]" />,
    title: "100% Natural",
    description: "No artificial additives or preservatives"
  }, {
    icon: <Droplets className="w-8 h-8 text-[hsl(var(--juice-orange))]" />,
    title: "Cold Pressed",
    description: "Retains maximum nutrients and flavor"
  }, {
    icon: <Heart className="w-8 h-8 text-[hsl(var(--juice-red))]" />,
    title: "Health First",
    description: "Rich in vitamins and antioxidants"
  }];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of carefully crafted fruit juices, made with the finest ingredients
            and traditional cold-pressing methods.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-3 rounded-full bg-primary text-primary-foreground">
                    {product.icon}
                  </div>
                  <Badge variant="secondary" className="bg-[hsl(var(--juice-green))] text-white">
                    Premium
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </div>)}
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-2xl p-8 md:p-12 mx-0 my-0">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-card-foreground">
            Why Choose Juicings?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-card-foreground">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};