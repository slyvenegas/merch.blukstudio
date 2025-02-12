export interface Product {
  id: string;
  name: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'sh-01-white',
    name: 'T-SHIRT 01',
    image:
      '/images/T_SHIRT_1.jpg',
  },
  {
    id: 'sh-01-back-white',
    name: 'T-SHIRT 01',
    image:
      '/images/T_SHIRT_1A.jpg',
  },
  {
    id: 'sh-02-white',
    name: 'T-SHIRT 02',
    image:
      '/images/T_SHIRT_2.jpg',
  },
  {
    id: 'sh-02-back-white',
    name: 'T-SHIRT 02',
    image:
      '/images/T_SHIRT_2A.jpg',
  },
  {
    id: 'sh-03-white',
    name: 'T-SHIRT 03',
    image:
      '/images/T_SHIRT_3A.jpg',
  },
  {
    id: 'sh-03-back-white',
    name: 'T-SHIRT 03',
    image:
      '/images/T_SHIRT_3.jpg',
  },
  // {
  //   id: 'hd-01-black',
  //   name: 'CREWNECK 01',
  //   image:
  //     '/images/T_SHIRT_7.webp',
  // },
  // {
  //   id: 'hd-02-black',
  //   name: 'CREWNECK 02',
  //   image:
  //     '/images/T_SHIRT_15.webp',
  // },
  {
    id: 'sh-04-white',
    name: 'T-SHIRT 04',
    image:
      '/images/T_SHIRT_4A.jpg',
  },
  {
    id: 'sh-04-back-white',
    name: 'T-SHIRT 04',
    image:
      '/images/T_SHIRT_4.jpg',
  },
  // {
  //   id: 'sh-05-white',
  //   name: 'T-SHIRT 05',
  //   image:
  //     '/images/T_SHIRT_5.webp',
  // },
  // {
  //   id: 'sh-5a-white',
  //   name: 'T-SHIRT 5A',
  //   image:
  //     '/images/T_SHIRT_5A.webp',
  // },
  // {
  //   id: 'sh-11-white',
  //   name: 'T-SHIRT 11',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'sh-12-white',
  //   name: 'T-SHIRT 12',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  {
    id: 'hd-01-black',
    name: 'HOODIE 01',
    image:
      '/images/HOODIE_1.jpg',
  },
  {
    id: 'hd-01-back-black',
    name: 'HOODIE 01A',
    image:
      '/images/HOODIE_1A.jpg',
  },
  // {
  //   id: 'hd-05-black',
  //   name: 'CREWNECK 05',
  //   image:
  //     '/images/T_SHIRT_21.webp',
  // },
  // {
  //   id: 'hd-06-black',
  //   name: 'CREWNECK 06',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'hd-07-black',
  //   name: 'CREWNECK 07',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'hd-08-black',
  //   name: 'CREWNECK 08',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'hd-09-black',
  //   name: 'CREWNECK 09',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'hd-10-black',
  //   name: 'CREWNECK 10',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'sh-13-white',
  //   name: 'T-SHIRT 13',
  //   image:
  //     '/images/T_SHIRT_23.webp',
  // },
  // {
  //   id: 'sh-14-white',
  //   name: 'T-SHIRT 14',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'hd-11-black',
  //   name: 'CREWNECK 11',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  // {
  //   id: 'hd-12-black',
  //   name: 'CREWNECK 12',
  //   image:
  //     '/images/T_SHIRT_26.webp',
  // },
];

// Function to find product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
