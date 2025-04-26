export interface IParkingSlot {
  id: string;
  created_at: Date;
  name: string;
  description: string;
  location: string;
  rate_per_day: number;
  rate_per_hour: number;
  coordinates: ICoordinates;
}

interface ICoordinates {
  lat: number;
  long: number;
}
