import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FindParkingSearch() {
  return (
    <div className="w-full items-center">
      <div className="flex m-auto w-2/5 gap-3">
        <Input placeholder="Search by location" className="w-100" />
        <Button>Search</Button>
      </div>
    </div>
  );
}
