import { categories } from '@/data/products';
import { Link } from 'react-router-dom';

const CategorySlider = () => {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div 
                className="relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer aspect-[3/4] flex flex-col"
                style={{ background: category.gradient }}
              >
                <div className="flex-1 flex items-center justify-center p-4">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-3 text-center">
                  <h3 className="font-bold text-sm text-foreground leading-tight">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
