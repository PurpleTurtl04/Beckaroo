'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import SignUpField from '@/components/sign-up-field';

export default function SignUpModal() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();

    // Checks if the URL has ?modal=open
    const isOpen = searchParams.get('modal') === 'open';

    const closeModal = () => {
        // Navigates back to the page without the modal query param
        router.push(pathname, { scroll: false });
    };

    if (!isOpen) return null;

    return (
        <dialog open className='modal modal-open'>
            <div className='modal-box max-w-md'>
                <button
                    onClick={closeModal}
                    className='btn btn-sm btn-circle btn-ghost absolute top-2 right-2'
                >
                    ✕
                </button>
                <form className='space-y-4 py-4'>
                    <p>
                        Want to stay up to date with all of our latest stories?
                        Join our free email list
                    </p>
                    <SignUpField />
                </form>
            </div>
            <label className='modal-backdrop' onClick={closeModal}></label>
        </dialog>
    );
}
