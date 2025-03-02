

export default async function ReelsPage({ params }: { params: { id: string } }) {
    const { id } = await params

    let posts: object[] = []

    if (!posts.length) {
        return (
            <div className="flex justify-center items-center w-full bg-background h-[10em] mt-[4em] mb-[8em]">
                <div className="">
                    <div className="flex justify-center items-center">
                        <h1 className="text-2xl md:text-3xl items-center font-extrabold pt-4">Share a moment with the world</h1>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="items-center text-[#0095F6] pt-5">Create your first reel</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="grid grid-cols-3 w-full gap-1 pt-[0.5em] pb-[6em]">
                {posts.map((val, index) => (
                    <div key={index} className="bg-[#2B2B2B] w-full relative aspect-square"></div>
                ))}
            </div>
        )
    }
}
