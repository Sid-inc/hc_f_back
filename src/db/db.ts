import { BookViewModel, Cover } from '../models/bookViewModel';

export const books: BookViewModel[] = [
  {
    id: '62531f3f-9719-4983-b850-10c874e063d9',
    category: 'children',
    title: 'The Merry Adventures Of Robin Hood',
    author: 'Howard Pyle',
    price: 69.65,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81p7i7vJiGS.jpg',
      'https://m.media-amazon.com/images/I/916vgKv6mES.jpg',
      'https://m.media-amazon.com/images/I/81M9LWEuX0S.jpg'
    ],
    rating: 4.3,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: 'In the medieval England, hiding amidst the dense foliage of the Sherwood forest, there lives a legendary Archer with his Merry band of men. For the sheriff of Nottingham, he is an outlaw who must be seized, come what may. But for the country people, he is a hero. This is the story of Robin hood—a wanted man who steals from the rich and gives to the poor. And at every turn of the page, awaits a new adventure. Will Robin Hood manage to remain hidden in plain sight? Or will the sheriff finally have his head? Complete with Howard pyle’s beautiful illustrations, this book was the first novelization of the tales and myths of Robin Hood. It has played a major part in informing the popular imagination of this character, and remains a beloved children’s classic.',
    amount: 1
  },
  {
    id: '60a41508-d8e4-4655-8995-c2b47fa53d20',
    category: 'children',
    title: 'Just So Stories',
    author: 'Rudyard Kipling',
    price: 64.25,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81xh95E0spL.jpg',
      'https://m.media-amazon.com/images/I/716f2PqpnfL.jpg',
      'https://m.media-amazon.com/images/I/81cNDVLex+L.jpg'
    ],
    rating: 4.4,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Rudyard Kipling told his children gloriously fanciful tales of how things in the world came to be as they are. These magical and timeless tales have been retold for over a century, and his imagination and writing continue to enthral and entertain children and families the world over.',
    amount: 8
  },
  {
    id: '54266425-169d-4b80-b190-6249d92fb52a',
    category: 'children',
    title: 'Gullivers Travels',
    author: 'Jonathan Swift',
    price: 199.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81OGJ-a3xCS.jpg',
      'https://m.media-amazon.com/images/I/814vO0KuDlS.jpg',
      'https://m.media-amazon.com/images/I/81jAOE4CvIS.jpg'
    ],
    rating: 4.4,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: "Every Man Desires to Live Long, But No Man Wishes to Be Old.?Shipwrecked on his first voyage, he wakes up in Lilliput'a kingdom of tiny people who are one-twelfth the height of human beings.. Blown off course by the gales on his second, he is sold to the queen by a giant farmer in Brobdingnag.. Attacked by pirates on his third, marooned near a desolate island, he discovers Laputa?the flying island with educated but impractical people..And as a captain of a merchantman on his fourth voyage, abandoned on a landing boat by his crew, he meets Houyhnhnms?a race of talking horses who are the rulers and Yahoos?the deformed creatures who are human beings in their base form. Meet Lemuel Gulliver, as he describes his adventurous voyages across the islands he lands upon.A universally-read satirical fantasy, Jonathan Swift's Gulliver's Travels continues to remain a classic of English literature even more than two and a half centuries after it was first published.",
    amount: 49
  },
  {
    id: '00b03419-cef0-427e-ac42-6835f84da3ff',
    category: 'fiction',
    title: '1984',
    author: 'George Orwell',
    price: 99.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81fcLJo+FNL.jpg',
      'https://m.media-amazon.com/images/I/81Jqipul+aL.jpg',
      'https://m.media-amazon.com/images/I/81CKcgmg9ZL.jpg'
    ],
    rating: 5,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: "Published in the summer of 1949, George Orwell's nineteen Eighty-Four is one of the most definitive texts of modern literature. Set in Oceania, one of the three inter-continental superstate that divided the world among themselves after a global war, Orwell?s masterful critique of the political structures of the time, works itself out through the story of Winston Smith, a man caught in the webs of a dystopian future, and his clandestine love affair with Julia, a young woman he meets during the course of his work for the government. As much as it is an entertaining read, nineteen Eighty-Four is also a brilliant, and more importantly, a timeless satirical attack on the social and political structures of the world.",
    amount: 44
  },
  {
    id: '1a71ab9e-feca-4156-8553-e53b51570bdb',
    category: 'fiction',
    title: 'Animal Farm',
    author: 'George Orwell',
    price: 79,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71WI1r5j6HS.jpg',
      'https://m.media-amazon.com/images/I/91X38lJwhuL.jpg',
      'https://m.media-amazon.com/images/I/710LnjoVRSS.jpg'
    ],
    rating: 5,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: 'Fingerprint! Pocket Classics are perfect pocket-sized editions with complete original content. Convenient to carry, priced right and ideal for gifting and collecting, each classic with its vibrant cover and flap jacket offers an ultimate reading experience. What happens when ill-treated farm animals gang up to throw out their lazy, corrupt and power-drunk rulers? Animal Farm is born. As humans get ousted from Manor Farm and animals take control, their utopian fantasy of running a farm on the basis of equality soon begins to crumble before their eyes. The rebellion of the animals, led by the two pigs, Napoleon and Snowball, gives way to corrupt practices that lead to unthinkable consequences.',
    amount: 30
  },
  {
    id: '93a5e13c-83ab-4760-b6db-259d1e3044cd',
    category: 'classic',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    price: 172,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81opmtlMQ5L.jpg',
      'https://m.media-amazon.com/images/I/81UMlcJ++fL.jpg',
      'https://m.media-amazon.com/images/I/81SlZyTw3DL.jpg'
    ],
    rating: 4.7,
    isBestSeller: true,
    cover: Cover.HARDCOVER,
    description: '“The soul is a terrible reality. It can be bought and sold and bartered away.” Meet Dorian Gray, the beautiful young man with an impossibly charming face and spirit. As he sits for Basil Hallward—a deeply moral artist and a friend of the impish Lord Henry—who becomes obsessed with his beauty and wants to paint him, Dorian is enchanted by the perfection of his portrait. But, influenced by the well-phrased epigrams of the hedonist Lord Henry on the transience of youth and beauty, Dorian becomes jealous of it and wishes that the portrait bear the scars of his passing youth and age, while he would remain young forever. And alas, his wish comes true! Enticed into dissolution and degradation while his portrait is aging in the attic, Dorian engages in scandals and sinful pleasures. We see him go from good to evil. But is he any happier? This is a hardbound deluxe edition of the only novel written by Oscar Wilde, The Picture of Dorian Gray is an arresting moral commentary and a classic example of Gothic fiction. With an unparalleled depiction of the Faustian bargain, this parable of aesthetic ideal remains a literary masterpiece almost 125 years after its publication.',
    amount: 10
  },
  {
    id: 'bb37c210-f2e9-4280-96b7-09d6b3023599',
    category: 'classic',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 85,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71sJRMkeBNS.jpg',
      'https://m.media-amazon.com/images/I/81KHq5cLaGL.jpg',
      'https://m.media-amazon.com/images/I/71wU4OOlDoL.jpg'
    ],
    rating: 4.4,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Fingerprint! Pocket Classics are perfect pocket-sized editions with complete original content. Convenient to carry, priced right and ideal for gifting and collecting, each classic with its vibrant cover and flap jacket offers an ultimate reading experience. It?s the Roaring Twenties and New York City is the place to be. Everything can be purchased, everyone can be bought. But, can you make money erase your past? As more and more people lose themselves to the lure of money, ironically the only person who remains unaffected is Jay Gatsby, the enigmatic host of the most extravagant parties . . .',
    amount: 2
  },
  {
    id: '9a9639e5-8e09-445e-8d1a-aa2916e0dfaa',
    category: 'russian',
    title: 'The Greatest Short Stories of Leo Tolstoy',
    author: 'Leo Tolstoy',
    price: 169,
    urlToImages: [
      'https://m.media-amazon.com/images/I/819M94xydSL.jpg',
      'https://m.media-amazon.com/images/I/81S-ubePUPL.jpg',
      'https://m.media-amazon.com/images/I/81wYYHrsgDL.jpg'
    ],
    rating: 4.5,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: '“All great literature is one of two stories; a man goes on a journey or a stranger comes to town.” with a career spanning almost half a century, Leo Tolstoy penned down some of the world’s greatest and most celebrated works. This edition brings for you his thirty-five best short stories ranging from stories for children, stories for the people, and Russian folk tales to his adaptations from French stories and the ones written for the Jewish pogrom victims in Russia. It includes ‘the snowstorm’ (1856), ‘polikushka’ (1863), ‘The prisoner of the Caucasus’ (1872), ‘where love is, there God is also’ (1885), ‘two old men’ (1885), ‘Ivan the fool’ (1885), ‘kholstomír’ (1885), ‘The Imp and the crust’ (1886), ‘The coffee house of Surat’ (1893), ‘master and man’ (1895), ‘father sergius’, ‘work, death and sickness’, ‘after the dance’, and ‘Alyosha the pot’ (1911), among his other masterpieces. An editorial note precedes each work.',
    amount: 28
  },
  {
    id: '9d19801f-d190-458d-a48b-117e3568110f',
    category: 'russian',
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    price: 299.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81KPzmVf2mL.jpg',
      'https://m.media-amazon.com/images/I/817OvUX5pCL.jpg',
      'https://m.media-amazon.com/images/I/81g814qRGzL.jpg'
    ],
    rating: 4.2,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'War and Peace is one of the best known Russian historical novels in literature. Opening at Anna Pavlovna’s soirée, it introduces you to characters—such as the misfit, illegitimate son Pierre, the analytical and loner Prince Andrew, the sexually alluring Helene, and the impulsive and lively Natasha, who plays the pivotal role—whose minds and actions prove to be the laboratory where Tolstoy, with a psychologist’s deftness and an artist’s vision, lays bare the frailties and manias that make up the human psyche. Intricately designed with gilded edges, exquisite endpapers, and a ribbon bookmark, this hardbound deluxe edition is perfect for gifting and ideal to be read and treasured.',
    amount: 3
  },
  {
    id: '709cdc07-64b4-44e9-9ea4-5d0070b3326c',
    category: 'adventure',
    title: 'Treasure Island',
    author: 'Robert Louis Stevenson',
    price: 70.23,
    urlToImages: [
      'https://m.media-amazon.com/images/I/819gepUWtdS.jpg',
      'https://m.media-amazon.com/images/I/81KEIFn8oIS.jpg',
      'https://m.media-amazon.com/images/I/81B3lJa0fJS.jpg'
    ],
    rating: 5,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Think of the high seas and of a buccaneer ship; of a wild seaman with a sea chest full of gold; of Long John Silver; of a buried treasure and of young Jim Hawkins, the boy with the treasure map the key to it all. This is the Treasure Island and if you don’t think of all this, the pirates will hunt you down and when they find you, for find you they sure will, they will truss you and carry you back to their ship and just before they feed you to the sharks, as you walk the gangplank with a sword digging sharp and sure into your back, they will sing their one last song for you. “Fifteen men on the dead man’s chest Yo-ho-ho and a bottle of rum!”',
    amount: 8
  },
  {
    id: '74cb1d56-d8ab-40df-9a7c-82c64d4d7717',
    category: 'russian',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    price: 183,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81vTpOYpwOL.jpg',
      'https://m.media-amazon.com/images/I/71DRqUnf+VL.jpg',
      'https://m.media-amazon.com/images/I/91GblDf7AAL.jpg'
    ],
    rating: 4.5,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'This is an exquisite hardbound edition of Fyodor Dostoevsky’s masterpiece—Crime and Punishment. It first appeared in instalments in Russian Messenger in 1866. By this time, Dostoevsky had been orphaned, imprisoned, almost died, lost his wife and his brother. He was also neck-deep in debt. From such a man came the story of the psychological impact of committing a crime. In this book, Raskolnikov murders an old, evil pawnbroker. Good riddance, according to him, since the woman was an oppressor of the weak, and this act allowed him to solve his own financial problems. Yet, it is a crime, and the guilt begins gnaw at him inside, even though he considers himself to be an ‘extraordinary person’ whose actions are above the law. This edition, with gilded edges and beautiful endpapers, is perfect for gifting and will prove to be a valuable addition to any library.',
    amount: 3
  },
  {
    id: 'b96ec2bf-498e-42cd-b195-ade577c38105',
    category: 'fiction',
    title: 'The Greatest Works of George Orwell',
    author: 'George Orwell',
    price: 99.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81ZP6UV-y1S.jpg',
      'https://m.media-amazon.com/images/I/81qrl4UcFZS.jpg',
      'https://m.media-amazon.com/images/I/81cFo-zUgGS.jpg'
    ],
    rating: 4.7,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“In a time of deceit telling the truth is a revolutionary Act. ” a man of vociferous opinions, George Orwell took the publishing world by storm with his works. He was ranked second in the list of ‘the 50 greatest British writers since 1945’ by the times in 2008, and continues to remain one of the most remarkable writers of the twentieth century. This edition brings together Orwell’s three masterpieces: down and out in Paris and London (1933), Animal farm (1945), and 1984 (1949). the works have never gone out of print and continue to remain influential.',
    amount: 17
  },
  {
    id: 'e4bc90d1-492e-4ada-a364-1acafa4e9db3',
    category: 'adventure',
    title: 'The Lost World',
    author: 'Arthur Conan Doyle',
    price: 89.02,
    urlToImages: [
      'https://m.media-amazon.com/images/I/916RXLP7bFL.jpg',
      'https://m.media-amazon.com/images/I/81QgpbbeApL.jpg',
      'https://m.media-amazon.com/images/I/81FdNslpmyL.jpg'
    ],
    rating: 4.7,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“So tomorrow we disappear into the unknown. . . It may be our last word to those who are interested in our fate. ” dinosaurs, pterodactyls, ape-men, and other prehistoric creatures still roam among us. This ground-breaking discovery has been made by the notorious Professor George Edward Challenger, who is a brilliant scientist. But this revelation has been subjected to ridicule. In order to believe, people need proof. So, that’s what he will give them. Braving danger and risking his life, Challenger will set foot into the depths of the amazonian plateau of South America. Accompanying him in this extraordinary adventure are his professional rival Professor summerlee, journalist Edward Malone, and Lord John roxton. In the dense foliage of the dark, lost world, will Challenger find the proof he is looking for? And, if he does, will he survive? Arthur Conan Doyle the lost world became an instant success on publication. It is one of the best sci-fi stories ever written and is considered a classic that has set the standard for all fantasy-adventure stories.',
    amount: 4
  },
  {
    id: 'a15eb599-7204-4ad3-8f17-f2d2aa8fdc1d',
    category: 'children',
    title: 'The Little Prince',
    author: 'Antoine De Saint-Exupery',
    price: 159,
    urlToImages: [
      'https://m.media-amazon.com/images/I/91AWwH8U3HS.jpg',
      'https://m.media-amazon.com/images/I/818rTgnmlEL.jpg',
      'https://m.media-amazon.com/images/I/81gH1PxsPeL.jpg'
    ],
    rating: 5,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: "All grown-ups were once children.. but only few of them remember it. It's the Sahara Desert and a pilot has crashed his plane. When suddenly a young boy with golden hair and a loveable laugh and who claims to have fallen to Earth appears before him and asks him to draw a sheep, what does he do? He draws it!Thus begins this poetic and sublime adventure, an enchanting fable, which encloses in its heart the teachings of love, loss, loneliness and friendship.The fourth-most translated book in the world, the Little Prince has been adapted to multiple art forms and has managed to resonate in the hearts of its patrons every single time.",
    amount: 7
  },
  {
    id: '8a189acf-761d-4d9b-9a73-7df8a6e01582',
    category: 'children',
    title: 'The Prince and the Pauper',
    author: 'Mark Twain',
    price: 82.5,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81XdTyHW0YL.jpg',
      'https://m.media-amazon.com/images/I/71Ozwu5ygVL.jpg',
      'https://m.media-amazon.com/images/I/61hGgShdE7L.jpg'
    ],
    rating: 4.4,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'One day, when Tom canty, a London pauper, and Edward Tudor, the prince of Wales, come across each other, they discover that they don’t just look alike but are also the same age. As each is fascinated by the other life, The prince and the pauper decide to exchange roles. “A few minutes later the little prince of Wales was garlanded with Tom’s fluttering odds and ends, and the little prince of pauperdom was tricked out in the gaudy plumage of royalty. The two went and stood side by side before a great mirror, and Lo, a miracle: there did not seem to have been any change made!” what happens when the king dies and the prince has to take over the throne? A classic satire on the social conventions and injustices, the prince and the pauper is a timeless comedy of mistaken identities. It has been adapted for stage, Comics, films, and television time and again.',
    amount: 13
  },
  {
    id: 'ff4d8efe-643e-4e43-973b-2be170d2272a',
    category: 'children',
    title: 'The Jungle Book',
    author: 'Rudyard Kipling',
    price: 69,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81HPv6PnpCS.jpg',
      'https://m.media-amazon.com/images/I/81ABgNA0CUS.jpg',
      'https://m.media-amazon.com/images/I/81OztKEF2JS.jpg'
    ],
    rating: 4.3,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: "Adventures in the wild On a warm evening in the Seeonee hills, a family of wolves finds someone at the threshold of their cave?a human child, who knows nothing of the world of men. Adopted by Father Wolf, the man-cub Mowgli grows up with the pack in the Jungle. Mowgli begins his journey and learns the law of the Jungle with the help of his new-found friends: Bagheera the wise Panther and lovable old Baloo. Together they face many dangers and adventures, as Mowgli comes face-to-face with Shere Khan the tiger and the Bandar-Log. Embark on this adventurous journey with Mowgli, Rikki-tikki-tavi, Little Toomai and many others, as you read the enchanting 'The Jungle Book'. As you go from one thrilling escapade to the other, let Kipling take you into a world of fantasy.",
    amount: 1
  },
  {
    id: '392a10c2-2f7f-49be-9092-2c51c58bf3d3',
    category: 'classic',
    title: 'The Greatest Novels of Mark Twain',
    author: 'Mark Twain',
    price: 299,
    urlToImages: [
      'https://m.media-amazon.com/images/I/814Ynk2xy8S.jpg',
      'https://m.media-amazon.com/images/I/81m+TpdTZPL.jpg',
      'https://m.media-amazon.com/images/I/81Z4QNDkvEL.jpg'
    ],
    rating: 4.6,
    isBestSeller: false,
    cover: Cover.HARDCOVER,
    description: 'A legendary American writer and Humorist, mark Twain authored twenty-eight books and numerous sketches and short stories. This exquisitely designed leather-bound edition is a timeless collection of his greatest novels. It features his classic scathing satires and comedies namely the epic masterpiece the adventures of Tom Sawyer; the prince and the pauper, a delightful tale of mistaken identities; the great American novel The adventures of Huckleberry Finn; a Connecticut Yankee at king Arthur Court, a comedy revealing the absurdities of social and political norms and satirizing the romantic ideas of chivalry; and pudd?nhead Wilson, a story revolving around the switched identities of two boys and a biting social commentary on slavery and racism. The collection is perfect as a keepsake.',
    amount: 5
  },
  {
    id: '26ea16c7-d483-46a3-9eda-346f13b4636e',
    category: 'classic',
    title: 'Macbeth',
    author: 'William Shakespeare',
    price: 106,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71JLzfjq57S.jpg',
      'https://m.media-amazon.com/images/I/71vKRps2huL.jpg',
      'https://m.media-amazon.com/images/I/71viaoPUU-L.jpg'
    ],
    rating: 4.3,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: "Macbeth, a Scottish general, is enslaved by his passion when a trio of witches prophesy that he would one day become the King of Scotland. Blinded by the lust for power, he succumbs to the evil wishes of Lady Macbeth, stabs King Duncan in his sleep and seizes the throne.But soon enough, Macbeth is tormented by guilt and terror. What will he do to get away from the consequences of his crime?A drama of dark desire, violence and fear, Shakespeare's Macbeth reveals how evil can rule over a man?s goodness. One of the two most-performed plays by Shakespeare on BBC Radio, it has influenced numerous literary and non-literary adaptations across the centuries and continues to be an inspiration across various art forms.",
    amount: 25
  },
  {
    id: 'b9ddfb47-7b98-4491-8461-5c508c4b1571',
    category: 'adventure',
    title: 'The Three Musketeers',
    author: 'Alexandre Dumas',
    price: 109,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71BzSTXtH7L.jpg',
      'https://m.media-amazon.com/images/I/714SClI2neL.jpg',
      'https://m.media-amazon.com/images/I/61ZOUhUqMRL.jpg'
    ],
    rating: 4.7,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'In 17th century’s France, the young and ambitious D’Artagnan leaves everything behind and travels to Paris to be a part of the gallant group of men—The Musketeers of the Guard. He is refused admission to the group, but he meets Athos, Porthos, and Aramis, three inseparable friends and the great musketeers. Hidden behind the rich tapestry of rulers and royalty, all sorts of plots and ploys are at play, and soon D’Artagnan realizes that he has landed himself in the midst of a dreadful conspiracy. Pick up this beautifully illustrated book to get on a wild ride to the past and explore a thrilling tale of friendship, espionage, machinations, and murder.',
    amount: 8
  },
  {
    id: '4505ecf7-73e6-4b16-a201-1631b065cc8b',
    category: 'adventure',
    title: 'Oliver Twist',
    author: 'Charles Dickens',
    price: 59,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81X9mpk-mwS.jpg',
      'https://m.media-amazon.com/images/I/91nIxYbBx6L.jpg',
      'https://m.media-amazon.com/images/I/81mgaAKfAbL.jpg'
    ],
    rating: 4.4,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: 'It is a world of disappointment: often to the hopes we most cherish, and hopes that do our nature the greatest honor. Born into a life of impoverishment, orphaned at birth, Oliver Twist begins his life in a workhouse. Apprenticed to Mr. Sowerberry, he flees to London on being beaten.What happens as he meets Jack Dawkins, goes to work with him without knowing the nature of work and is taken to the police when mistaken for a thief Follow Oliver Twist as he strives to overcome the miserable conditions of the mid-19th century lower class and searches for an identity. Centered round the rise of capitalism and industrial revolution, Dickens Oliver Twist is a notable example of a social novel. Adapted into numerous art forms, it continues to remain a classic sensation.',
    amount: 3
  },
  {
    id: '943f9326-99b7-4bc3-8586-66cb289e2de4',
    category: 'classic',
    title: 'The Complete Novels of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    price: 205,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81KDmsPWVlS.jpg',
      'https://m.media-amazon.com/images/I/912govRG21L.jpg',
      'https://m.media-amazon.com/images/I/81AufUYBZcL.jpg'
    ],
    rating: 4.7,
    isBestSeller: false,
    cover: Cover.HARDCOVER,
    description: 'This collectable hardbound deluxe edition is beautifully crafted and designed. Perfect for gifting as well as for keeps. A prized edition for any library. ?There?s the scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it. ?Sherlock HolmesConsulting Detective 221B Baker Street, London. This is where begins a historical partnership between Dr. Watson the archetypal gentleman from the Victorian era and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions. This leather-bound, deluxe edition is a collection of the four novels written by Sir Arthur Conan Doyle: A Study in Scarlet (1887), the Sign of the Four (1890), the Hound of the Baskervilles (1902) and the Valley of Fear (1915). Featuring the timeless detective Sherlock Holmes, these novels have been successfully engrossing readers for more than a century now.',
    amount: 49
  },
  {
    id: '3731738a-42eb-43c3-9ec0-fcbedab5334e',
    category: 'classic',
    title: 'Hamlet',
    author: 'William Shakespeare',
    price: 94,
    urlToImages: [
      'https://m.media-amazon.com/images/I/61ewyOG0IZS.jpg',
      'https://m.media-amazon.com/images/I/71kwoQfDz7S.jpg',
      'https://m.media-amazon.com/images/I/71jWRNqXd3S.jpg'
    ],
    rating: 4.2,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: "In the Kingdom of Denmark, on a cold winter night, appears the ghost of the deceased King..What happens when Hamlet, the Prince of Denmark, encounters his father's ghost which reveals to him the secrets of his father?s murder, laying upon him the duty of revenge?Unconvinced and indecisive, Hamlet?the Prince of Demark, re-enacts the murder to find the truth. Will he be able to unmask and avenge the brutal and cold-blooded murder of his father? Will his inner struggle between taking a revenge and his propensity to delay thwart his desires to act. A typical Elizabethan Revenge Play, Hamlet is Shakespeare?s longest play and one of the most quoted works in English language. it is described as the worlds most filmed story after Cinderella.",
    amount: 4
  },
  {
    id: '971c3c24-72fd-429e-ab67-1557eeab3012',
    category: 'adventure',
    title: '20,000 Leagues Under the Sea',
    author: 'Jules Verne',
    price: 149,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81OaNTm8peS.jpg',
      'https://m.media-amazon.com/images/I/71miP3vpXjS.jpg',
      'https://m.media-amazon.com/images/I/81NBZy56u3S.jpg'
    ],
    rating: 4.8,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: "“The sea is the be all and end all! . . . It's an immense wilderness where a man is never lonely, because he feels life astir on every side.”After several maritime casualties and many vessels spotting a mysterious monstrous creature in the waters, the United States government arranges for an expedition to chase and destroy this creature. Pierre Aronnax, a professor at the Paris Museum and his faithful servant Conseil, join the others aboard the Abraham Lincoln and set out on their search. As a series of adventures follows, will they be able to find this sea monster?One of the debut adventure novels, 20,000 Leagues Under the Sea is Jules Verne’s masterpiece. Published more than a century ago, this classic science fiction continues to be praised by its readers.",
    amount: 30
  },
  {
    id: '1a348567-5d49-465d-9d15-0bad244889a5',
    category: 'fiction',
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    price: 97.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81+x6eHkSdS.jpg',
      'https://m.media-amazon.com/images/I/91rYn7jTFxL.jpg',
      'https://m.media-amazon.com/images/I/819iBo+totL.jpg'
    ],
    rating: 4.3,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'In this epic story of love, envy, betrayal and revenge, Heathcliff and Catherine come together in a romance that destroys them and those around them. Set in the lonely and bleak Yorkshire moors, this classic tale of thwarted passion begins when the new tenant of Thrushcross Grange, a Mr Lockwood, is forced to seek shelter for a night at Wuthering Heights. As the night passes, Lockwood learns of the tumultuous past of Wuthering Heights and of those connected with it.',
    amount: 7
  },
  {
    id: '5a254dea-8674-4aed-99e1-d944477f61e1',
    category: 'classic',
    title: 'Greatest Comedies of Shakespeare',
    author: 'William Shakespeare',
    price: 189,
    urlToImages: [
      'https://m.media-amazon.com/images/I/91iXOsD4itS.jpg',
      'https://m.media-amazon.com/images/I/81LSekLjNTL.jpg',
      'https://m.media-amazon.com/images/I/91Uc6oOBeqL.jpg'
    ],
    rating: 4.5,
    isBestSeller: false,
    cover: Cover.HARDCOVER,
    description: "This edition encapsulates the best of the world of Shakespearean comedy world that is rife with hilarious misconceptions, misunderstandings, and deception, with men and women disguised to switch their sexual identities, and where accidents and errors mysteriously lead to comical and ultimately happy consequences. Collected in this beautiful edition are a Midsummer Night's dream, the Merchant of Venice, the comedy of errors, twelfth night, and as you Like It? five of Shakespeare finest comedies. Encased in an exquisite leather-bound edition with gilded edges and beautiful endpapers this deluxe edition is priceless.",
    amount: 7
  },
  {
    id: '8144222d-f29f-43e8-a52f-c792a71ca6fb',
    category: 'classic',
    title: 'Greatest Tragedies of Shakespeare',
    author: 'William Shakespeare',
    price: 179.09,
    urlToImages: [
      'https://m.media-amazon.com/images/I/91cyxhmf4cS.jpg',
      'https://m.media-amazon.com/images/I/718GKfxfNgL.jpg',
      'https://m.media-amazon.com/images/I/91bC0iTUHEL.jpg'
    ],
    rating: 4.6,
    isBestSeller: true,
    cover: Cover.HARDCOVER,
    description: 'A compilation of the greatest tragedies ever written by William Shakespeare, this edition comprises Romeo and Juliet, Hamlet, Julius Caesar, Macbeth, and othello?five plays which are immensely popular, regularly studied, frequently performed, and have inspired countless adaptations, operas, poetry, and paintings. First published in the first Folio in 1623, These plays are worthy of being included in the list of the world?s finest tragic literature. Encased in an exquisite leather-bound edition with gilded edges and beautiful endpapers this deluxe edition is priceless.',
    amount: 7
  },
  {
    id: 'f0d75368-0f2e-451e-859a-d5f64c1ff2d7',
    category: 'adventure',
    title: 'Journey to the Centre of the Earth',
    author: 'Jules Verne',
    price: 93.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/8127crrQWJL.jpg',
      'https://m.media-amazon.com/images/I/81tcV0eLhGS.jpg',
      'https://m.media-amazon.com/images/I/81TZFrGgL+S.jpg'
    ],
    rating: 4.4,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Professor Liedenbrock, a man of incredible impatience and Axel, his unadventurous nephew, come across a coded note in an original runic manuscript of an Icelandic saga. as they try to decipher the code and reveal the message, the results are not quite meaningful.“I will get at the secret of this document andI will neither sleep nor eat until I have found it out.”My comment on this was a half-suppressed “Oh!”“Nor you either, Axel,” he added.As Axel discovers the secret, he decides to keep it to himself. But defeated by his hunger after two days, he reveals it to Liedenbrock. and what follows is a journey to the center of the Earth through Iceland, down a volcanic crater.Encountering grave dangers and bizarre phenomena, as they descend down the underground world, will they reach the center of the Earth?Adapted into numerous movies and television series, Journey to the Centre of the Earth is a brilliant science fiction adventure. Demonstrating Verne’s power of imagination, this masterpiece is one of his most successful works.',
    amount: 7
  },
  {
    id: '02136920-161b-4206-b5da-132903b29af4',
    category: 'children',
    title: 'The Jungle Book',
    author: 'Rudyard Kipling',
    price: 79,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71nhAMK6xES.jpg',
      'https://m.media-amazon.com/images/I/81oFlbGiIDL.jpg',
      'https://m.media-amazon.com/images/I/718NaMLJfJL.jpg'
    ],
    rating: 4.8,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'Fingerprint! Pocket Classics are perfect pocket-sized editions with complete original content. Convenient to carry, priced right and ideal for gifting and collecting, each classic with its vibrant cover and flap jacket offers an ultimate reading experience. On a warm evening in the Seeonee hills, a family of wolves finds someone at the threshold of their cave?a human child, who knows nothing of the world of men. Adopted by Father Wolf, the man-cub Mowgli grows up with the pack in the Jungle. He begins his journey and learns the law of the Jungle with the help of his new-found friends. Embark on this adventurous journey with Mowgli and many others, as you read the enchanting The Jungle Book.',
    amount: 30
  },
  {
    id: '6e08646b-1654-4949-aa71-e09965fc47d2',
    category: 'fiction',
    title: 'The Call Of The Wild',
    author: 'Jack London',
    price: 100,
    urlToImages: [
      'https://m.media-amazon.com/images/I/61p+TVZG19S.jpg',
      'https://m.media-amazon.com/images/I/81E5fuqQJ9L.jpg',
      'https://m.media-amazon.com/images/I/71xGPtTtMEL.jpg'
    ],
    rating: 4.3,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: 'Stolen from his home in Santa Clara Valley, California, Buck—the pampered pet of Judge Miller—is kidnapped, sold, and shipped to Canada where he is trained as a sled dog. Ill-treated and subjected to extreme conditions under various cruel masters, Buck struggles and turns into a wild beast. Will Buck survive the harsh conditions and answer the call of the wild? Set against the backdrop of the Klondike Gold Rush, The Call of the Wild is one of Jack London’s most well-received works, and has never gone out of print.',
    amount: 17
  },
  {
    id: '3ccf77da-bb83-4420-a61c-f65b5c9c1cbe',
    category: 'classic',
    title: 'The Importance of Being Earnest',
    author: 'Oscar Wilde',
    price: 75,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71RZBszBLkS.jpg',
      'https://m.media-amazon.com/images/I/81ptGGnjNkS.jpg',
      'https://m.media-amazon.com/images/I/71MidUeFyHS.jpg'
    ],
    rating: 4.3,
    isBestSeller: true,
    cover: Cover.PAPERBACK,
    description: "What happens when two women fall in love with Ernest and Ernest doesn't exist the Importance of Being Earnest!Secret identities, alter-egos, invented romances and someone named Ernest. . While Jack Worthing leads a double life?representing himself as Ernest little does he know what he is setting himself for. Things get interesting or worse, when his friend, Algernon Moncrieff, also impersonates Ernest, all in the pursuit of winning his lady love!What ensues is a satire that will tickle you, scintillate you and leave you in awe, admiring Wilde's deftness and capacity to produce powerful social comedies. A play that has thrilled readers for over a century, the Importance of Being Earnest, is a brilliant experiment in Victorian melodrama, replete with its farcical conventions and pinching satire. Subtitled a Trivial Comedy for Serious People, this amusing, eccentric farce brings for you as one of its paradoxes the impossibility of being either earnest or moral while claiming to be so.",
    amount: 7
  },
  {
    id: '085d594b-8542-4e9b-b68a-7d9b832b76ca',
    category: 'russian',
    title: 'The Greatest Short Stories of Anton Chekhov',
    author: 'Anton Chekhov',
    price: 97,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81-Y2qizxxS.jpg',
      'https://m.media-amazon.com/images/I/810dJH8qgrS.jpg',
      'https://m.media-amazon.com/images/I/81AbrNAnXZS.jpg'
    ],
    rating: 4.3,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“Life is a vexatious trap; when a thinking man reaches maturity and attains to full consciousness he cannot help feeling that he is in a trap from which there is no escape.” one of the greatest Russian short story writers and an exemplary playwright, Anton Chekhov penned down some of the finest short stories and plays in literature. His works continue to be translated into various languages across the world. This edition brings together his early short stories along with the outstanding short fiction written in his later years. It includes ‘the death of a government Clerk,’ ‘The Huntsman,’ ‘Oh! The public,’ ‘anyuta,’ ‘misery,’ ‘The lottery ticket,’ ‘a dreary story,’ ‘peasant wives,’ ‘The lady with the dog,’ and his last completed story, ‘betrothed.’ An editorial note precedes each work.',
    amount: 13
  },
  {
    id: '22c71fef-7c50-4344-9db4-585a58720988',
    category: 'classic',
    title: 'Great Expectations',
    author: 'Charles Dickens',
    price: 249.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/814S3F7UB9S.jpg',
      'https://m.media-amazon.com/images/I/81LXPqobHpL.jpg',
      'https://m.media-amazon.com/images/I/81YIvhoiukL.jpg'
    ],
    rating: 4.7,
    isBestSeller: false,
    cover: Cover.HARDCOVER,
    description: 'This exquisitely designed leather-bound edition of one of Dickens greatest works comes with a gold-foiled cover, a ribbon bookmark, gilded edges and beautiful endpapers. Ideal to be read and treasured, it makes for a perfect addition to any library.Taken to the Satis House by his Uncle Pumblechook one day, Pip, a young orphan, meets a wealthy, eccentric spinster, Miss Havisham and her beautiful, cold-hearted ward, Estella. Pip instantly falls in love with her. But in the days to come, he is constantly reminded that Estella is heartless.?You must know,? said Estella, condescending to me as a brilliant and beautiful woman might, ?that I have no heart... Apprenticed as a blacksmith with his brother-in-law, Pip yearns to become a wealthy gentleman in order to be worthy of her. And when he learns of the expectations from a secret benefactor for him to be trained in the gentlemanly arts, he goes to London. As a series of events follow, including Estella?s marriage to the brutal nobleman, Bentley Drummle, will Pip and Estella ever unite',
    amount: 13
  },
  {
    id: '140de838-10ce-454e-9d07-c68a2ee4ad12',
    category: 'classic',
    title: 'Gone with the Wind',
    author: 'Margaret Mitchell',
    price: 189,
    urlToImages: [
      'https://m.media-amazon.com/images/I/819bFn9OHDS.jpg',
      'https://m.media-amazon.com/images/I/81DLWJXDjPL.jpg',
      'https://m.media-amazon.com/images/I/91ePRG0ZNIL.jpg'
    ],
    rating: 5,
    isBestSeller: true,
    cover: Cover.HARDCOVER,
    description: 'This exquisitely designed leather-bound edition of Margaret Mitchell’s only novel comes with a glorious gold-foiled cover, a satin-ribbon bookmark, gilded edges and beautiful endpapers. Ideal to be read and treasured, it makes for a perfect addition to any library.It’s April 1861. Georgia, southern United States.Scarlet O’Hara—the vivacious, narcissistic and pampered daughter of a plantation owner in Atlanta—in a fit of choleric contempt over rejection by her desired man, Ashley Wilkes, hurls a figurine against the wall. And behind the depths of the sofa, Rhett Butler is woken up from his nap. “You’re no gentleman, ” fires the southern belle.“And you’re no lady!” the rogue fires back.Scarlet, for vengeance, accepts the marriage proposal from Charles Hamilton—Ashley Wilke’s brand new brother-in-law. But at the outbreak of the American Civil War he joins the army and dies of pneumonia followed by measles, a not-so-gallantry death. Through wiles and widowhood, Scarlet manages to keep her independence and becomes an astute business woman.Rhett Butler—the dark, flashy and scandalous visitor from Charleston—who is a professional gambler and blockade runner, is enamoured by her survival instincts. Around the social turmoils of the war, what becomes of O’Hara and Rhett Butler, an outcast whom she marries for money?',
    amount: 26
  },
  {
    id: 'a252b716-c04f-4524-aa18-f3570eb4023c',
    category: 'children',
    title: "The Complete Grimms' Fairy Tales",
    author: 'Jacob Grimm & Wilhelm Grimm',
    price: 109,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81zr7PyHa5S.jpg',
      'https://m.media-amazon.com/images/I/91f5YEimu3S.jpg',
      'https://m.media-amazon.com/images/I/81ubTFD9C6S.jpg'
    ],
    rating: 4.8,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'The fairy tales written by the Grimm brothers have had a grip on the popular imagination for more than a century, ever since their initial publication. There is boundless magic and wonder in these tales, as is evidenced by their constant retelling through adaptions into films, theatre, opera, animations, and other cultural forms, along with their place in the tradition of oral storytelling. Bringing together a timeless collection of tales both for children and adults, this beautiful leather-bound edition holds a treasure trove of two hundred fairy tales and ten children’s legends, translated from German by Margaret hunt. Among these you will find the enchanting stories of Cinderella, Hansel and Gretel, little snow-white, Rapunzel, Rumpelstiltskin, and many, many more.',
    amount: 36
  },
  {
    id: 'db6b63bc-e210-45f8-975c-81644aff57aa',
    category: 'children',
    title: "The Complete Grimms' Fairy Tales",
    author: 'Jacob Grimm & Wilhelm Grimm',
    price: 249.95,
    urlToImages: [
      'https://m.media-amazon.com/images/I/91xEPAl95+S.jpg',
      'https://m.media-amazon.com/images/I/81w-kpPXL8L.jpg',
      'https://m.media-amazon.com/images/I/81-79iqDrxL.jpg'
    ],
    rating: 4.6,
    isBestSeller: false,
    cover: Cover.HARDCOVER,
    description: 'The fairy tales written by the Grimm brothers have had a grip on the popular imagination for more than a century, ever since their initial publication. There is boundless magic and wonder in these tales, as is evidenced by their constant retelling through adaptions into films, theatre, opera, animations, and other cultural forms, along with their place in the tradition of oral storytelling. Bringing together a timeless collection of tales both for children and adults, this beautiful leather-bound edition holds a treasure trove of two hundred fairy tales and ten children’s legends, translated from German by Margaret hunt. Among these you will find the enchanting stories of Cinderella, Hansel and Gretel, little snow-white, Rapunzel, Rumpelstiltskin, and many, many more.',
    amount: 36
  },
  {
    id: '7b539ba8-8950-457d-af22-f682df09a69b',
    category: 'classic',
    title: 'The Case-Book of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    price: 115.99,
    urlToImages: [
      'https://m.media-amazon.com/images/I/81iXNr+yx2S.jpg',
      'https://m.media-amazon.com/images/I/71MFta6USDS.jpg',
      'https://m.media-amazon.com/images/I/81c+e7TgwDS.jpg'
    ],
    rating: 4.4,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“When you have eliminated all which is impossible, then whatever remains, however improbable, must be the truth.”From cases that baffle the clients to the ones that leave even the police bemused, Sherlock Holmes can solve it all. A collection of the twelve final adventures of Sherlock Holmes, The Case-Book of Sherlock Holmes includes ‘The Problem of the Thor Bridge,’ ‘The Adventure of the Sussex Vampire,’ ‘The Adventure of the Retired Colourman,’ ‘The Adventure of the Three Garridebs,’ and ‘The Adventure of the Illustrious Client.’ Rip-roaring and spine-chilling, these stories have been intriguing readers for generations.',
    amount: 3
  },
  {
    id: 'c0865a3c-cec4-45f8-99ba-7a579b1a33d3',
    category: 'classic',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    price: 158.73,
    urlToImages: [
      'https://m.media-amazon.com/images/I/71UrjLQcJSS.jpg',
      'https://m.media-amazon.com/images/I/81O2RoH0s3S.jpg',
      'https://m.media-amazon.com/images/I/71299eCnhtS.jpg'
    ],
    rating: 4.5,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“There is nothing more deceptive than an obvious fact.”He has no knowledge of literature, philosophy or astronomy. But his chemistry is strong, anatomy is explicit, remembers every horror committed in detail and is completely aware of the British Law.Meet Sherlock Holmes, the ruthless and self-disciplined detective who takes up every case as an intellectual challenge. He not only solves mysteries and discovers murderers, thieves and criminals, but also identifies the social injustices and provides a new and just approach to remedy them. A collection of twelve short stories, many of which were Doyle’s favorite, the Adventures of Sherlock Holmes was well received on its publication. Listed with the Guinness World Records as the ‘most portrayed movie character’ in history, Sherlock Holmes has been adapted numerous times and continues to remain a timeless detective.',
    amount: 16
  },
  {
    id: '7b6ab79a-6b1f-439b-b970-c0e965dbf282',
    category: 'classic',
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas',
    price: 139,
    urlToImages: [
      'https://m.media-amazon.com/images/I/816KABRp8-S.jpg',
      'https://m.media-amazon.com/images/I/81ZG-FuqZlS.jpg',
      'https://m.media-amazon.com/images/I/71po24rSRIS.jpg'
    ],
    rating: 4.5,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“Is not a day divided into twenty-four hours, each hour into sixty minutes and every minute sub-divided into sixty seconds? Now in 86,400 seconds very many things can be done. ”Edmond Dantès, a worthy and loving sailor, is imprisoned on the night of his wedding feast for a crime he has not committed. Thrown into solitary confinement, he decides to starve himself to death. But a few weeks later, there’s a scratching on his wall. Curious about the sound, he begins to eat again, using the serving dish to dig up. He eventually comes across a fellow prisoner, Faria, an Italian priest, who bequeaths him a secret treasure hidden on the island of Monte Cristo. How does Dantès escape and what turns him into the vindictive Count of Monte Cristo?Alexandre Dumas’ the Count of Monte Cristo is a legendary saga of a sailor, his romance, betrayal, punishment and revenge. a literary classic, it has been translated into almost all the modern languages. an inspiration for many literary and non-literary works, it has been a subject of various notable adaptations across different art forms.',
    amount: 16
  },
  {
    id: '415cdb5d-0e68-4068-8bf5-8f896a6dd75b',
    category: 'adventure',
    title: 'The Man In The Iron Mask',
    author: 'Alexandre Dumas',
    price: 139.75,
    urlToImages: [
      'https://m.media-amazon.com/images/I/716NIXc-mCL.jpg',
      'https://m.media-amazon.com/images/I/81mASkt2m1L.jpg',
      'https://m.media-amazon.com/images/I/714zTGg0ghL.jpg'
    ],
    rating: 4.3,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: 'It has been eight years since Philippe was captured and locked in the prison of Bastille. He languishes here, wondering what he could have possibly done to deserve such an unending, cruel punishment. And why is his face always under the clasp of an iron mask? Eight long years, Philippe has only wondered. Now, the truth is finally revealed to him. Aramis, one of the three musketeers, goes to Philippe’s cell and hands over a mirror and a portrait of the reigning King Louis XIV. Philippe is the twin brother of the King of France, and Aramis intends to put him on the throne. The corrupt and destructive ways of the current king have gone on for far too long. THE FINAL AND THE MOST DANGEROUS ADVENTURE OF THE THREE MUSKETEERS DRAWS NEAR, ONE THAT WILL BRING THEM HEAD TO HEAD WITH THE MOST POWERFUL MAN IN FRANCE.',
    amount: 11
  },
  {
    id: 'fe6adf3f-7129-42da-815e-52101aece91c',
    category: 'classic',
    title: 'The Beautiful and Damned',
    author: 'F. Scott Fitzgerald',
    price: 104.75,
    urlToImages: [
      'https://m.media-amazon.com/images/I/91gO+dKxJWS.jpg',
      'https://m.media-amazon.com/images/I/81QzjqKMP-S.jpg',
      'https://m.media-amazon.com/images/I/718WGz1kzJS.jpg'
    ],
    rating: 4.4,
    isBestSeller: false,
    cover: Cover.PAPERBACK,
    description: '“Because desire just cheats you.”She is a reveler. He is a socialite. They are young, haughty and selfish. And they do not understand the idea of working. Meet Gloria Gilbert, the beautiful, narcissistic dancer and Anthony Patch, the prospective heir to his grandfather’s fortune. Stunned by Gloria’s beauty, Anthony is desperately in love with her; and soon she becomes his wife. But as the passionate and glamorous couple await the inheritance, indulging in the luxurious and thrilling lifestyle of New York, they are chafed under financial pressures. What happens as their marriage begins to fail in the face of reality? With characters representing the extravagance of the upper echelons and the intrinsic conflicts of a changing social environment, F. Scott Fitzgerald’s the Beautiful and Damned probes into the café society of New York, exploring the ideas of money and decadence. This Jazz Age novel is considered a masterpiece and continues to remain a bestseller.',
    amount: 17
  }
];
