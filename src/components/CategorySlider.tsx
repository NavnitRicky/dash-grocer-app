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
              className="flex-shrink-0 snap-start group"
            >
              <Card className="w-28 h-28 flex flex-col items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer bg-card border border-border/50 hover:-translate-y-1 rounded-2xl">
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                <p className="text-xs font-semibold text-center text-foreground px-2">
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
