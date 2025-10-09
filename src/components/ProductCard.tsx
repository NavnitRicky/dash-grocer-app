import { Plus } from 'lucide-react';
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
      <Card className="group overflow-hidden hover:shadow-product transition-all duration-300 cursor-pointer bg-card border-border h-full flex flex-col">
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
              {product.discount}% OFF
            </Badge>
          )}
        </div>
        
        <div className="p-4 flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{product.unit}</p>
            
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold text-foreground">
                ₹{product.price}
              </span>
              {product.discount && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{Math.round(product.price / (1 - product.discount / 100))}
                </span>
              )}
            </div>
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full mt-3 bg-primary hover:bg-primary-hover text-primary-foreground gap-2"
            size="sm"
          >
            <Plus className="h-4 w-4" />
            {cartItem ? `In Cart (${cartItem.quantity})` : 'Add to Cart'}
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
