'use client';
import { usePathname } from 'next/navigation';

import NavbarMain from './navbar-main';
import NavbarAlt from './navbar-alt';

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? <NavbarAlt /> : <NavbarMain />;
}
