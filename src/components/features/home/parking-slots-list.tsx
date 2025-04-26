"use client";

import { IParkingSlot } from "@/@types/ParkingSlot";
import { ParkingSlotItem } from "@/components/parking-slot-item";
import { useEffect, useState } from "react";

export default function ParkingSlotsList() {
  const [parkingSlots, setParkingSlots] = useState<IParkingSlot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadParkingSpots() {
      try {
        const res = await fetch("/api/parking-slots"); // 👈 calling your own API
        const data = await res.json();
        console.log("data", data);
        setParkingSlots(data.parkingSpots || []);
      } catch (error) {
        console.error("Failed to fetch parking spots:", error);
      } finally {
        setLoading(false);
      }
    }

    loadParkingSpots();
  }, []);

  if (loading) {
    return <div>Loading parking spots...</div>;
  }
  return (
    <div className="grid grid-cols-4 gap-6 mt-10">
      {parkingSlots?.map((parkingSlot) => (
        <ParkingSlotItem parkingSlot={parkingSlot} key={parkingSlot.id} />
      ))}
    </div>
  );
}
