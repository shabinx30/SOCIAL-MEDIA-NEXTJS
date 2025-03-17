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

    const scrollStory = (e: React.MouseEvent<HTMLButtonElement>) => {
        setCount(count + 1);
        e.currentTarget.parentElement?.parentElement?.scrollBy({ left: 270, behavior: 'smooth' });
    };

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StoriesContent 
                count={count} 
                handleQueryChange={handleQueryChange} 
                scrollStory={scrollStory} 
            />
        </Suspense>
    );
};

const StoriesContent = ({ count, handleQueryChange, scrollStory }: any) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('id');

    useEffect(() => {
        router.push(`?id=${count}`, { scroll: false });
    }, [count]);

    return (
        <div className="flex justify-center gap-12 pl-[90%] items-center w-[100vw] h-[100vh] scrollbar-hide overflow-x-auto whitespace-nowrap min-w-full">
            {['1', '2', '3', '4', '5', '6'].map((route, index) => (
                <div key={index} className="inline-flex h-full items-center gap-4 ">
                    <div
                        onClick={() => handleQueryChange(route)}
                        className={`${route === searchQuery
                            ? 'w-[24em] h-[92vh]'
                            : 'w-[14em] h-[52vh]'
                            } bg-[#282828] rounded-2xl transition-all duration-500 ease-in-out`}
                    />

                    <button onClick={(e) => scrollStory(e)} className="p-3 absolute right-[35%] bg-gray-300 text-black rounded-full">&gt;</button>
                </div>
            ))}
        </div>
    );
};

export default Stories;
