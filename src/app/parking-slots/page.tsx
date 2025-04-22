import { ParkingSlotItem } from "@/components/parking-slot-item";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto 2xl:px-0">
      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ParkingSlotItem key={i} />
        ))}
      </div>
    </div>
  );
}
