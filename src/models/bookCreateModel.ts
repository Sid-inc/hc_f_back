import { Cover } from './bookViewModel';

/**
 * Модель создания книги.
 */
export interface BookCreateModel {
  category: string;
  title: string;
  author: string;
  price: number;
  urlToImages: string[];
  rating: number;
  isBestSeller: boolean;
  cover: Cover;
  description: string;
  amount: number;
}