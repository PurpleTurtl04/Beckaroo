import Image from 'next/image';
import Link from 'next/link';

export default function FeatureCard({
    title,
    text,
    image,
    alt,
    linkText,
    link,
}) {
    return (
        <div className='card bg-base-100 col-span-3 mx-auto max-w-xl shadow-sm lg:col-span-1'>
            <figure>
                <Image
                    src={image}
                    alt={alt}
                    width={0}
                    height={0}
                    sizes='100vw'
                    className='h-auto w-full'
                />
            </figure>
            <div className='card-body'>
                <h2 className='card-title font-dynapuff text-3xl'>{title}</h2>
                <p>{text}</p>
                <div className='card-actions mt-4 justify-end'>
                    <Link
                        href={link}
                        className='link link-primary text-lg font-bold lg:text-sm xl:text-lg'
                    >
                        {linkText} <span>&gt;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
