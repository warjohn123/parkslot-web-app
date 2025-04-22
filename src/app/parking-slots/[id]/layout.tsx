export default function ParkingsSlotsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-6xl mx-auto 2xl:px-0">{children}</div>;
}
