import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({
    id,
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
        <div className='card bg-base-100 col-span-1 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl'>
            <Link href={`/daily-tails/${id}`}>
                <figure>
                    {blogImage && (
                        <Image
                            src={blogImage}
                            alt={blogImageAlt}
                            width={0}
                            height={0}
                            sizes='100vw'
                            className='h-auto w-full rounded-t-2xl'
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
            </Link>
        </div>
    );
}
