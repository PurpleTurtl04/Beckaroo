import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

import BlogCard from '@/components/daily-tails/blog-card';

//import blogs from '@/data/blogs.json';

export default function Blogs() {
    const contentDir = path.join(process.cwd(), 'blog');
    const filenames = fs.readdirSync(contentDir);

    const blogs = filenames.map((filename) => {
        const filePath = path.join(contentDir, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContent);

        return {
            slug: filename.replace('.mdx', ''),
            id: Number(data.id),
            title: data.title,
            description: data.description,
            blogImage: data.blogImage,
            blogImageAlt: data.blogImageAlt,
            avatar: data.avatar,
            avatarAlt: data.avatarAlt,
            author: data.author,
            date: data.date,
        };
    });

    return (
        <section className='3xl:max-w-10/12 mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
            ))}
        </section>
    );
}
