import Link from 'next/link';

export default function NavbarAlt() {
    return (
        <div class='absolute top-0 right-0 left-0 z-10 bg-transparent pt-4 text-white md:px-3 lg:px-8'>
            <nav class='container mx-auto'>
                <div class='navbar'>
                    <div class='navbar-start'>
                        <div class='dropdown'>
                            <div
                                tabindex='0'
                                role='button'
                                class='btn btn-ghost btn-square md:hidden'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    class='inline-block h-7 w-7 stroke-current'
                                >
                                    <path
                                        stroke-linecap='round'
                                        stroke-linejoin='round'
                                        stroke-width='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </div>
                            <ul
                                tabindex='-1'
                                class='menu menu-sm dropdown-content bg-base-300 rounded-box text-base-content z-1 mt-3 w-32 p-2 shadow'
                            >
                                <li>
                                    <Link href='/'>Daily Tails</Link>
                                </li>
                                <li>
                                    <Link href='/'>The Zoo</Link>
                                </li>
                                <li>
                                    <Link href='/'>The Keepers</Link>
                                </li>
                                <li>
                                    <div class='btn btn-xs btn-soft btn-primary pl-0'>
                                        Sign Up
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href='/'
                            class='font-dynapuff btn btn-link text-primary-content text-xl no-underline'
                        >
                            beckaroo & the zoo
                        </Link>
                    </div>
                    <div class='navbar-end hidden md:flex'>
                        <ul class='menu menu-horizontal px-1'>
                            <li>
                                <Link href='/'>Daily Tails</Link>
                            </li>
                            <li>
                                <Link href='/'>The Zoo</Link>
                            </li>
                            <li>
                                <Link href='/'>The Keepers</Link>
                            </li>
                            <li>
                                <div class='btn btn-sm btn-ghost bg-base-300/30 hover:bg-base-300 hover:text-primary'>
                                    Sign Up
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
