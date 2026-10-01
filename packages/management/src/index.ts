export type OperationsSection =
  'vehicles' | 'stations' | 'trips' | 'wallets' | 'devices';
export const operationsSections: ReadonlyArray<{
  id: OperationsSection;
  label: string;
}> = [
  { id: 'vehicles', label: 'ยานพาหนะ' },
  { id: 'stations', label: 'สถานีและพื้นที่จอด' },
  { id: 'trips', label: 'การเดินทาง' },
  { id: 'wallets', label: 'วอลเล็ตและบัตร' },
  { id: 'devices', label: 'อุปกรณ์ IoT' },
];
