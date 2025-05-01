export interface Product {
  id: string;
  name: string;
  image: string;
  fullImage: string[];
}

export const products: Product[] = [
  {
    id: 'sh-01-gray',
    name: 'T-SHIRT 01',
    image:
    '/images/T_SHIRT_1.jpg',
    fullImage: ['/images/T_SHIRT_1.jpg', '/images/T_SHIRT_1A.jpg'],
  },
  {
    id: 'sh-05-white',
    name: 'T-SHIRT 05',
    image:
    '/images/T_SHIRT_5.jpg',
    fullImage: ['/images/T_SHIRT_5.jpg', '/images/T_SHIRT_5A.jpg'],
  },
  {
    id: 'sh-06-black',
    name: 'T-SHIRT 06',
    image:
      '/images/T_SHIRT_6.jpg',
    fullImage: ['/images/T_SHIRT_6.jpg', '/images/T_SHIRT_6A.jpg'],
  },
  {
    id: 'sh-02-black',
    name: 'T-SHIRT 02',
    image:
      '/images/T_SHIRT_2.jpg',
    fullImage: ['/images/T_SHIRT_2.jpg', '/images/T_SHIRT_2A.jpg'],
  },
  {
    id: 'sh-03-black',
    name: 'T-SHIRT 03',
    image:
      '/images/T_SHIRT_3.jpg',
    fullImage: ['/images/T_SHIRT_3.jpg', '/images/T_SHIRT_3A.jpg'],
  },
  {
    id: 'sh-04-black',
    name: 'T-SHIRT 04',
    image:
      '/images/T_SHIRT_4.jpg',
    fullImage: ['/images/T_SHIRT_4.jpg', '/images/T_SHIRT_4A.jpg'],
  },
  {
    id: 'hd-01-black',
    name: 'HOODIE 01',
    image:
      '/images/HOODIE_1.jpg',
    fullImage: ['/images/HOODIE_1.jpg', '/images/HOODIE_1A.jpg', '/images/HOODIE_1B.jpg', '/images/HOODIE_1C.jpg',],
  },
  {
    id: 'hd-02-black',
    name: 'HOODIE 02',
    image:
      '/images/HOODIE_2.jpg',
    fullImage: ['/images/HOODIE_2.jpg', '/images/HOODIE_2A.jpg'],
  },
  {
    id: 'sh-01c-black',
    name: 'CAP 01',
    image:
      '/images/CAP_1.jpg',
    fullImage: ['/images/CAP_1.jpg', '/images/CAP_1A.jpg', '/images/CAP_1B.jpg'],
  },


  
];

// Function to find product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
