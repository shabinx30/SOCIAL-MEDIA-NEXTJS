
import Image from "next/image";

export default async function TaggedPage({ params }: { params: { id: string } }) {

    const posts: object[] = []

    if (!posts.length) {
        return (
            <div className="flex justify-center items-center w-full bg-background h-[10em] mt-[3.35em] mb-[8em]">
                <div>
                    <div className="mx-auto flex justify-center items-center border-2 rounded-full border-black w-[4em] h-[4em] dark:border-white">
                        <Image
                            className="dark:invert"
                            src="https://cdn-icons-png.flaticon.com/512/10349/10349222.png"
                            alt="reel"
                            width={40}
                            height={40}
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <h1 className="text-2xl md:text-3xl items-center font-extrabold pt-4">No Posts Yet</h1>
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
