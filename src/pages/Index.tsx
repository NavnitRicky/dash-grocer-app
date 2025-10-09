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
        className="relative bg-gradient-hero text-primary-foreground py-16 md:py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(139, 0, 139, 0.85) 0%, rgba(139, 0, 139, 0.7) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in drop-shadow-lg">
              Fresh Groceries Delivered in Minutes
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-95 animate-fade-in drop-shadow-md">
              Order from a wide range of fresh vegetables, fruits, dairy products, and daily essentials
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 animate-scale-in shadow-lg"
            >
              Start Shopping <ArrowRight className="h-5 w-5" />
            </Button>
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
