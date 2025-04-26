import FindParkingSearch from "@/components/features/home/find-parking-search";
import FindParkingTitle from "@/components/features/home/find-parking-text";
import ParkingSlotsList from "@/components/features/home/parking-slots-list";

export default async function Page() {
  return (
    <div className="max-w-7xl mx-auto 2xl:px-0">
      <div className="flex flex-col gap-3">
        <FindParkingTitle />
        <FindParkingSearch />
      </div>
      <ParkingSlotsList />
    </div>
  );
}
