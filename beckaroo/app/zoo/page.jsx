'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

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
    const [modalData, setModalData] = useState(null);
    const modalRef = useRef(null);

    const openModal = (id) => {
        const animal = animals.find((animal) => animal.id === id);
        setModalData(animal);
        modalRef.current?.showModal();
    };

    return (
        <div className='container mx-auto'>
            <h1 className='font-dynapuff mt-16 text-5xl'>The Zoo</h1>
            <p className='mt-6'>
                Here are all the animals in the Zoo. Click on their pictures to
                find out more about them!
            </p>
            <section className='3xl:max-w-10/12 mx-auto mt-20 grid grid-cols-2 gap-6'>
                {chunks.map((chunk, i) => (
                    <div className='col-span-2 lg:col-span-1' key={i}>
                        <div className='grid grid-cols-2 grid-rows-3 gap-4'>
                            {chunk.map((animal) => (
                                <div
                                    className={`hover-3d ${animal.class}`}
                                    key={animal.id}
                                    onClick={() => openModal(Number(animal.id))}
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

            {/* Modal */}
            <dialog ref={modalRef} className='modal'>
                <div className='modal-box'>
                    <div className='pt-4'>
                        {modalData?.image && (
                            <Image
                                src={modalData?.image}
                                alt={modalData?.alt}
                                width={0}
                                height={0}
                                sizes='100vw'
                                className='h-100 w-full rounded-2xl object-cover shadow-md'
                            />
                        )}
                        <div className='py-4'>
                            <h3 className='font-dynapuff mb-1 text-3xl'>
                                {modalData?.name} {modalData?.angel && '<3'}
                            </h3>
                            <p>{modalData?.text}</p>
                        </div>
                        <div className='modal-action'>
                            <form method='dialog'>
                                <button className='btn btn-sm btn-circle btn-ghost absolute top-2 right-2'>
                                    ✕
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}
