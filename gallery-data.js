// Standard størrelser (3:2)
const SIZES_STD_LAND = ['45 × 30 cm', '60 × 40 cm', '90 × 60 cm']; // liggende
const SIZES_STD_PORT = ['30 × 45 cm', '40 × 60 cm', '60 × 90 cm']; // stående
const SIZES_SQUARE   = ['30 × 30 cm', '45 × 45 cm', '60 × 60 cm']; // kvadratisk

const GALLERY = {

  // Bilder som vises tilfeldig på forsiden
  featured: [
    { file: '045.webp', folder: 'haiku',        title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '152.webp', folder: 'on-the-road',  title: 'Highway 160, Monument Valley, Navajo Nation, Arizona, USA 1993', sizes: ['50 × 22,3 cm', '70 × 31,3 cm', '100 × 44,5 cm'] },
    { file: '190.webp', folder: 'on-the-road',  title: 'Highway 93, Nevada, USA 2003', sizes: SIZES_STD_LAND },
    { file: '028.webp', folder: 'verdens-ende', title: 'Verdens Ende, Tjøme 1980', sizes: SIZES_SQUARE },
    { file: '021.webp', folder: 'verdens-ende', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '019.webp', folder: 'verdens-ende', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '041.webp', folder: 'haiku',        title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: 'Dylan_Martinsen_Gøtebeorg.webp', folder: 'featured', title: 'Dylan, Göteborg, 1978', sizes: ['27,5 × 50 cm', '38,5 × 70 cm', '55 × 100 cm'] },
  ],

  onTheRoad: [
    { file: '152.webp', title: 'Highway 160, Monument Valley, Navajo Nation, Arizona, USA 1993', sizes: ['50 × 22,3 cm', '70 × 31,3 cm', '100 × 44,5 cm'] },
    { file: '160.webp', title: 'Selvportrett, USA 2003', sizes: SIZES_STD_LAND },
    { file: '161.webp', title: 'Salt Lake Flats, Utah, USA 1993', sizes: SIZES_STD_LAND },
    { file: '162.webp', title: 'Two Arrows, Route 66, Arizona, USA 1993', sizes: SIZES_STD_LAND },
    { file: '170.webp', title: 'Barstow, California, USA 1992', sizes: SIZES_STD_LAND },
    { file: '178.webp', title: 'Marine County, California, USA 1981', sizes: SIZES_STD_LAND },
    { file: '189.webp', title: '"Ghost Range", Abiquiou, New Mexico, USA 1993', sizes: SIZES_STD_LAND },
    { file: '190.webp', title: 'Highway 93, Nevada, USA 2003', sizes: SIZES_STD_LAND },
    { file: '191.webp', title: 'Highway 93, Nevada, USA 2003', sizes: SIZES_STD_LAND },
  ],

  haiku: [
    { file: '032.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2001', sizes: SIZES_SQUARE },
    { file: '033.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '034.webp', title: 'Månedammen, Tønsberg 2002', sizes: SIZES_SQUARE },
    { file: '035.webp', title: 'Månedammen, Tønsberg 2002', sizes: ['20 × 50 cm', '27,5 × 70 cm', '39 × 100 cm'] },
    { file: '036.webp', title: 'Holmen, Nøtterøy 2001', sizes: ['21,5 × 50 cm', '30 × 70 cm', '43 × 100 cm'] },
    { file: '037.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '038.webp', title: 'Månedammen, Tønsberg 2002', sizes: ['50 × 24 cm', '70 × 34 cm', '100 × 48,5 cm'] },
    { file: '039.webp', title: 'Månedammen, Tønsberg 2002', sizes: ['50 × 24,2 cm', '70 × 34 cm', '100 × 48,5 cm'] },
    { file: '040.webp', title: 'Månedammen, Tønsberg 2002', sizes: SIZES_SQUARE },
    { file: '041.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '042.webp', title: 'Holmen, Nøtterøy 2001', sizes: ['28 × 50 cm', '39,3 × 70 cm', '56 × 100 cm'] },
    { file: '043.webp', title: 'Holmen, Nøtterøy 1999', sizes: SIZES_SQUARE },
    { file: '044.webp', title: 'Joshua Tree, Yosemite National Park, California, USA 1981', sizes: SIZES_SQUARE },
    { file: '045.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
  ],

  verdensEnde: [
    { file: '019.webp', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '020.webp', title: 'Kannesteinen, Vågsøy 1987', sizes: SIZES_SQUARE },
    { file: '021.webp', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '022.webp', title: 'Verdens Ende, Tjøme 1980', sizes: SIZES_SQUARE },
    { file: '023.webp', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '024.webp', title: 'Verdens Ende, Tjøme 1976', sizes: SIZES_SQUARE },
    { file: '025.webp', title: 'Verdens Ende, Tjøme 1976', sizes: SIZES_SQUARE },
    { file: '026.webp', title: 'Verdens Ende, Tjøme 1977', sizes: SIZES_SQUARE },
    { file: '027.webp', title: 'Måløy, Vågsøy 1987', sizes: SIZES_SQUARE },
    { file: '028.webp', title: 'Verdens Ende, Tjøme 1980', sizes: SIZES_SQUARE },
    { file: '029.webp', title: 'Verdens Ende, Tjøme 1980', sizes: SIZES_SQUARE },
  ],

  innside: [
    { file: '048.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: ['23,8 × 50 cm', '33,3 × 70 cm', '47,5 × 100 cm'] },
    { file: '049.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: SIZES_SQUARE },
    { file: '050.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: SIZES_SQUARE },
    { file: '051.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: SIZES_SQUARE },
  ],

  svalbard: [
    { file: '030.webp', title: 'Svalbard 2004', sizes: ['19 × 50 cm', '26,6 × 70 cm', '38 × 100 cm'] },
    { file: '031.webp', title: 'Svalbard 2004', sizes: ['19 × 50 cm', '26,6 × 70 cm', '38 × 100 cm'] },
  ],

  portretter: [
    { file: '01.webp', title: 'Dylan, Göteborg, 1978', sizes: ['27,5 × 50 cm', '38,5 × 70 cm', '55 × 100 cm'] },
    { file: '02.webp', title: 'Tor Obrestad, Jæren 1993', sizes: SIZES_SQUARE },
    { file: '03.webp', title: 'Christer Strømholm 1983', sizes: SIZES_SQUARE },
    { file: '04.webp', title: 'Anne Grete Preus 1998', sizes: SIZES_STD_LAND },
    { file: '05.webp', title: 'Grace Jones, Cannes, 1986', sizes: SIZES_STD_LAND },
    { file: '06.webp', title: 'Dag Solstad 1999', sizes: SIZES_STD_PORT },
  ],

};
