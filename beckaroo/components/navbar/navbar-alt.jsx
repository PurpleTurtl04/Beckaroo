import Link from 'next/link';

export default function NavbarAlt() {
    function closeNavMenu() {
        document.activeElement.blur();
    }

    return (
        <div className='absolute top-0 right-0 left-0 z-10 bg-transparent pt-4 text-white md:px-3 lg:px-8'>
            <nav className='3xl:px-2 container mx-auto'>
                <div className='navbar'>
                    <div className='navbar-start w-9/20 lg:w-1/2'>
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
                                tabIndex='-1'
                                className='menu menu-sm dropdown-content bg-base-300 rounded-box text-base-content z-1 mt-3 w-32 p-2 shadow'
                            >
                                <li>
                                    <Link
                                        href='/daily-tails'
                                        onClick={closeNavMenu}
                                    >
                                        Daily Tails
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/zoo' onClick={closeNavMenu}>
                                        The Zoo
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='/keepers'
                                        onClick={closeNavMenu}
                                    >
                                        The Keepers
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href='?modal=open'
                                        scroll={false}
                                        className='btn btn-xs btn-soft btn-primary pl-0'
                                        onClick={closeNavMenu}
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href='/'
                            className='font-dynapuff btn btn-link text-primary-content text-xl no-underline md:pl-0'
                        >
                            beckaroo & the zoo
                        </Link>
                    </div>
                    <div className='navbar-end hidden md:flex'>
                        <ul className='menu menu-horizontal flex-nowrap px-1 lg:gap-2'>
                            <li>
                                <Link
                                    href='/daily-tails'
                                    className='hover:bg-base-300/40'
                                >
                                    Daily Tails
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/zoo'
                                    className='hover:bg-base-300/40'
                                >
                                    The Zoo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='/keepers'
                                    className='hover:bg-base-300/40'
                                >
                                    The Keepers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href='?modal=open'
                                    scroll={false}
                                    className='btn btn-sm btn-ghost bg-base-300/30 hover:bg-base-300 hover:text-primary'
                                >
                                    Sign Up
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
