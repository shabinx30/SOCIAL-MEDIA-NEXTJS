"use client"

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Stories = () => {
    const router = useRouter();
    const [count, setCount] = useState(1);

    const handleQueryChange = (newQuery: string) => {
        router.push(`?id=${newQuery}`, { scroll: false });
        setCount(Number(newQuery));
    };

    const scrollStoryRight = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(count + 1);
        e.currentTarget.parentElement?.parentElement?.scrollBy({ left: 245, behavior: 'smooth' });
    };

    const scrollStoryLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(count - 1);
        e.currentTarget.parentElement?.parentElement?.scrollBy({ left: -245, behavior: 'smooth' });
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StoriesContent 
                count={count} 
                handleQueryChange={handleQueryChange} 
                scrollStoryRight={scrollStoryRight}
                scrollStoryLeft={scrollStoryLeft}
            />
        </Suspense>
    );
};


//types for story content
interface StoriesContentType {
    count: number; 
    handleQueryChange: (newQuery: string) => void; 
    scrollStoryRight: (e: React.MouseEvent<HTMLButtonElement>) => void
    scrollStoryLeft: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const StoriesContent = ({ count, handleQueryChange, scrollStoryRight, scrollStoryLeft }: StoriesContentType) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('id');

    useEffect(() => {
        router.push(`?id=${count}`, { scroll: false });
    }, [count]);

    const arr = ['1', '2', '3', '4', '5', '6']

    return (
        <div className="flex justify-center gap-12 pl-[80%] items-center w-[100vw] h-[100vh] scrollbar-hide overflow-x-auto whitespace-nowrap min-w-full">
            <div className="flex h-full items-center gap-4 justify-center px-[35em]">
                {count > 1 && <button onClick={(e) => scrollStoryLeft(e)} className="p-3 absolute left-[33%] bg-gray-300 text-black rounded-full">&lt;</button>}
                {arr.map((route, index) => (
                    <div key={index}>
                        {/* previous */}
                        <div
                            id={index+''}
                            onClick={() => handleQueryChange(route)}
                            className={`${route === searchQuery
                                ? 'w-[24em] h-[92vh]'
                                : 'w-[14em] h-[52vh]'
                                } bg-[#282828] rounded-2xl transition-all duration-500 ease-in-out`}
                        >
                            {index}
                        </div>
                        {/* next */}
                    </div>
                ))}
                {count < arr.length && <button onClick={(e) => scrollStoryRight(e)} className="p-3 absolute right-[35%] bg-gray-300 text-black rounded-full">&gt;</button>}
            </div>
        </div>
    );
};

export default Stories;
