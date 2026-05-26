import BlogCard from './blog-card';

import blogs from '@/data/blogs.json';

export default function Blogs() {
    return (
        <section className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-4'>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} {...blog} />
            ))}
        </section>
    );
}
