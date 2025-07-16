export interface Product {
  id: string;
  name: string;
  image: string;
  fullImage: string[];
}

export const products: Product[] = [
  {
    id: 'hd-08-premium',
    name: 'T-SHIRT 08',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751479901/HOODIE_RED01_b47cqn.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751479901/HOODIE_RED01_b47cqn.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751479899/HOODIE_RED03_qaaxuf.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751479902/HOODIE_RED02_z816zo.jpg'],
  },
  {
    id: 'sh-10-black',
    name: 'T-SHIRT 10',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626054/LOOSE_FIT_01_ymvbmw.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626054/LOOSE_FIT_01_ymvbmw.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626055/LOOSE_FIT_02_cha0yf.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626054/LOOSE_FIT_03_l04jvd.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626055/LOOSE_FIT_04_pqf8bn.jpg'],
  },
  {
    id: 'sh-11-black',
    name: 'T-SHIRT 11',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626054/OVERSIZED_FIT_black_0_jqz2kk.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626054/OVERSIZED_FIT_black_0_jqz2kk.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1752626055/OVERSIZED_FIT_black_02_oiryhs.jpg'],
  },
  {
    id: 'hd-07-black',
    name: 'T-SHIRT 07',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751480982/Camiseta_Oversized_Fit_Blanca_01_xjs8bm.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751480982/Camiseta_Oversized_Fit_Blanca_01_xjs8bm.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751480983/Camiseta_Oversized_Fit_Blanca_02_c1yy72.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751480983/Camiseta_Oversized_Fit_Blanca_03_asqrst.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751480984/Camiseta_Oversized_Fit_Blanca_04_vvjpyl.jpg'],
  },
  {
    id: 'hd-09-black',
    name: 'T-SHIRT 09',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481156/Camiseta_Loose_Fit_Negro01_evloqc.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481156/Camiseta_Loose_Fit_Negro01_evloqc.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481156/Camiseta_Loose_Fit_Negro03_tctmnh.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481157/Camiseta_Loose_Fit_Negro02_bkk2rb.jpg'],
  },
  {
    id: 'goldpants-03-black',
    name: 'HOODIE 03',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481579/pants_linn01_l1xpfb.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481579/pants_linn01_l1xpfb.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481581/pants_linn02_bvn7c9.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481582/pants_linn03_uzxlze.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481581/pants_linn04_s3rlsc.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751481581/pants_linn05_ct3rb0.jpg'],
  },
  {
    id: 'hd-04-black',
    name: 'HOODIE 04',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482008/pants_WAHADS01_an3swp.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482008/pants_WAHADS01_an3swp.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482009/pants_WAHADS02_lwziza.jpg'],
  },
  {
    id: 'hd-05-black',
    name: 'HOODIE 05',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482553/Oversized_Fit_Negro_Mujer01_c0p9so.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482553/Oversized_Fit_Negro_Mujer01_c0p9so.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482552/Oversized_Fit_Negro_Mujer02_i7px7v.jpg'],
  },
  {
    id: 'goldpants-01-tote',
    name: 'TOTE BAG 01',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482822/TOTE_BAG_WAHADS01_wla8ch.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482822/TOTE_BAG_WAHADS01_wla8ch.jpg', 'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751482821/TOTE_BAG_WAHADS02_ul2aqa.jpg'],
  },
  {
    id: 'hd-01c-black',
    name: 'CAP 01',
    image:
    'https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751483125/CAP_02_e2ck9b.jpg',
    fullImage: ['https://res.cloudinary.com/ddqgjf5wr/image/upload/v1751483125/CAP_02_e2ck9b.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1750800883/CAP_1B_jo3smu.jpg','https://res.cloudinary.com/ddqgjf5wr/image/upload/v1750800882/CAP_1A_lvtpfb.jpg'],
  },
  // {
  //   id: 'sh-06-black',
  //   name: 'T-SHIRT 06',
  //   image:
  //   '/images/T_SHIRT_6.jpg',
  //   fullImage: ['/images/T_SHIRT_6.jpg', '/images/T_SHIRT_6A.jpg'],
  // },
  // {
  //   id: 'sh-02-black',
  //   name: 'T-SHIRT 02',
  //   image:
  //   '/images/T_SHIRT_2.jpg',
  //   fullImage: ['/images/T_SHIRT_2.jpg', '/images/T_SHIRT_2A.jpg'],
  // },
  // {
  //   id: 'sh-03-black',
  //   name: 'T-SHIRT 03',
  //   image:
  //     '/images/T_SHIRT_3.jpg',
  //   fullImage: ['/images/T_SHIRT_3.jpg', '/images/T_SHIRT_3A.jpg'],
  // },
  // {
  //   id: 'sh-04-black',
  //   name: 'T-SHIRT 04',
  //   image:
  //   '/images/T_SHIRT_4.jpg',
  //   fullImage: ['/images/T_SHIRT_4.jpg', '/images/T_SHIRT_4A.jpg'],
  // },
  // {
  //   id: 'sh-01-gray',
  //   name: 'T-SHIRT 01',
  //   image:
  //   '/images/T_SHIRT_1.jpg',
  //   fullImage: ['/images/T_SHIRT_1.jpg', '/images/T_SHIRT_1A.jpg'],
  // },
  // {
  //   id: 'hd-01-black',
  //   name: 'HOODIE 01',
  //   image:
  //   '/images/HOODIE_1.jpg',
  //   fullImage: ['/images/HOODIE_1.jpg', '/images/HOODIE_1A.jpg', '/images/HOODIE_1B.jpg', '/images/HOODIE_1C.jpg',],
  // },
  // {
  //   id: 'hd-02-black',
  //   name: 'HOODIE 02',
  //   image:
  //   '/images/HOODIE_2.jpg',
  //   fullImage: ['/images/HOODIE_2.jpg', '/images/HOODIE_2A.jpg'],
  // },
  
  
  
];

// Function to find product by ID
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
