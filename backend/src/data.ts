import bcrypt from 'bcryptjs'
import { Product } from './models/productModel';
import { User } from "./models/userModel";


export const sampleProducts: Product[] = [
  {
    name: 'Groundnut oil',
    slug: 'groundnut-oil',
    category: 'Oils',
    image: '../images/one.jpg',
    price: 2120,
    countInStock: 10,
    brand: 'Mama Gold',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality oil',
  },
  {
    name: 'Semovita',
    slug: 'semovita',
    category: 'Flours',
    image: '../images/onetwo.jpg',
    price: 1500,
    countInStock: 20,
    brand: 'Golden Penny',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality flour',
  },
  {
    name: 'Ayoola Rice Floor',
    slug: 'Ayoola-Rice-Floor',
    category: 'Flours',
    image: '../images/onefour.jpg',
    price: 700,
    countInStock: 0,
    brand: 'Ayoola',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality flour',
  },
  {
    name: 'Pure vegetable oil',
    slug: 'Pure-vegetable-oil',
    category: 'Oils',
    image: '../images/oneten.jpg',
    price: 780,
    countInStock: 15,
    brand: 'Devon Kings',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality oil',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]