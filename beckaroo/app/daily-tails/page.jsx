import Blogs from '@/components/daily-tails/blogs-grid';

export default function DailyTails() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-dynapuff mt-16 text-5xl'>Daily Tails</h1>
            <p className='mt-6'>
                There&apos;s always something going on around this place. Click
                on the different stories below to read about our fun times.
            </p>
            <section className='mt-15 lg:mt-20'>
                <Blogs />
            </section>
        </div>
    );
}
