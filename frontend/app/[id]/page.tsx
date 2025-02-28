export default function PostsPage({ params }: { params: { id: string } }) {
    return <h1>📷 {params.id}'s Posts</h1>;
}  