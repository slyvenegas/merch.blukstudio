export interface Product {
  id: string;
  name: string;
  image: string;
  fullImage: string;
}

export const products: Product[] = [
  {
    id: 'sh-01-white',
    name: 'T-SHIRT 01',
    image:
      '/images/T_SHIRT_1.jpg',
    fullImage: '/images/detail_1.jpg',

  },
  {
    id: 'sh-02-white',
    name: 'T-SHIRT 02',
    image:
      '/images/T_SHIRT_2.jpg',
    fullImage: '/images/detail_2.jpg',
  },
  {
    id: 'sh-03-white',
    name: 'T-SHIRT 03',
    image:
      '/images/T_SHIRT_3.jpg',
    fullImage: '/images/detail_3.jpg',
  },
  {
    id: 'sh-04-white',
    name: 'T-SHIRT 04',
    image:
      '/images/T_SHIRT_4.jpg',
    fullImage: '/images/detail_4.jpg',
  },
  {
    id: 'hd-01-black',
    name: 'HOODIE 02',
    image:
      '/images/HOODIE_1.jpg',
    fullImage: '/images/detail_h1.jpg',
  },
  {
    id: 'hd-02-black',
    name: 'HOODIE 02',
    image:
      '/images/HOODIE_2.jpg',
    fullImage: '/images/detail_h2.jpg',
  },
  {
    id: 'sh-01c-white',
    name: 'CAP 01',
    image:
      '/images/CAP_1.jpg',
    fullImage: '/images/detail_c1.jpg',
  },

];

// Function to find product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
