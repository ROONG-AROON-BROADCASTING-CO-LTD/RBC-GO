export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
export type VehicleStatus =
  'available' | 'reserved' | 'unlocking' | 'in_use' | 'offline' | 'maintenance';
export type TripStatus =
  | 'pending_unlock'
  | 'active'
  | 'paused'
  | 'pending_lock'
  | 'completed'
  | 'failed';
export interface Wallet {
  id: string;
  balanceSatang: number;
  currency: 'THB';
}
export interface DigitalCard {
  id: string;
  walletId: string;
  status: 'active' | 'suspended';
}
export interface Vehicle {
  id: string;
  type: 'e_bike' | 'e_scooter';
  status: VehicleStatus;
  batteryPercent: number;
  deviceId: string;
}
export interface Trip {
  id: string;
  vehicleId: string;
  walletId: string;
  status: TripStatus;
  distanceMeters: number;
  fareSatang: number;
}
export interface DeviceTelemetry {
  deviceId: string;
  sequence: number;
  reportedAt: string;
  latitude: number;
  longitude: number;
  batteryPercent: number;
  odometerMeters: number;
  locked: boolean;
}
export interface SystemStatus {
  status: 'healthy';
  service: string;
  capabilities: {
    payments: 'not_configured';
    authentication: 'not_configured';
    iot: 'not_configured';
    billing: 'distance';
  };
}
