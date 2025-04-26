"use client";

import Image from "next/image";
import exampleImg from "./parkslot.jpg"; // Adjust path as needed
import Link from "next/link";
import { IParkingSlot } from "@/@types/ParkingSlot";

interface IParkingSlotItemProps {
  parkingSlot: IParkingSlot;
}

export function ParkingSlotItem({ parkingSlot }: IParkingSlotItemProps) {
  return (
    <Link href={`/parking-slots/${parkingSlot.id}`} className="cursor-pointer">
      <Image
        src={exampleImg}
        alt="Picture of the parking slot"
        className="rounded-sm"
      />
      <div className="mt-2">
        <div className="flex justify-between">
          <span>{parkingSlot.name}</span>
          <span>5.0</span>
        </div>
        <div>
          <strong>${parkingSlot.rate_per_hour} per hour</strong>
        </div>
      </div>
    </Link>
  );
}
