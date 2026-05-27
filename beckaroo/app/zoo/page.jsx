import Image from 'next/image';

import animals from '@/data/animals.json';

//Sort animals array into chunks
const chunks = animals.reduce((acc, animal, index) => {
    const chunkIndex = Math.floor(index / 4);
    if (!acc[chunkIndex]) {
        acc[chunkIndex] = []; // Start a new chunk
    }
    acc[chunkIndex].push(animal);
    return acc;
}, []);

export default function Zoo() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-dynapuff mt-16 text-5xl'>The Zoo</h1>
            <p className='mt-6'>
                Here are all the animals in the Zoo. Click on their pictures to
                find out more about them!
            </p>
            <section className='mx-auto mt-20 grid max-w-11/12 grid-cols-2 gap-4 xl:max-w-10/12'>
                {chunks.map((chunk, i) => (
                    <div className='col-span-2 lg:col-span-1' key={i}>
                        <div className='grid grid-cols-2 grid-rows-3 gap-4'>
                            {chunk.map((animal) => (
                                <div
                                    className={`hover-3d ${animal.class}`}
                                    key={animal.id}
                                >
                                    <Image
                                        src={animal.image}
                                        alt={animal.alt}
                                        width={0}
                                        height={0}
                                        sizes='100vw'
                                        className='h-full w-full rounded-2xl object-cover'
                                    />
                                    {/* 8 empty divs needed for the 3D effect */}
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
