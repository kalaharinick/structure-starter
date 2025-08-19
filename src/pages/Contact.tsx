import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Package } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[hsl(var(--juice-green))]" />,
      title: "Our Location",
      details: ["123 Fruit Street", "Fresh City, FC 12345", "United States"]
    },
    {
      icon: <Phone className="w-6 h-6 text-[hsl(var(--juice-orange))]" />,
      title: "Phone Numbers",
      details: ["Sales: +1 (555) 123-4567", "Support: +1 (555) 123-4568", "Fax: +1 (555) 123-4569"]
    },
    {
      icon: <Mail className="w-6 h-6 text-[hsl(var(--juice-red))]" />,
      title: "Email Addresses",
      details: ["info@juicings.com", "sales@juicings.com", "support@juicings.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-[hsl(var(--accent))]" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const inquiryTypes = [
    {
      icon: <Package className="w-8 h-8 text-[hsl(var(--juice-orange))]" />,
      title: "Product Orders",
      description: "Bulk orders, wholesale pricing, and product availability"
    },
    {
      icon: <Users className="w-8 h-8 text-[hsl(var(--juice-green))]" />,
      title: "Partnership",
      description: "Distribution partnerships and collaboration opportunities"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[hsl(var(--juice-red))]" />,
      title: "General Inquiry",
      description: "Questions about our products, company, or services"
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
              Get In Touch
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We would love to hear from you. Contact us for orders, partnerships, 
              or any questions about our premium fruit juices.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-4">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Inquiry Types */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="px-0 space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-[hsl(var(--juice-orange))] to-[hsl(var(--juice-yellow))] hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Inquiry Types */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">How Can We Help?</h2>
                  <p className="text-muted-foreground mb-8">
                    Choose the type of inquiry that best matches your needs for faster assistance.
                  </p>
                </div>
                
                <div className="space-y-6">
                  {inquiryTypes.map((type, index) => (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-primary">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {type.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                          <p className="text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <Card className="p-6 bg-gradient-to-r from-[hsl(var(--juice-green))] to-[hsl(var(--juice-orange))] text-white">
                  <h3 className="text-lg font-bold mb-2">Quick Response Guarantee</h3>
                  <p className="mb-4">
                    We respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-sm">Average response time: 4 hours</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our products and services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">What is your minimum order quantity?</h3>
                  <p className="text-muted-foreground">
                    Our minimum order quantity is 100 bottles for wholesale orders. 
                    Retail customers can order individual bottles.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Do you offer custom formulations?</h3>
                  <p className="text-muted-foreground">
                    Yes, we can create custom juice blends based on your specifications. 
                    Contact our product development team to discuss your requirements.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">What are your payment terms?</h3>
                  <p className="text-muted-foreground">
                    We offer flexible payment terms including NET 30 for qualified accounts. 
                    Credit card and bank transfer options are also available.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">How long is the shelf life?</h3>
                  <p className="text-muted-foreground">
                    Our juices have a shelf life of 12 months when stored properly. 
                    Best consumed within 3 days after opening and refrigeration.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Do you ship internationally?</h3>
                  <p className="text-muted-foreground">
                    Yes, we ship to many countries worldwide. Shipping costs and 
                    delivery times vary by destination. Contact us for a quote.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Are your products organic?</h3>
                  <p className="text-muted-foreground">
                    Many of our products are certified organic. Look for the organic 
                    certification mark on product labels and packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;