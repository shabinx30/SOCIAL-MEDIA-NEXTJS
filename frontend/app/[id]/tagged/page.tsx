export default async function TaggedPage({ params }: { params: { id: string } }) {
    const {id} = await params

    return (
        <>
            <div className="grid grid-cols-3 w-full gap-1 pb-[6em]">
                <div className="bg-[#2B2B2B] w-full relative aspect-square"></div>
                <div className="bg-[#2B2B2B] w-full relative aspect-square"></div>
            </div>
        </>
    )
}
