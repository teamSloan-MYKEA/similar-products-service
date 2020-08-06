const AWS = 'https://ikea-ch.s3.us-east-2.amazonaws.com/';

const names = ['STRANDMON', 'SÖDERHAMN', 'KIVIK', 'GISTAD', 'MORABO', 'KOARP', 'PELLO', 'JÄPPLING', 'EKERÖ', 'EKTORP', 'VALLENTUNA', 'POÄNG', 'BINGSTA', 'MUREN', 'BUSKBO', 'FÄRLÖV', 'RÅDVIKEN', 'LIDHULT', 'MALM', 'HEMNES'];

const descriptions = ['Armchair', 'Modular loveseat', 'Wing chair', 'Sectional, 1-seat', 'Chaise', 'Chair', 'Rocking Chair', 'Swivel Recliner'];

const prices = [159, 179, 199, 269, 249, 349, 379, 399, 599, 749];

const photos = [
  ['bingsta-armchair__1.webp',
    'bingsta-armchair__2.webp'],
  ['bingsta-high-back-armchair__1.webp',
    'bingsta-high-back-armchair__2.webp'],
  ['buskbo-armchair__1.webp',
    'buskbo-armchair__2.webp'],
  ['ekeroe-armchair__1.jpeg',
    'ekeroe-armchair__2.webp'],
  ['ekolsund-recliner__1.webp',
    'ekolsund-recliner__2.webp'],
  ['faerloev-armchair__1.jpeg',
    'faerloev-armchair__2.jpeg'],
  ['gistad-recliner__1.jpeg',
    'gistad-recliner__2.webp'],
  ['koarp-armchair__1.webp',
    'koarp-armchair__2.webp'],
  ['morabo-armchair__1.webp',
    'morabo-armchair__2.webp'],
  ['muren-recliner__1.webp',
    'muren-recliner__2.webp'],
  ['poaeng-armchair__1.webp',
    'poaeng-armchair__2.webp'],
  ['radviken-armchair__1.webp',
    'radviken-armchair__2.webp'],
  ['remsta-armchair__1.webp',
    'remsta-armchair__2.webp'],
  ['soederhamn-armchair__1.webp',
    'soederhamn-armchair__2.webp'],
  ['soederhamn-armchair__3.jpeg',
    'soederhamn-armchair__4.webp'],
  ['soederhamn-chaise-longue__1.webp',
    'soederhamn-chaise-longue__2.webp'],
  ['strandmon-wing-chair__1.jpeg',
    'strandmon-wing-chair__2.jpeg'],
  ['tullsta-armchair__1.webp',
    'tullsta-armchair__2.webp'],
  ['ulriksberg-armchair__1.webp',
    'ulriksberg-armchair__2.webp'],
  ['vedbo-armchair__1.webp',
    'vedbo-armchair__2.webp'],
]

module.exports = {
  names: names,
  descriptions: descriptions,
  prices: prices,
  photos: photos,
  AWS: AWS
};