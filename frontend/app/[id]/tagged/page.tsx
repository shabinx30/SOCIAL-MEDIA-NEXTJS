export default function TaggedPage({ params }: { params: { id: string } }) {
  return <h1>🏷️ {params.id}'s Tagged Posts</h1>;
}
