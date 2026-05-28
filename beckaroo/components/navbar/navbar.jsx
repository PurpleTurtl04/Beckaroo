'use client';
import { usePathname } from 'next/navigation';

import NavbarMain from '@/components/navbar/navbar-main';
import NavbarAlt from '@/components/navbar/navbar-alt';

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? <NavbarAlt /> : <NavbarMain />;
}
