import { IParkingSlot } from "@/@types/ParkingSlot";
import { supabase } from "@/app/utils/supabaseClient";
import H1 from "@/components/typhography/H1";
import dynamic from "next/dynamic";

const ParkingDetailsSection = dynamic(
  () => import("@/components/features/parking-space-details"),
  {
    loading: () => (
      <div className="flex items-center justify-center h-40">
        <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
        <span className="ml-2">Loading Parking Info...</span>
      </div>
    ),
  }
);

async function getParkingSlotById(id: number): Promise<IParkingSlot> {
  const { data } = await supabase.from("parking-slots").select().eq("id", id);
  return data![0] as IParkingSlot;
}

export default async function Page({ params }: { params: { id: string } }) {
  const parkingSlot = await getParkingSlotById(parseInt(params.id));
  return (
    <div className="flex flex-col gap-4">
      <H1>Parking space details</H1>
      <ParkingDetailsSection parkingSlot={parkingSlot} />
    </div>
  );
}
