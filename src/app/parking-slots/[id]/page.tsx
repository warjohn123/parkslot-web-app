import H1 from "@/components/typhography/H1";
import Image from "next/image";
import space from "@/components/parkslot.jpg";
import H2 from "@/components/typhography/H2";
import { supabase } from "@/app/utils/supabaseClient";
import { IParkingSlot } from "@/@types/ParkingSlot";

async function getParkingSlotById(id: number): Promise<IParkingSlot> {
  const { data } = await supabase.from("parking-slots").select().eq("id", id);
  return data![0] as IParkingSlot;
}

export default async function Page({ params }: { params: { id: string } }) {
  const parkingSlot = await getParkingSlotById(parseInt(params.id));
  return (
    <div className="flex flex-col gap-4">
      <H1>Parking space details</H1>
      <div>
        <p>{parkingSlot.name}</p>
        <p>{parkingSlot.location}</p>
      </div>
      <Image src={space} width={500} height={200} alt="Parking space image" />
      <div>
        <H2>Description</H2>
      </div>
      <p>{parkingSlot.description}</p>
    </div>
  );
}
