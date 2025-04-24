"use client";

import Image from "next/image";
import exampleImg from "./parkslot.jpg"; // Adjust path as needed
import Link from "next/link";

export function ParkingSlotItem() {
  return (
    <Link href={`/parking-slots/${123}`} className="cursor-pointer">
      <Image
        src={exampleImg}
        alt="Picture of the parking slot"
        className="rounded-sm"
      />
      <div className="mt-2">
        <div className="flex justify-between">
          <span>Ayala Central Bloc Basement</span>
          <span>5.0</span>
        </div>
        <div>
          <strong>5 per hour</strong>
        </div>
      </div>
    </Link>
  );
}
