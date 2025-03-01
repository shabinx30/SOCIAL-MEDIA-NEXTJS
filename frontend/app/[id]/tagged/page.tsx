export default async function TaggedPage({ params }: { params: { id: string } }) {
  return <h1>🏷️ {await params.id}'s Tagged Posts</h1>;
}
