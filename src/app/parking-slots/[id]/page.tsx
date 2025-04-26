import { IParkingSlot } from "@/@types/ParkingSlot";
import { supabase } from "@/app/utils/supabaseClient";
import ParkingSpaceDetails from "@/components/features/parking-space-details";
import H1 from "@/components/typography/H1";
import { Metadata } from "next";
import { FC } from "react";

// 1. Correct props type
type PageProps = {
  params: Promise<{ id: string }>; // This expects `params` to be a promise
};

// 2. Fetch function
async function getParkingSlotById(id: number) {
  const { data, error } = await supabase
    .from("parking-slots")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as IParkingSlot;
}

// 3. Optional: Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const id = parseInt((await params).id);
  const parkingSlot = await getParkingSlotById(id);

  return {
    title: `Parking Slot ${parkingSlot.name || parkingSlot.id}`,
    description:
      parkingSlot.description || `Parking slot #${parkingSlot.id} details.`,
  };
}

export async function generateStaticParams() {
  const { data, error } = await supabase.from("parking-slots").select("id");

  if (error) {
    console.error(error);
    return [];
  }

  return (
    data?.map((slot) => ({
      id: slot.id.toString(),
    })) || []
  );
}

// 4. Main Page component
const Page: FC<PageProps> = async ({ params }) => {
  const id = parseInt((await params).id);

  let parkingSlot: IParkingSlot;
  try {
    parkingSlot = await getParkingSlotById(id);
  } catch (err) {
    console.error(err);
    // You can also redirect to 404 here if not found
    throw new Error("Parking slot not found.");
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <H1>Parking Space Details</H1>
      <ParkingSpaceDetails parkingSlot={parkingSlot} />
    </div>
  );
};

export default Page;
