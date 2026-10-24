import type { ImageSourcePropType } from 'react-native';

export const categories = [
  { id: 'cars', label: 'รถยนต์' },
  { id: 'motorcycles', label: 'มอเตอร์ไซค์' },
  { id: 'yachts', label: 'เรือยอชต์' },
  { id: 'aircraft', label: 'เครื่องบิน' },
] as const;
export type Category = (typeof categories)[number]['id'];
export type Vehicle = {
  id: string;
  category: Category;
  name: string;
  subtitle: string;
  image: ImageSourcePropType;
  price: number;
  seats: string;
  feature: string;
  rating: string;
};
// Illustrative inventory and rates. No availability or booking API is called.
export const vehicles: Vehicle[] = [
  {
    id: 'electric-suv',
    category: 'cars',
    name: 'Premium Electric SUV',
    subtitle: 'เงียบสบาย พร้อมสำหรับทุกเส้นทาง',
    image: require('../../assets/vehicles/car.jpg'),
    price: 1800,
    seats: '5 ที่นั่ง',
    feature: 'ไฟฟ้า · อัตโนมัติ',
    rating: '4.9',
  },
  {
    id: 'city-ev',
    category: 'cars',
    name: 'City Electric',
    subtitle: 'ทางเลือกคล่องตัวสำหรับวันในเมือง',
    image: require('../../assets/vehicles/car.jpg'),
    price: 1200,
    seats: '5 ที่นั่ง',
    feature: 'ไฟฟ้า · อัตโนมัติ',
    rating: '4.8',
  },
  {
    id: 'k6',
    category: 'motorcycles',
    name: 'KRONOS K6',
    subtitle: 'ขับเคลื่อนวันของคุณด้วยพลังงานไฟฟ้า',
    image: require('../../assets/vehicles/motorcycle.jpg'),
    price: 350,
    seats: '2 ที่นั่ง',
    feature: 'ไฟฟ้า · หมวกกันน็อก',
    rating: '4.9',
  },
  {
    id: 'yacht',
    category: 'yachts',
    name: 'Private Yacht',
    subtitle: 'วันพักผ่อนบนทะเลในแบบของคุณ',
    image: require('../../assets/vehicles/yacht.jpg'),
    price: 35000,
    seats: '8 ผู้โดยสาร',
    feature: 'พร้อมกัปตัน',
    rating: '4.9',
  },
  {
    id: 'jet',
    category: 'aircraft',
    name: 'Private Jet',
    subtitle: 'อีกระดับของการเดินทางส่วนตัว',
    image: require('../../assets/vehicles/aircraft.jpg'),
    price: 120000,
    seats: '6 ผู้โดยสาร',
    feature: 'พร้อมนักบิน',
    rating: '5.0',
  },
];
export const pickupLocations: Record<Category, string[]> = {
  cars: ['สาขาสุขุมวิท กรุงเทพฯ', 'สาขาสาทร กรุงเทพฯ'],
  motorcycles: ['สาขาสุขุมวิท กรุงเทพฯ', 'สาขาสาทร กรุงเทพฯ'],
  yachts: ['ท่าเรือภูเก็ต', 'ท่าเรือพัทยา'],
  aircraft: ['สนามบินดอนเมือง', 'สนามบินสุวรรณภูมิ'],
};
export const money = (amount: number) => `฿${amount.toLocaleString('en-US')}`;
export const serviceFee = 300;
