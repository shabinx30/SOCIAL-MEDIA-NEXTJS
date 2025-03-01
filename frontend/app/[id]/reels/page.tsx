export default async function ReelsPage({ params }: { params: { id: string } }) {
  return <h1>🎥 {await params.id}'s Reels</h1>;
}
