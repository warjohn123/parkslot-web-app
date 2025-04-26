import { IParkingSlot } from "@/@types/ParkingSlot";
import { supabase } from "@/app/utils/supabaseClient";
import ParkingSpaceDetails from "@/components/features/parking-space-details";
import H1 from "@/components/typhography/H1";

async function getParkingSlotById(id: number): Promise<IParkingSlot> {
  const { data } = await supabase.from("parking-slots").select().eq("id", id);
  return data![0] as IParkingSlot;
}

export default async function Page({ params }: { params: { id: string } }) {
  const parkingSlot = await getParkingSlotById(parseInt(params.id));
  return (
    <div className="flex flex-col gap-4">
      <H1>Parking space details</H1>
      <ParkingSpaceDetails parkingSlot={parkingSlot} />
    </div>
  );
}
