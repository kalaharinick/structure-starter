import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Factory, Leaf, Shield, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-[hsl(var(--juice-green))]" />,
      title: "100% Natural",
      description: "We use only the finest natural ingredients with no artificial additives or preservatives."
    },
    {
      icon: <Shield className="w-8 h-8 text-[hsl(var(--juice-orange))]" />,
      title: "Quality Assured",
      description: "Every batch is tested for quality and safety to ensure the highest standards."
    },
    {
      icon: <Heart className="w-8 h-8 text-[hsl(var(--juice-red))]" />,
      title: "Health First",
      description: "Our juices are crafted to provide maximum nutritional benefits for your wellbeing."
    }
  ];

  const certifications = [
    "ISO 22000:2018 Food Safety Management",
    "HACCP Certified",
    "FDA Approved Facility",
    "Organic Certification",
    "Good Manufacturing Practices (GMP)",
    "Halal Certified"
  ];

  const timeline = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started as a small family business with a passion for natural fruit juices."
    },
    {
      year: "2015",
      title: "Factory Expansion",
      description: "Built our modern production facility with state-of-the-art equipment."
    },
    {
      year: "2018",
      title: "Organic Certification",
      description: "Achieved organic certification and expanded our natural product line."
    },
    {
      year: "2020",
      title: "Cold Press Technology",
      description: "Invested in advanced cold-press technology to preserve nutrients."
    },
    {
      year: "2024",
      title: "Market Leader",
      description: "Recognized as a leading premium juice manufacturer in the region."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[hsl(var(--juice-green))] via-[hsl(var(--juice-orange))] to-[hsl(var(--juice-red))] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Juicings
              </h1>
              <p className="text-xl opacity-90">
                For over a decade, we have been dedicated to bringing you the freshest, 
                most nutritious fruit juices made with love and the finest natural ingredients.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Juicings was born from a simple belief: that everyone deserves access to 
                  pure, natural fruit juices that taste as good as they are good for you. 
                  What started as a small family operation has grown into a trusted brand 
                  known for quality, authenticity, and nutrition.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We work directly with local farmers to source the finest fruits, 
                  ensuring that every bottle contains the peak flavors and nutrients 
                  that nature intended. Our cold-press process preserves these essential 
                  vitamins and minerals while delivering the pure, fresh taste you crave.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">14+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50k+</div>
                    <div className="text-sm text-muted-foreground">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Product Lines</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[hsl(var(--juice-green))] to-[hsl(var(--juice-orange))] rounded-2xl p-8 text-white">
                <Factory className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Our Manufacturing</h3>
                <p className="mb-6">
                  Our state-of-the-art facility uses the latest technology to ensure 
                  every bottle meets the highest standards of quality and safety.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    ISO 22000 Certified
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Expert Quality Team
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    HACCP Standards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Juicings
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our growth and development
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start mb-8 last:mb-0">
                  <div className="flex-shrink-0 w-24 text-right mr-8">
                    <Badge variant="outline" className="text-primary border-primary">
                      {item.year}
                    </Badge>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Standards</h2>
              <p className="text-xl text-muted-foreground">
                Our commitment to quality is validated by industry-leading certifications
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <Award className="w-8 h-8 text-[hsl(var(--juice-orange))] mx-auto mb-3" />
                    <p className="font-semibold">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;