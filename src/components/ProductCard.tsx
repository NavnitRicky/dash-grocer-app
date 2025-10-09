import { Plus, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
    });
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-card border border-border/50 h-full flex flex-col hover:-translate-y-1 rounded-xl">
        <div className="relative aspect-square bg-gradient-to-br from-muted/30 to-muted/60 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground font-bold text-xs px-2 py-1 shadow-md">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
        
        <div className="p-3 flex flex-col flex-1 gap-2">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span className="text-xs font-medium">13 MINS</span>
          </div>

          <div className="flex-1">
            <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-1 leading-tight">
              {product.name}
            </h3>
            <p className="text-xs text-muted-foreground">{product.unit}</p>
          </div>
          
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-foreground">
                ₹{product.price}
              </span>
              {product.discount && (
                <span className="text-xs text-muted-foreground line-through">
                  ₹{Math.round(product.price / (1 - product.discount / 100))}
                </span>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-xs h-8 px-4 transition-all duration-200 hover:shadow-md"
            >
              {cartItem ? `${cartItem.quantity}` : 'ADD'}
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
