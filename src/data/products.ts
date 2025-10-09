import tomatoesImg from '@/assets/products/tomatoes.jpg';
import onionsImg from '@/assets/products/onions.jpg';
import capsicumImg from '@/assets/products/capsicum.jpg';
import applesImg from '@/assets/products/apples.jpg';
import bananasImg from '@/assets/products/bananas.jpg';
import grapesImg from '@/assets/products/grapes.jpg';
import milkImg from '@/assets/products/milk.jpg';
import yogurtImg from '@/assets/products/yogurt.jpg';
import cheeseImg from '@/assets/products/cheese.jpg';
import chipsImg from '@/assets/products/chips.jpg';
import cookiesImg from '@/assets/products/cookies.jpg';
import nutsImg from '@/assets/products/nuts.jpg';
import orangeJuiceImg from '@/assets/products/orange-juice.jpg';
import greenTeaImg from '@/assets/products/green-tea.jpg';
import energyDrinkImg from '@/assets/products/energy-drink.jpg';
import breadImg from '@/assets/products/bread.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  description: string;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  image: string;
}

export const categories: Category[] = [
  { 
    id: 'vegetables', 
    name: 'Fruits & Vegetables', 
    icon: '🥬',
    gradient: 'linear-gradient(135deg, #0C831F 0%, #4CAF50 100%)',
    image: capsicumImg
  },
  { 
    id: 'dairy', 
    name: 'Dairy, Bread & Eggs', 
    icon: '🥛',
    gradient: 'linear-gradient(135deg, #F8E231 0%, #FDD835 100%)',
    image: milkImg
  },
  { 
    id: 'snacks', 
    name: 'Snacks & Munchies', 
    icon: '🍿',
    gradient: 'linear-gradient(135deg, #D32F2F 0%, #F44336 100%)',
    image: chipsImg
  },
  { 
    id: 'beverages', 
    name: 'Cold Drinks & Juices', 
    icon: '🥤',
    gradient: 'linear-gradient(135deg, #1976D2 0%, #2196F3 100%)',
    image: energyDrinkImg
  },
  { 
    id: 'bakery', 
    name: 'Bakery & Biscuits', 
    icon: '🍞',
    gradient: 'linear-gradient(135deg, #E65100 0%, #FF9800 100%)',
    image: cookiesImg
  },
  { 
    id: 'fruits', 
    name: 'Fresh Fruits', 
    icon: '🍎',
    gradient: 'linear-gradient(135deg, #C2185B 0%, #E91E63 100%)',
    image: applesImg
  },
  { 
    id: 'personal-care', 
    name: 'Personal Care', 
    icon: '🧴',
    gradient: 'linear-gradient(135deg, #7B1FA2 0%, #9C27B0 100%)',
    image: milkImg
  },
  { 
    id: 'home-care', 
    name: 'Home Care', 
    icon: '🧹',
    gradient: 'linear-gradient(135deg, #0097A7 0%, #00BCD4 100%)',
    image: milkImg
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    price: 40,
    image: tomatoesImg,
    category: 'vegetables',
    unit: '500g',
    description: 'Fresh and ripe tomatoes, perfect for salads and cooking. Farm-fresh quality guaranteed.',
  },
  {
    id: '2',
    name: 'Red Onions',
    price: 35,
    image: onionsImg,
    category: 'vegetables',
    unit: '1kg',
    description: 'Premium quality red onions, essential for every kitchen. Rich flavor and freshness.',
  },
  {
    id: '3',
    name: 'Green Capsicum',
    price: 45,
    image: capsicumImg,
    category: 'vegetables',
    unit: '500g',
    description: 'Fresh green capsicum for your daily needs. Perfect for stir-fries and salads.',
  },
  {
    id: '4',
    name: 'Royal Gala Apples',
    price: 120,
    image: applesImg,
    category: 'fruits',
    unit: '1kg',
    description: 'Sweet and crunchy Royal Gala apples. Perfect for snacking and packed with nutrients.',
    discount: 10,
  },
  {
    id: '5',
    name: 'Fresh Bananas',
    price: 50,
    image: bananasImg,
    category: 'fruits',
    unit: '6 pcs',
    description: 'Ripe and fresh bananas, naturally sweet. Great source of energy and potassium.',
  },
  {
    id: '6',
    name: 'Seedless Grapes',
    price: 80,
    image: grapesImg,
    category: 'fruits',
    unit: '500g',
    description: 'Sweet seedless green grapes. Perfect for kids and healthy snacking.',
  },
  {
    id: '7',
    name: 'Fresh Milk',
    price: 60,
    image: milkImg,
    category: 'dairy',
    unit: '1L',
    description: 'Pure and fresh full cream milk. Rich in calcium and protein for strong bones.',
  },
  {
    id: '8',
    name: 'Greek Yogurt',
    price: 90,
    image: yogurtImg,
    category: 'dairy',
    unit: '400g',
    description: 'Creamy Greek yogurt with probiotics. Perfect for breakfast or as a healthy snack.',
  },
  {
    id: '9',
    name: 'Cheese Slices',
    price: 120,
    image: cheeseImg,
    category: 'dairy',
    unit: '200g',
    description: 'Premium cheese slices perfect for sandwiches and burgers. Melts beautifully.',
  },
  {
    id: '10',
    name: 'Potato Chips',
    price: 30,
    image: chipsImg,
    category: 'snacks',
    unit: '100g',
    description: 'Crispy and tasty potato chips. Perfect for parties and movie nights.',
    discount: 5,
  },
  {
    id: '11',
    name: 'Chocolate Cookies',
    price: 50,
    image: cookiesImg,
    category: 'snacks',
    unit: '200g',
    description: 'Delicious chocolate chip cookies. Crispy on the outside, soft inside.',
  },
  {
    id: '12',
    name: 'Mixed Nuts',
    price: 180,
    image: nutsImg,
    category: 'snacks',
    unit: '250g',
    description: 'Healthy mixed nuts including almonds, cashews, and walnuts. Great source of protein.',
  },
  {
    id: '13',
    name: 'Orange Juice',
    price: 90,
    image: orangeJuiceImg,
    category: 'beverages',
    unit: '1L',
    description: '100% pure orange juice with no added sugar. Packed with Vitamin C.',
  },
  {
    id: '14',
    name: 'Green Tea',
    price: 120,
    image: greenTeaImg,
    category: 'beverages',
    unit: '100 bags',
    description: 'Premium green tea bags. Rich in antioxidants for a healthy lifestyle.',
  },
  {
    id: '15',
    name: 'Energy Drink',
    price: 40,
    image: energyDrinkImg,
    category: 'beverages',
    unit: '250ml',
    description: 'Refreshing energy drink to boost your day. Perfect for workouts and study sessions.',
  },
  {
    id: '16',
    name: 'White Bread',
    price: 35,
    image: breadImg,
    category: 'bakery',
    unit: '400g',
    description: 'Fresh white bread loaf. Soft and perfect for sandwiches and toast.',
  },
];
