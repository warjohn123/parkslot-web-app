export default function Page({ params }: { params: { id: string } }) {
  return <div>Hello parking slot {params.id}</div>;
}
