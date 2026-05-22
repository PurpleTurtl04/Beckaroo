import FeatureCard from './feature-card';

import features from '@/data/features.json';

export default function Features() {
    return (
        <section className='container mx-auto mt-30 grid grid-cols-3 gap-4'>
            {features.map((feature) => (
                <FeatureCard key={feature.id} {...feature} />
            ))}
        </section>
    );
}
