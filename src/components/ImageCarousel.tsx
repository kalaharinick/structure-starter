import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import brandImage1 from "@/assets/jucing_sessions_brand.jpg";
import brandImage2 from "@/assets/jucing_sessions_brand1.jpg";
import brandImage3 from "@/assets/jucing_sessions_brand3.jpg";
import brandImage4 from "@/assets/jucing_sessions_brand4.jpg";
import brandImage5 from "@/assets/jucing_sessions_brand5.jpg";
import brandImage6 from "@/assets/jucing_sessions_brand6.jpg";
import factoryImage1 from "@/assets/jucing_sessions_factory.jpg";
import factoryImage2 from "@/assets/jucing_sessions_factory2.jpg";
import productApple from "@/assets/jucing_sessions_product_apple.jpg";
import productOrange from "@/assets/jucing_sessions_product_orange.jpg";

export const ImageCarousel = () => {
  const carouselImages = [
    {
      src: brandImage1,
      alt: "Juicing Sessions Brand - Premium Quality",
      caption: "Premium Quality Juices"
    },
    {
      src: factoryImage1,
      alt: "Our Modern Production Facility",
      caption: "State-of-the-Art Production"
    },
    {
      src: productApple,
      alt: "Fresh Apple Juice Product",
      caption: "100% Natural Apple Juice"
    },
    {
      src: brandImage2,
      alt: "Juicing Sessions Brand Experience",
      caption: "Authentic Taste Experience"
    },
    {
      src: productOrange,
      alt: "Fresh Orange Juice Product", 
      caption: "Vitamin-Rich Orange Juice"
    },
    {
      src: factoryImage2,
      alt: "Clean Production Environment",
      caption: "Hygienic Production Standards"
    },
    {
      src: brandImage3,
      alt: "Quality Assurance Process",
      caption: "Rigorous Quality Control"
    },
    {
      src: brandImage4,
      alt: "Fresh Ingredients Selection",
      caption: "Hand-Selected Fresh Fruits"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--juice-green))] via-[hsl(var(--juice-orange))] to-[hsl(var(--juice-red))] bg-clip-text text-transparent">
            Behind the Scenes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our commitment to quality, from farm to bottle
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-semibold text-sm">
                            {image.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};