import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({
    blogImage,
    blogImageAlt,
    title,
    summary,
    avatar,
    avatarAlt,
    author,
    date,
}) {
    return (
        <div className='card bg-base-100 col-span-1 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>
            <figure>
                {blogImage && (
                    <Image
                        src={blogImage}
                        alt={blogImageAlt}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='h-auto w-full'
                    />
                )}
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p>{summary}</p>
                <div className='flex items-end justify-start gap-2'>
                    <div className='avatar mt-9'>
                        <div className='w-8 rounded-full'>
                            {avatar && (
                                <Image
                                    src={avatar}
                                    alt={avatarAlt}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='h-auto w-full'
                                />
                            )}
                        </div>
                    </div>
                    <div className='flex gap-2 pb-1'>
                        <p>{author}</p>
                        <span>|</span>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
