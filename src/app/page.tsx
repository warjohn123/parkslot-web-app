import FindParkingSearch from "@/components/features/home/find-parking-search";
import FindParkingTitle from "@/components/features/home/find-parking-text";
import { ParkingSlotItem } from "@/components/parking-slot-item";
import { supabase } from "./utils/supabaseClient";
import { IParkingSlot } from "@/@types/ParkingSlot";

async function getParkingSlots(): Promise<IParkingSlot[]> {
  const { data } = await supabase.from("parking-slots").select("*");
  return data as IParkingSlot[];
}

export default async function Page() {
  const parkingSlots: IParkingSlot[] = await getParkingSlots();

  return (
    <div className="max-w-7xl mx-auto 2xl:px-0">
      <div className="flex flex-col gap-3">
        <FindParkingTitle />
        <FindParkingSearch />
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
        {parkingSlots?.map((parkingSlot) => (
          <ParkingSlotItem parkingSlot={parkingSlot} key={parkingSlot.id} />
        ))}
      </div>
    </div>
  );
}
