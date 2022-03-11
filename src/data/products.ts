import { PRODUCTS_PER_PAGE } from '../utils/constants';
import firstManImage from '../images/men-01.jpg';
import secondManImage from '../images/men-02.jpg';
import thirdManImage from '../images/men-03.jpg';
import firstWomanImage from '../images/women-01.jpg';
import secondWomanImage from '../images/women-02.jpg';
import thirdWomanImage from '../images/women-03.jpg';
import firstKidImage from '../images/kid-01.jpg';
import secondKidImage from '../images/kid-02.jpg';
import thirdKidImage from '../images/kid-03.jpg';

export interface ProductsProps {
  id: number;
  title: string;
  img: string;
  price: number;
  category: string;
}

export const products: ProductsProps[] = [
  {
    id: 1,
    title: 'Skylight Spring Shirt',
    img: firstManImage,
    price: 80,
    category: 'man'
  },
  {
    id: 2,
    title: 'Juniper Winter Jacket',
    img: firstWomanImage,
    price: 140,
    category: 'woman'
  },
  {
    id: 3,
    title: 'ProStar Autumn Jacket',
    img: secondWomanImage,
    price: 40,
    category: 'woman'
  },
  {
    id: 4,
    title: 'Agenda Summer Sweatshirt',
    img: secondManImage,
    price: 60,
    category: 'man'
  },
  {
    id: 5,
    title: 'Safari Jogging Pants',
    img: firstKidImage,
    price: 120,
    category: 'kid'
  },
  {
    id: 6,
    title: 'Vintage Nitted Sweater',
    img: thirdWomanImage,
    price: 90,
    category: 'woman'
  },
  {
    id: 7,
    title: 'Juniper Summer Shorts',
    img: secondKidImage,
    price: 100,
    category: 'kid'
  },
  {
    id: 8,
    title: 'ProStar Stripe Shirt',
    img: thirdManImage,
    price: 50,
    category: 'man'
  },
  {
    id: 9,
    title: 'Skylight Summer Pants',
    img: thirdKidImage,
    price: 80,
    category: 'kid'
  },
  {
    id: 10,
    title: 'ProStar Red Shirt',
    img: firstManImage,
    price: 140,
    category: 'man'
  },
  {
    id: 11,
    title: 'Skylight Spring Jacket',
    img: firstWomanImage,
    price: 80,
    category: 'woman'
  },
  {
    id: 12,
    title: 'Agenda Summer Jacket',
    img: secondWomanImage,
    price: 60,
    category: 'woman'
  },
  {
    id: 13,
    title: 'Juniper Autumn Sweatshirt',
    img: secondManImage,
    price: 40,
    category: 'man'
  },
  {
    id: 14,
    title: 'Vintage Blue Pants',
    img: firstKidImage,
    price: 50,
    category: 'kid'
  },
  {
    id: 15,
    title: 'Safari Winter Sweater',
    img: thirdWomanImage,
    price: 120,
    category: 'woman'
  },
  {
    id: 16,
    title: 'ProStar Summer Shorts',
    img: secondKidImage,
    price: 90,
    category: 'kid'
  },
  {
    id: 17,
    title: 'Skylight Long Shirt',
    img: thirdManImage,
    price: 100,
    category: 'man'
  },
  {
    id: 18,
    title: 'Juniper Winter Pants',
    img: thirdKidImage,
    price: 40,
    category: 'kid'
  }
];

export const totalPage = Math.ceil(
  products.length / PRODUCTS_PER_PAGE
);
