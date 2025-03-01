export default async function PostsPage({ params }: { params: { id: string } }) {
    return <h1>📷 {await params.id}'s Posts</h1>;
}  