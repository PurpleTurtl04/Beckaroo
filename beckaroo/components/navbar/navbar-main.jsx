import Link from 'next/link';

export default function NavbarMain() {
    return (
        <div className='bg-primary text-primary-content flex justify-center shadow-sm'>
            <nav className='container'>
                <div className='navbar md:px-4 lg:px-8'>
                    <div className='navbar-start'>
                        <div className='dropdown'>
                            <div
                                tabIndex='0'
                                role='button'
                                className='btn btn-ghost btn-square md:hidden'
                            >
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    className='inline-block h-7 w-7 stroke-current'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    ></path>
                                </svg>
                            </div>
                            <ul
                                tabindex='-1'
                                className='menu menu-sm dropdown-content bg-base-300 rounded-box text-base-content z-1 mt-3 w-32 p-2 shadow'
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
                                    <div className='btn btn-xs btn-soft btn-primary pl-0'>
                                        Sign Up
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href='/'
                            className='font-dynapuff btn btn-link text-primary-content text-xl no-underline'
                        >
                            beckaroo & the zoo
                        </Link>
                    </div>
                    <div className='navbar-end hidden md:flex'>
                        <ul className='menu menu-horizontal px-1'>
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
                                <div className='btn btn-sm btn-ghost bg-base-300/30 hover:bg-base-300 hover:text-primary'>
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
