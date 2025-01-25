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
      '/images/T_SHIRT_1.webp',
  },
  // {
  //   id: 'sh-02-white',
  //   name: 'T-SHIRT 02',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  {
    id: 'sh-03-white',
    name: 'T-SHIRT 03',
    image:
      '/images/T_SHIRT_3.webp',
  },
  // {
  //   id: 'sh-04-white',
  //   name: 'T-SHIRT 04',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  {
    id: 'sh-05-white',
    name: 'T-SHIRT 05',
    image:
      '/images/T_SHIRT_5.webp',
  },
  // {
  //   id: 'sh-06-white',
  //   name: 'T-SHIRT 06',
  //   image:
  //     '/images/T_SHIRT_1.webp',
  // },
  {
    id: 'hd-01-black',
    name: 'CREWNECK 01',
    image:
      '/images/T_SHIRT_7.webp',
  },
  {
    id: 'hd-02-black',
    name: 'CREWNECK 02',
    image:
      '/images/T_SHIRT_15.webp',
  },
  {
    id: 'sh-07-white',
    name: 'T-SHIRT 07',
    image:
      '/images/T_SHIRT_9.webp',
  },
  {
    id: 'sh-08-white',
    name: 'T-SHIRT 08',
    image:
      '/images/T_SHIRT_12.webp',
  },
  {
    id: 'sh-09-white',
    name: 'T-SHIRT 09',
    image:
      '/images/T_SHIRT_13.webp',
  },
  // {
  //   id: 'sh-10-white',
  //   name: 'T-SHIRT 10',
  //   image:
  //     '/images/T_SHIRT_1.webp',
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
    id: 'hd-03-black',
    name: 'CREWNECK 03',
    image:
      '/images/T_SHIRT_17.webp',
  },
  {
    id: 'hd-04-black',
    name: 'CREWNECK 04',
    image:
      '/images/T_SHIRT_19.webp',
  },
  {
    id: 'hd-05-black',
    name: 'CREWNECK 05',
    image:
      '/images/T_SHIRT_21.webp',
  },
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
  {
    id: 'sh-13-white',
    name: 'T-SHIRT 13',
    image:
      '/images/T_SHIRT_23.webp',
  },
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
  {
    id: 'hd-12-black',
    name: 'CREWNECK 12',
    image:
      '/images/T_SHIRT_26.webp',
  },
];

// Function to find product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
