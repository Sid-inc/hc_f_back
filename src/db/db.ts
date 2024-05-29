import { BookViewModel, Cover } from '../models/bookViewModel';

export const books = [{
  category: 'classic',
  id: '1',
  title: 'Greatest Works of Oscar Wilde (DELUXE HARDBOUND EDITION)',
  author: 'Oscar Wilde',
  price: 42.43,
  urlToImages: [
    'https://m.media-amazon.com/images/I/81Ko4PmfouS.jpg',
    'https://m.media-amazon.com/images/I/81pTUrv0QnL.jpg',
    'https://m.media-amazon.com/images/I/911vRWx1WPL.jpg',
  ],
  rating: 4.6,
  isBestSeller: true,
  cover: Cover.HARDCOVER,
  description: 'From criticism, essays, reviews, to novels, poetry, short stories, plays, and even children’s fiction, The witty and versatile Oscar Wilde wrote a lot. Amongst all these are two of his masterstrokes, works that earned him laurels and established his fame as a writer. This beautiful leather-bound edition, with gilded edges and beautiful endpapers, holds these critically acclaimed pieces—the importance of Being earnest, a play that has been revived many times and adapted for radio, television, film, operas, musicals, and the picture of Dorian Gray, Wilde’s only novel that became his most-read and well-known work.',
  amount: 15,
} as BookViewModel,];
