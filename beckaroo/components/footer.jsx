import Image from 'next/image';

export default function Footer() {
    return (
        <footer className='bg-primary text-primary-content mt-30 flex flex-col items-center justify-center'>
            <h2 className='font-dynapuff mt-6 pb-4 text-2xl'>
                beckaroo & the zoo
            </h2>
            <div className='flex items-center justify-center gap-4 pb-6'>
                <a>
                    <Image
                        src='/images/Instagram.svg'
                        width={35}
                        height={35}
                        alt='Instagram Logo'
                    />
                </a>
                <a href='' className='hover:text-secondary'>
                    <Image
                        src='/images/TikTok.svg'
                        width={35}
                        height={35}
                        alt='TikTok Logo'
                        className='fill-current'
                    />
                </a>
            </div>
            <p className='mb-4 text-sm'>
                &copy; 2026 Nick Edwards. All rights reserved.
            </p>
        </footer>
    );
}
