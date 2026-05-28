import Blogs from '@/components/daily-tails/blogs-grid';

export const metadata = {
    title: 'Daily Tails',
    description:
        'Check out some posts about a lot of fun stories and lessons learned from owning so many animals.',
};

export default function DailyTails() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-dynapuff mt-8 text-5xl lg:mt-16'>
                Daily Tails
            </h1>
            <p className='mt-6'>
                There&apos;s always something going on around this place. Click
                on the different stories below to read about our fun times.
            </p>
            <section className='mt-12 lg:mt-15'>
                <Blogs />
            </section>
        </div>
    );
}
