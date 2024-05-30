import { BookViewModel, Cover } from '../models/bookViewModel';

export const books: BookViewModel[] = [
  {
    id: '22d42afb-4d41-4375-8da8-2face02f6807',
    category: 'classic',
    title: 'Greatest Works of Oscar Wilde (DELUXE HARDBOUND EDITION)',
    author: 'Oscar Wilde',
    price: 42.43,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81Ko4PmfouS.jpg',
      'https://m.media-amazon.com/images/I/81pTUrv0QnL.jpg',
      'https://m.media-amazon.com/images/I/911vRWx1WPL.jpg'
    ],
    rating: 4.6,
    isBestSeller: true,
    cover: Cover.HARDCOVER,
    description: 'From criticism, essays, reviews, to novels, poetry, short stories, plays, and even children’s fiction, The witty and versatile Oscar Wilde wrote a lot. Amongst all these are two of his masterstrokes, works that earned him laurels and established his fame as a writer. This beautiful leather-bound edition, with gilded edges and beautiful endpapers, holds these critically acclaimed pieces—the importance of Being earnest, a play that has been revived many times and adapted for radio, television, film, operas, musicals, and the picture of Dorian Gray, Wilde’s only novel that became his most-read and well-known work.',
    amount: 15
  },
  {
    id: '9089152c-506c-4a54-a6e5-a2c755c73902',
    category: 'classic',
    title: 'The Complete Novels of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    price: 54.55,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81StezluKUS.jpg',
      'https://m.media-amazon.com/images/I/914eICOJ5NL.jpg',
      'https://m.media-amazon.com/images/I/814RZZuiU6L.jpg'
    ],
    rating: 4.5,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: 'Theres the scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.?Sherlock Holmes Consulting Detective 221B Baker Street London.This is where begins a historical partnership between Dr. Watson?the archetypal gentleman from the Victorian era?and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions. This book is a collection of the four novels written by Sir Arthur Conan Doyle: A Study in Scarlet (1887), The Sign of the Four (1890), The Hound of the Baskervilles (1902) and The Valley of Fear (1915). Featuring the timeless detective Sherlock Holmes, these novels have been successfully engrossing readers for more than a century now.',
    amount: 19
  },
  {
    id: '7f57d33c-c274-4337-93c9-4dbcf53f0ce3',
    category: 'classic',
    title: '1984',
    author: 'George Orwell',
    price: 249.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81vHA1+GmhS.jpg',
      'https://m.media-amazon.com/images/I/81nLM3CiOHL.jpg',
      'https://m.media-amazon.com/images/I/91THPuJTLyL.jpg'
    ],
    rating: 5,
    isBestSeller: true,
    cover: Cover.HARDCOVER,
    description: 'First published in the summer of 1949, George Orwells 1984 is one of the most definitive texts of modern literature. This delectable leather-bound edition, beautifully crafted and elegantly designed, comes with a ribbon bookmark, gilded edges, and beautiful endpapers. Set in Oceania, one of the three inter-continental superstate that divied the world among themselves after a global war, Orwells masterful critique of the political structures of the time works itself out through the story of Winston Smith, a man caught in the webs of a dystopian future, and his clandestine love affair with Julia, a young woman he meets during the course of his work for the government. As much as it is an entertaining read, 1984 is also a brilliant, and more importantly, a timeless satirical attack on the social and political structures of the world.',
    amount: 22
  },
  {
    id: 'ad418ac6-8f85-4946-a020-12690f0ca1cd',
    category: 'adventure',
    title: 'Robinson Crusoe',
    author: 'Daniel Defoe',
    price: 36.25,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81cp-sm9FzS.jpg',
      'https://m.media-amazon.com/images/I/81qcRZzW-xS.jpg',
      'https://m.media-amazon.com/images/I/81FX-yUxY8S.jpg'
    ],
    rating: 4.4,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: 'September 1, 1651. With a passion and longing for the sea, Robinson Crusoe sets on a sea voyage, much against the wishes of his family, only to survive a shipwreck. But he doesnt give up. And after a series of adventurous journeys, eight years later on the same day of September, Crusoe sets sail again. Caught in a sea storm, he is washed ashore on a deserted island after the shipwreck. The sole human survivor, along with a dog and two cats, Crusoe builds his life with whatever is available around and begins to contemplate and consider his situation. Evil: I am cast upon a horrible, desolate island, voidof all hope of rcovery.Good: But I am alive; and not drowned, as all my ships company were. Will his adventures end here, or is there more in store for him Establishing realistic fiction as a literary genre, Daniel Defos Robinson Crusoe is regarded as the first English novel. With simple characters and an exceptional interpretation of life, it went on to become a literary masterpiece. The novel has undergone various adaptions and continues to remain an epic.',
    amount: 18
  },
  {
    id: '7ad1952e-f7a0-4139-84c0-7a26b0787378',
    category: 'children',
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
    price: 48.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81KTDij0XyS.jpg',
      'https://m.media-amazon.com/images/I/810c9q8YfmS.jpg',
      'https://m.media-amazon.com/images/I/81PWcHXCcHS.jpg'
    ],
    rating: 4.73,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Satirical and nostalgic, Mark Twain’s epic masterpiece, the Adventures of Tom Sawyer, brings out the inequities of adult reality from beneath the innocence of childhood. In the fictional town of St. Petersburg, Missouri, along the Mississippi River, Tom Sawyer lives with his Aunt Polly and half-brother Sid. As the novel begins, we catch him stealing from the jam jar and narrowly escaping being hit. But his life is full of adventurous episodes. What happens as he moves from one escapade to another—accompanying Huckleberry Finn to the graveyard at night where they witness a trio of grave robbers; falling in love with Becky Thatcher and being shunned; enjoying the new found freedom and then being struck by the idea of appearing at his own funeral; hunting for buried treasure in a haunted house with Huck and so on..?The Adventures of Tom Sawyer has been widely adapted into feature films and television series. it is followed by Adventures of Huckleberry Finn.',
    amount: 3
  },
  {
    id: '2deac926-ffff-43c2-83ee-cc5b91d9766f',
    category: 'children',
    title: 'The Adventures of Huckleberry Finn',
    author: 'Mark Twain',
    price: 51.17,
    urlToImages: [
      'https://m.media-amazon.com/images/I/811euwWZ+dS.jpg',
      'https://m.media-amazon.com/images/I/81wXusqXhaS.jpg',
      'https://m.media-amazon.com/images/I/81bAG-NiWwS.jpg'
    ],
    rating: 4.68,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Huck is back.. Taken for a son by Widow Douglas; struggling against the society and its attempts to ‘civilize’ him.Escaping his alcoholic father by faking his death, we join him as he voyages down the Mississippi River seeking liberation. Finding his way to Jackson’s island he meets Jim, Mrs. Watson’s runaway slave. What happens as they team up, capture a raft and encounter a seemingly haphazard array of people and situations? Immersed in deadly violence, finding tranquility only on the river with Jim, will Huckleberry Finn find the freedom and independence he is seeking? A direct sequel to the Adventures of Tom Sawyer, it traces Huck’s moral development as he moves from having an unthinking acceptance of received knowledge and values to developing an independently achieved understanding of what is right.A scathing satire on entrenched attitudes, Twain’s the Adventures of Huckleberry Finn defines the American Dream of young heroes. Sometimes ironic, sometimes mocking, sometimes boyish and exuberant, it is named among the Great American Novels.',
    amount: 28
  }
];
