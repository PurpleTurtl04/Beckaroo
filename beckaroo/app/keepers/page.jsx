import Keeper from '@/components/keepers/keeper';

import keepers from '@/data/keepers.json';

export default function Keepers() {
    return (
        <div className='container mx-auto'>
            <h1 className='font-dynapuff mt-16 text-5xl'>The Keepers</h1>
            <p className='mt-6'>
                While having this many animals keeps us pretty busy, the Keepers
                of the Zoo do a lot of other fun stuff too!
            </p>
            <section className='mt-20'>
                {keepers.map((keeper) => (
                    <Keeper key={keeper.id} {...keeper} />
                ))}
                <Keeper />
            </section>
        </div>
    );
}
