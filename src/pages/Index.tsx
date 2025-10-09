import { useState } from 'react';
import Navbar from '@/components/Navbar';
import CategorySlider from '@/components/CategorySlider';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Clock, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-grocery.jpg';

const Index = () => {
  const [displayCount, setDisplayCount] = useState(12);
  const featuredProducts = products.slice(0, displayCount);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      {/* Hero Section */}
      <section 
        className="relative bg-primary text-primary-foreground py-12 md:py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(142 71% 45%) 0%, hsl(142 71% 45%) 40%, transparent 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-fade-in drop-shadow-lg leading-tight">
              Groceries delivered in{' '}
              <span className="text-accent">10 minutes</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-95 animate-fade-in drop-shadow-md max-w-md">
              Get your daily essentials delivered super fast to your doorstep
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-scale-in">
              <Button 
                size="lg" 
                className="bg-white hover:bg-white/90 text-primary font-semibold shadow-lg text-base md:text-lg px-6 md:px-8"
              >
                Shop Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold text-base md:text-lg px-6 md:px-8"
              >
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-secondary/10 p-3 rounded-full">
                <Truck className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Free Delivery</h3>
                <p className="text-sm text-muted-foreground">On orders above ₹199</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">Within 10-15 minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-accent/10 p-3 rounded-full">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">100% Safe</h3>
                <p className="text-sm text-muted-foreground">Quality guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <CategorySlider />

      {/* Products */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Featured Products</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {displayCount < products.length && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setDisplayCount(displayCount + 12)}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
