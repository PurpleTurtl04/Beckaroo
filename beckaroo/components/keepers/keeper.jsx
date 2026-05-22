import Image from 'next/image';

export default function Keeper({ name, text, image, alt, reverse }) {
    return (
        <div className='mt-10 grid grid-cols-2 gap-4 lg:gap-8'>
            <Image
                src={image}
                alt={alt}
                width={0}
                height={0}
                sizes='100vw'
                className={`col-span-2 h-auto w-full rounded-xl shadow-sm lg:col-span-1 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
            />
            <div
                className={`col-span-2 lg:col-span-1 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
            >
                <h2 className='font-dynapuff mb-2 text-4xl'>{name}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
