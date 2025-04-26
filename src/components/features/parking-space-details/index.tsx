import { IParkingSlot } from "@/@types/ParkingSlot";
import space from "@/components/parkslot.jpg";
import H2 from "@/components/typography/H2";
import Image from "next/image";

interface ParkingSpaceDetailsProps {
  parkingSlot: IParkingSlot;
}

export default function ParkingSpaceDetails({
  parkingSlot,
}: ParkingSpaceDetailsProps) {
  return (
    <>
      <div>
        <p>{parkingSlot.name}</p>
        <p>{parkingSlot.location}</p>
      </div>
      <Image src={space} width={500} height={200} alt="Parking space image" />
      <div>
        <H2>Description</H2>
      </div>
      <p>{parkingSlot.description}</p>
    </>
  );
}
