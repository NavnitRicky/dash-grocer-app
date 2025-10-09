import { categories } from '@/data/products';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';

const CategorySlider = () => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Shop by Category</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="flex-shrink-0 snap-start"
            >
              <Card className="w-24 h-24 flex flex-col items-center justify-center gap-2 hover:shadow-md transition-all cursor-pointer bg-gradient-card border-border">
                <span className="text-3xl">{category.icon}</span>
                <p className="text-xs font-medium text-center text-foreground">
                  {category.name}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
