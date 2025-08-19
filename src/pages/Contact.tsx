import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, MessageSquare, Users, Package, ExternalLink, Heart, Star } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[hsl(var(--juice-green))]" />,
      title: "Our Location | ที่ตั้งโรงงาน",
      details: [
        "88/54 โรงงาน JuicingS โครงการสำเภาทอง",
        "ต.หน้าไม้, Lat Lum Kaeo, Thailand 12400"
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-[hsl(var(--juice-orange))]" />,
      title: "Phone Number | โทรศัพท์",
      details: ["02 147 3184"]
    },
    {
      icon: <Mail className="w-6 h-6 text-[hsl(var(--juice-red))]" />,
      title: "Email Address | อีเมล",
      details: ["operation@juicings.com"]
    },
    {
      icon: <Clock className="w-6 h-6 text-[hsl(var(--accent))]" />,
      title: "Business Hours | เวลาทำการ",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 4:00 PM", "Sunday: Closed"]
    }
  ];

  const socialMedia = [
    {
      platform: "LINE",
      icon: "💬",
      title: "LINE Official",
      link: "https://lin.ee/z1lI91U",
      description: "ติดต่อเราผ่าน LINE"
    },
    {
      platform: "Facebook",
      icon: "📘",
      title: "Facebook Page",
      link: "https://www.facebook.com/JuicingSession",
      description: "Follow us on Facebook"
    },
    {
      platform: "LINE Shop",
      icon: "🛍️",
      title: "LINE Shop",
      link: "https://shop.line.me/@juicings",
      description: "สั่งซื้อผ่าน LINE Shop"
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
              Contact Us | ติดต่อเรา
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 mb-4">
              "น้ำผลไม้คั้นสด ทุกหยดจากใจ"
            </p>
            <p className="text-lg max-w-3xl mx-auto opacity-80 mb-4">
              "Freshly squeezed juice — every drop made with heart."
            </p>
            <p className="text-base max-w-3xl mx-auto opacity-70">
              ผลิตเเละจัดจำหน่ายน้ำผลไม้สด ปลีก-ส่ง มาตรฐาน GMP<br/>
              We manufacture and distribute fresh, high-quality juice. Available for retail and wholesale. GMP certified.
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

          {/* Social Media & Stats Section */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connect With Us | ติดต่อผ่านโซเชียลมีเดีย
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {socialMedia.map((social, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-all hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{social.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{social.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{social.description}</p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full"
                    >
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        Visit {social.platform} <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Company Description */}
            <Card className="mb-16 p-8 bg-gradient-to-r from-[hsl(var(--juice-green))]/10 to-[hsl(var(--juice-orange))]/10">
              <CardContent className="p-0">
                <div className="text-center mb-8">
                  <Heart className="w-12 h-12 text-[hsl(var(--juice-red))] mx-auto mb-4" />
                  <h2 className="text-2xl font-bold mb-4">About Juicings | เกี่ยวกับเรา</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[hsl(var(--juice-green))]">ภาษาไทย</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Juicings เป็นโรงงานผลิต "ขายปลีก และ ขายส่ง" รวมถึง One Stop Services 
                      ตั้งแต่ผลิต ตรวจเชื้อ ขอ อ.ย ไปจนถึงออกแบบ Packaging โรงงานใส่ใจคุณภาพ
                      จึงเลือกลงทุนกับเทคโนโลยีในการผลิต และฆ่าเชื้อให้ทันสมัย รวมถึงระบบผลิต
                      ที่ไม่สัมผัสมือคน เพื่อความปลอดภัยและความสะอาดกับลูกค้าทุกท่าน
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[hsl(var(--juice-orange))]">English</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Juicings is a "retail and wholesale" manufacturing plant, including One Stop Services 
                      from production, testing, FDA approval, to packaging design. Our factory is committed 
                      to quality and has invested in state-of-the-art production and sterilization technologies, 
                      including a hands-free production system to ensure the safety and cleanliness of all customers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Facebook Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="text-center p-6 bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <Star className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Customer Reviews</h3>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.facebook.com/JuicingSession/reviews" target="_blank" rel="noopener noreferrer">
                      View Reviews
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Followers</h3>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.facebook.com/JuicingSession/followers" target="_blank" rel="noopener noreferrer">
                      See Followers
                    </a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6 bg-orange-50 border-orange-200">
                <CardContent className="pt-6">
                  <Heart className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Likes</h3>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.facebook.com/JuicingSession/friends_likes" target="_blank" rel="noopener noreferrer">
                      View Likes
                    </a>
                  </Button>
                </CardContent>
              </Card>
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