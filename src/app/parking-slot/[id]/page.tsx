export default function Page({ params }: { params: { id: string } }) {
  console.log("search params", params.id);
  return <div>Hello parking slot {params.id}</div>;
}
