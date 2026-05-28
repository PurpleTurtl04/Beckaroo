import FeatureCard from '@/components/landing/feature-card';

import features from '@/data/features.json';

export default function Features() {
    return (
        <section className='container mx-auto mt-20 grid grid-cols-3 gap-8 lg:mt-30 lg:gap-4'>
            {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
            ))}
        </section>
    );
}
