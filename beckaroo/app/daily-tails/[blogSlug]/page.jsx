import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const mdxComponents = {
    h1: ({ children }) => (
        <h1 className='my-4 text-3xl font-bold'>{children}</h1>
    ),
    p: ({ children }) => <p className='mb-4 leading-relaxed'>{children}</p>,
};

// Helper function to avoid duplicate file-reading code
function getPostData(slug) {
    const filePath = path.join(process.cwd(), 'blog', `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    return matter(fileContent); // Returns { data, content }
}

// Dynamic SEO METADATA
export async function generateMetadata({ params }) {
    const { blogSlug } = await params;
    const post = getPostData(blogSlug);

    //Fallback metadata if the blog post doesn't exist
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    const { data } = post;

    return {
        title: `${data.title} | Beckaroo & The Zoo`,
        description: data.description,
        authors: [{ name: data.author }],
        // Controls how blog posts look when links to them are shared across social media and messaging platforms.
        openGraph: {
            title: data.title,
            description: data.description,
            type: 'article',
            publishedTime: data.date,
            authors: [data.author],
            images: [
                {
                    url: data.blogImage,
                    width: 1200,
                    height: 630,
                    alt: data.blogImageAlt,
                },
            ],
        },
    };
}

export default async function BlogPost({ params }) {
    const { blogSlug } = await params;
    const post = getPostData(blogSlug);

    if (!post) {
        notFound();
    }

    const { data, content } = post;

    return (
        <article className='container mx-auto flex flex-col items-center'>
            <div className='flex max-w-3xl flex-col items-center md:items-start'>
                <h1 className='mt-16 text-center text-4xl leading-tight font-semibold md:text-left lg:text-5xl'>
                    {data.title}
                </h1>
                <div className='mt-3 flex items-end gap-2 lg:mt-4'>
                    <div className='avatar'>
                        <div className='w-8 rounded-full'>
                            {data.avatar && (
                                <Image
                                    src={data.avatar}
                                    alt={data.avatarAlt}
                                    width={0}
                                    height={0}
                                    sizes='100vw'
                                    className='h-auto w-full'
                                />
                            )}
                        </div>
                    </div>
                    <div className='flex gap-2 pb-1'>
                        <p>{data.author}</p>
                        <span>|</span>
                        <p>{data.date}</p>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                {data.blogImage && (
                    <Image
                        src={data.blogImage}
                        alt={data.blogImageAlt}
                        width={0}
                        height={0}
                        sizes='100vw'
                        className='w-full max-w-4xl min-w-md rounded-2xl'
                    />
                )}
            </div>
            <div className='mt-12 max-w-3xl'>
                <MDXRemote source={content} components={mdxComponents} />
            </div>
        </article>
    );
}
