// Standard størrelser. Lengste side først; miniatyren på kjøpssiden viser orientering.
const SIZES_STD    = ['45 × 30 cm', '60 × 40 cm', '90 × 60 cm']; // 3:2
const SIZES_SQUARE = ['30 × 30 cm', '45 × 45 cm', '60 × 60 cm']; // kvadratisk

const GALLERY = {

  // Bilder som vises tilfeldig på forsiden
  featured: [
    { file: '045.webp', folder: 'haiku',        title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '152.webp', folder: 'on-the-road',  title: 'Highway 160, Monument Valley, Navajo Nation, Arizona, USA 1993', sizes: ['50 × 22,3 cm', '70 × 31,3 cm', '100 × 44,5 cm'] },
    { file: '190.webp', folder: 'on-the-road',  title: 'Highway 93, Nevada, USA 2003', sizes: SIZES_STD },
    { file: '028.webp', folder: 'verdens-ende', title: 'Verdens Ende, Tjøme 1980', sizes: SIZES_SQUARE },
    { file: '021.webp', folder: 'verdens-ende', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '019.webp', folder: 'verdens-ende', title: 'Verdens Ende, Tjøme 1978', sizes: SIZES_SQUARE },
    { file: '041.webp', folder: 'haiku',        title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: 'Dylan_Martinsen_Gøtebeorg.webp', folder: 'featured', title: 'Dylan, Göteborg, 1978', sizes: ['50 × 27,5 cm', '70 × 38,5 cm', '100 × 55 cm'] },
  ],

  onTheRoad: [
    { file: '152.webp', title: 'Highway 160, Monument Valley, Navajo Nation, Arizona, USA 1993', sizes: ['50 × 22,3 cm', '70 × 31,3 cm', '100 × 44,5 cm'] },
    { file: '160.webp', title: 'Selvportrett, USA 2003', sizes: SIZES_STD },
    { file: '161.webp', title: 'Salt Lake Flats, Utah, USA 1993', sizes: SIZES_STD },
    { file: '162.webp', title: 'Two Arrows, Route 66, Arizona, USA 1993', sizes: SIZES_STD },
    { file: '170.webp', title: 'Barstow, California, USA 1992', sizes: SIZES_STD },
    { file: '174.webp', title: 'Moenkopi, Navajo Nation, Arizona, USA 1981', sizes: SIZES_STD },
    { file: '175.webp', title: 'Arizona, USA 1981', sizes: SIZES_STD },
    { file: '176.webp', title: 'Arizona, USA 1981', sizes: SIZES_STD },
    { file: '177.webp', title: 'Texas, USA 1991', sizes: SIZES_STD },
    { file: '178.webp', title: 'Marine County, California, USA 1981', sizes: SIZES_STD },
    { file: '179.webp', title: 'Death Valley junction, California, USA 1993', sizes: SIZES_STD },
    { file: '184.webp', title: 'Rancho de Taos, New Mexico, USA 1993', sizes: SIZES_STD },
    { file: '187.webp', title: 'Taos, New Mexico, USA 1993', sizes: SIZES_STD },
    { file: '189.webp', title: '"Ghost Range", Abiquiou, New Mexico, USA 1993', sizes: SIZES_STD },
    { file: '190.webp', title: 'Highway 93, Nevada, USA 2003', sizes: SIZES_STD },
    { file: '191.webp', title: 'Highway 93, Nevada, USA 2003', sizes: SIZES_STD },
  ],

  haiku: [
    { file: '041.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '032.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2001', sizes: SIZES_SQUARE },
    { file: '033.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '034.webp', title: 'Månedammen, Tønsberg 2002', sizes: SIZES_SQUARE },
    { file: '035.webp', title: 'Månedammen, Tønsberg 2002', sizes: ['50 × 20 cm', '70 × 27,5 cm', '100 × 39 cm'] },
    { file: '036.webp', title: 'Holmen, Nøtterøy 2001', sizes: ['50 × 21,5 cm', '70 × 30 cm', '100 × 43 cm'] },
    { file: '037.webp', title: 'Holmen, Nøtterøy 2001', sizes: SIZES_SQUARE },
    { file: '038.webp', title: 'Månedammen, Tønsberg 2002', sizes: ['50 × 24 cm', '70 × 34 cm', '100 × 48,5 cm'] },
    { file: '039.webp', title: 'Månedammen, Tønsberg 2002', sizes: ['50 × 24,2 cm', '70 × 34 cm', '100 × 48,5 cm'] },
    { file: '040.webp', title: 'Månedammen, Tønsberg 2002', sizes: SIZES_SQUARE },
    { file: '042.webp', title: 'Holmen, Nøtterøy 2001', sizes: ['50 × 28 cm', '70 × 39,3 cm', '100 × 56 cm'] },
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
    { file: '048.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: ['50 × 23,8 cm', '70 × 33,3 cm', '100 × 47,5 cm'] },
    { file: '049.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: SIZES_SQUARE },
    { file: '050.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: SIZES_SQUARE },
    { file: '051.webp', title: 'Moutmarka, Verdens Ende, Tjøme 2006', sizes: SIZES_SQUARE },
  ],

  svalbard: [
    { file: '030.webp', title: 'Svalbard 2004', sizes: ['50 × 19 cm', '70 × 26,6 cm', '100 × 38 cm'] },
    { file: '031.webp', title: 'Svalbard 2004', sizes: ['50 × 19 cm', '70 × 26,6 cm', '100 × 38 cm'] },
  ],

  portretter: [
    { file: '123.webp', title: 'Jamie Parslow 1978', sizes: SIZES_SQUARE },
    { file: '03.webp', title: 'Christer Strømholm 1983', sizes: SIZES_SQUARE },
    { file: '131.webp', title: 'Susanne Wilberg 1987', sizes: SIZES_SQUARE },
    { file: '132.webp', title: 'Anne Cath. Vestly 2000', sizes: SIZES_SQUARE },
    { file: '133.webp', title: 'Torborg Nedreaas 1974', sizes: SIZES_STD },
    { file: '01.webp', title: 'Dylan, Göteborg, 1978', sizes: ['50 × 27,5 cm', '70 × 38,5 cm', '100 × 55 cm'] },
    { file: '02.webp', title: 'Tor Obrestad, Jæren 1993', sizes: SIZES_SQUARE },
    { file: '134.webp', title: 'Erlend Loe 2002', sizes: SIZES_STD },
    { file: '05.webp', title: 'Grace Jones, Cannes, 1986', sizes: SIZES_STD },
    { file: '04.webp', title: 'Anne Grete Preus 1998', sizes: SIZES_STD },
    { file: '145.webp', title: 'Per Petterson 2000', sizes: SIZES_STD },
    { file: '146.webp', title: 'Jan Garbarek 2001', sizes: ['50 × 28,8 cm', '70 × 40,4 cm', '100 × 57,7 cm'] },
    { file: '06.webp', title: 'Dag Solstad 1999', sizes: SIZES_STD },
    { file: '149.webp', title: 'Jan Erik Vold 2000', sizes: SIZES_STD },
  ],

  folkSomLeser: [
    { file: '104.webp', title: 'Uten tittel', sizes: SIZES_STD },
    { file: '095.webp', title: 'Wien 1979', sizes: SIZES_STD },
    { file: '100.webp', title: 'Cannes 1986', sizes: SIZES_STD },
    { file: '103.webp', title: 'Oslo', sizes: SIZES_STD },
    { file: '105.webp', title: 'Uten tittel', sizes: SIZES_STD },
    { file: '106.webp', title: 'Oslo', sizes: SIZES_STD },
    { file: '107.webp', title: 'Oslo', sizes: SIZES_STD },
  ],

};
