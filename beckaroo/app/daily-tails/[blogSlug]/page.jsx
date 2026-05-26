import { notFound } from 'next/navigation';
import Image from 'next/image';

import blogs from '@/data/blogs.json';

export async function generateMetadata({ params }) {
    const { blogSlug } = await params;
    const blog = blogs.find((blog) => blog.id === Number(blogSlug));

    if (!blog) {
        return notFound();
    }

    return {
        title: blog.title,
        description: blog.summary,
    };
}

export default async function BlogPost({ params }) {
    const { blogSlug } = await params;
    const blog = blogs.find((blog) => blog.id === Number(blogSlug));

    if (!blog) {
        return notFound();
    }

    return (
        <div className='container mx-auto flex flex-col items-center'>
            <div className='flex max-w-3xl flex-col items-center md:items-start'>
                <h1 className='mt-16 text-center text-4xl leading-tight font-semibold md:text-left lg:text-5xl'>
                    {blog.title}
                </h1>
                <div className='mt-3 flex items-end gap-2 lg:mt-4'>
                    <div className='avatar'>
                        <div className='w-8 rounded-full'>
                            {blog.avatar && (
                                <Image
                                    src={blog.avatar}
                                    alt={blog.avatarAlt}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='h-auto w-full'
                                />
                            )}
                        </div>
                    </div>
                    <div className='flex gap-2 pb-1'>
                        <p>{blog.author}</p>
                        <span>|</span>
                        <p>{blog.date}</p>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                {blog.blogImage && (
                    <Image
                        src={blog.blogImage}
                        alt={blog.blogImageAlt}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full max-w-4xl rounded-2xl'
                    />
                )}
            </div>
            <div className='mt-12 max-w-3xl'>{blog.text}</div>
        </div>
    );
}
