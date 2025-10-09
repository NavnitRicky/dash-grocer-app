import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart, cart, updateQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const cartItem = cart.find((item) => item.id === id);
  const relatedProducts = product 
    ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 6)
    : [];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4 text-foreground">Product not found</h1>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary-hover">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        unit: product.unit,
      });
    }
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      <div className="container mx-auto px-4 py-6">
        <Link to="/">
          <Button variant="ghost" className="mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Product Image */}
          <div className="relative bg-muted rounded-lg overflow-hidden aspect-square">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-base px-3 py-1">
                {product.discount}% OFF
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2 text-foreground">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{product.unit}</p>
            
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-foreground">₹{product.price}</span>
              {product.discount && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{Math.round(product.price / (1 - product.discount / 100))}
                  </span>
                  <Badge className="bg-secondary text-secondary-foreground">
                    Save ₹{Math.round(product.price / (1 - product.discount / 100)) - product.price}
                  </Badge>
                </>
              )}
            </div>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-semibold text-foreground">Quantity:</span>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity === 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold text-lg text-foreground">
                  {quantity}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              size="lg"
              className="w-full md:w-auto bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </Button>

            {cartItem && (
              <p className="text-sm text-muted-foreground mt-4">
                Already in cart: {cartItem.quantity} item(s)
              </p>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
