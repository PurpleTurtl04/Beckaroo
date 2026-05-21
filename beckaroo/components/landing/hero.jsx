import CooperHero from '@/public/images/CooperHero.png';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className='hero flex min-h-screen flex-col items-start justify-center overflow-hidden pl-2'>
            <Image
                src={CooperHero}
                alt='Corgi sitting outside'
                fill
                style={{ objectFit: 'cover' }}
                priority
                className='object-[30%] md:object-[10%]'
            />
            <div className='absolute inset-0 bg-black/15 md:bg-black/5' />
            <div className='hero-content text-neutral-content items-start justify-start text-shadow-lg/20 md:ml-8 lg:ml-2'>
                <div>
                    <h1 className='font-dynapuff mb-4 text-4xl font-bold md:text-5xl'>
                        Welcome to the Zoo!
                    </h1>
                    <p className='text-md mb-10 max-w-sm px-1 text-justify md:max-w-md md:text-lg'>
                        Our home and life revolve around animals, both those
                        that live with us and those that briefly touch our
                        lives. Feel free to browse and take a peek at our
                        exciting adventures.
                    </p>
                    <div className='px-1'>
                        <p className='text-md mb-1 max-w-sm text-left md:max-w-md md:text-lg'>
                            Keep up with the Daily Tails
                        </p>
                        <div className='join'>
                            <div className='text-base-content'>
                                <label className='input validator join-item'>
                                    <svg
                                        className='h-[1em] opacity-50'
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                    >
                                        <g
                                            strokeLinejoin='round'
                                            strokeLinecap='round'
                                            strokeWidth='2.5'
                                            fill='none'
                                            stroke='currentColor'
                                        >
                                            <rect
                                                width='20'
                                                height='16'
                                                x='2'
                                                y='4'
                                                rx='2'
                                            ></rect>
                                            <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                                        </g>
                                    </svg>
                                    <input
                                        type='email'
                                        placeholder='mail@site.com'
                                        required
                                    />
                                </label>
                                <div className='validator-hint hidden'>
                                    Enter valid email address
                                </div>
                            </div>
                            <button className='btn btn-secondary join-item'>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
